import { RoleEnum } from '../../shared/constants/enum.js';
import { generateStudentId, generateTeacherId, generateUsername } from '../../shared/utils/code-generator.js';
import { queryBuilder } from '../../shared/utils/query-builder.js';
import User from './user.model.js';

export const getAllUsers = async (query) => {
    const { includeDeleted = false, ...queryParams } = query;
    const data = await queryBuilder(User, {
        ...queryParams,
        searchFields: ['fullname', 'email', 'username', 'studentId'],
    });
    return data;
};
export const createUsers = async (body) => {

};
