// 导入axios实例
import httpRequest from '../../utils/requests'

// 获取用户信息
export function apiQueryCards(url, param, method = 'post') {
    return httpRequest({
        url: url,
        method: method,
        data: param,
    })
}