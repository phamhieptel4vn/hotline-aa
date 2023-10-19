import queryString from 'query-string';

/**
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 * @param {string|null} [token]
 */
export function apiPost(resource, data, token = null) {
    return fetch(resource, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: data && JSON.stringify(data)
    });
}


/**
 * @param {string} resource
 * @param {Record<string, unknown>|object} [params]
 * @param {string|null} [token]
 */
export function apiGet(resource, params = {}, token = null) {
    resource += '?' + queryString.stringify(params)
    return fetch(resource, {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + token
        },

    });
}

/**
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 * @param {string|null} [token]
 */
export function apiPut(resource, data, token = null) {
    return fetch(resource, {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: data && JSON.stringify(data)
    });
}

/**
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 * @param {string|null} [token]
 */
export function apiDelete(resource, data, token = null) {
    return fetch(resource, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: data && JSON.stringify(data)
    });
}

/**
 * @param {string} resource
 * @param {any} data
 * @param {string|null} [token]
 */
export function apiPostFormData(resource, data, token = null) {
    return fetch(resource, {
        method: "POST",
        headers: {
            Authorization: 'Bearer ' + token
        },
        body: data
    });
}


/**
 * @param {string} resource
 * @param {any} data
 * @param {string|null} [token]
 */
export function apiPostFormEncoded(resource, data, token = null) {
    return fetch(resource, {
        method: "POST",
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: data
    });
}

/**
 * @param {string} resource
 * @param {Record<string, unknown>} [data]
 * @param {string|null} [token]
 */
export function apiPatch(resource, data, token = null) {
    return fetch(resource, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: data && JSON.stringify(data)
    });
}