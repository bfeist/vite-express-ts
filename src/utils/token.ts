const TOKEN_NAME = "token";

const hasToken = () =>
  document.cookie.split(";").some((cookie) => cookie.trim().startsWith(`${TOKEN_NAME}=`));

const removeToken = () =>
  (document.cookie = `${TOKEN_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);

const getToken = () =>
  document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith(`token=`))
    ?.split("=")[1];

export { hasToken, removeToken, getToken };
