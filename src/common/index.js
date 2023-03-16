export const writeCookie = (key, value, days = 365) => {
    let date = new Date();
    date.setDate(date(getDate()+ days));

    const cookie = (document.cookie =
        key + "=" + value + "; expires=" + date.toGMTString() + "; path=/")
    console.log("cookie", cookie)

    return cookie;
};

export const getTokenFromCookie = (cookieName) => {
    
}
