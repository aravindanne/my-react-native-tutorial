import client from "./client";

const login = (email, password) => {
  return client.post("/auth", { email, password }).then((el) => {
    return el;
  });
};

export default {
  login,
};
