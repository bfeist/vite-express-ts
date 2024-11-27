import { getToken } from "../utils/token";

const getMe = async (): Promise<Pick<User, "username">> => {
  const token = getToken();
  const response = await fetch("api/v1/me", {
    method: "get",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }
  return response.json();
};

export { getMe };
