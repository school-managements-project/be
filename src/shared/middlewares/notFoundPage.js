import createError from '../utils/createError.js';

function notFoundRequest(req, res) {
    return createError(res, 404, 'Not Found Rồi Nhé!!!');
}
export default notFoundRequest;
