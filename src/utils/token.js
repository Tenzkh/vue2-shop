//

export const setToken = (token) => {
    localStorage.setItem("TOKEN", token)
}

export const getToken = () => {
    return localStorage.getToken
}
export const removeToken = () => {
    localStorage.removeItem("TOKEN")
}