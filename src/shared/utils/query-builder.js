export const queryBuilder = async (Model, queryParams, options = {}) => {
    const {
        page = 1,
        limit = 12,
        sort = 'createdAt',
        order = 'desc',
        search,
        searchFields = [],
        includeDeleted = false,
        ...filters
    } = queryParams;

    const { populate = [] } = options;

    // Xây dựng điều kiện truy vấn
    const queryConditions = {};

    // Xử lý soft delete
    if (!includeDeleted) {
        queryConditions.deletedAt = null;
    }

    // Áp dụng bộ lọc từ query parameters
    Object.keys(filters).forEach((key) => {
        if (filters[key]) {
            applyFilter(key, filters[key], queryConditions);
            console.log(queryConditions);
        }
    });

    // Áp dụng tìm kiếm nếu có
    if (search && searchFields.length > 0) {
        const searchRegex = new RegExp(search, 'i'); // Không phân biệt chữ hoa/thường
        queryConditions.$or = searchFields.map((field) => {
            if (field === '_id') {
                return {
                    $expr: {
                        $regexMatch: {
                            input: { $toString: '$_id' },
                            regex: search,
                            options: 'i',
                        },
                    },
                };
            }
            return {
                [field]: searchRegex,
            };
        });
    }

    // Tạo truy vấn Mongoose với các điều kiện
    let query = Model.find(queryConditions);

    // Áp dụng population nếu có
    if (populate.length > 0) {
        populate.forEach((pop) => {
            query = query.populate({
                path: pop.path,
                select: pop.select || '', // Mặc định lấy trường name nếu không chỉ định select
            });
        });
    }

    // await Class.find({}).populate({path: "teacherId", select: "username fullname, email"}).populate({path: "majorId", select: "name code"}).populate({})

    // Áp dụng sắp xếp
    const sortOrder = order === 'desc' ? -1 : 1;
    query = query.sort({ [sort]: sortOrder });

    // Áp dụng phân trang
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;
    query = query.skip(skip).limit(limitNum);

    // Thực thi truy vấn
    const total = await Model.countDocuments(queryConditions);
    const data = await query.exec();

    return {
        data,
        meta: {
            total,
            page: pageNum,
            limit: limitNum,
            totalPages: Math.ceil(total / limitNum),
        },
    };
};
const applyFilter = (key, value, conditional) => {
    if (!value) return;

    if (value === '__nullOrEmpty__') {
        conditional.$or = [
            {
                [key]: null,
            },
            {
                [key]: { $exists: false },
            },
            { [key]: '' },
        ];
        return;
    }

    if (!isNaN(value)) {
        conditional[key] = value;
        return;
    }

    const matchAt = key.macth(/(At)/);
    if (!matchAt) {
        conditional[key] = new Date(value);
        return;
    }

    conditional[key] = value;
};
