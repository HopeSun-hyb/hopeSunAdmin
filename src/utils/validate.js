/**验证工具**/

// 邮箱验证
export function validateEmail(email) {
    var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    return reg.test(email)
}
