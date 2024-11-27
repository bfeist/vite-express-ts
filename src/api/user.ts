const loginUser = async (user: User): Promise<void> => {
  const response = await fetch("api/v1/login", {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }
  const token = await response.json();
  document.cookie = `token=${token}`;
};

const createUser = async (user: User): Promise<void> => {
  const response = await fetch("api/v1/user", {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }
};

export { loginUser, createUser };
