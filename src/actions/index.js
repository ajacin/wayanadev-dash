export const login = (username) => {
  return {
    type: "LOGIN",
    payload: {
      user: {
        name: username,
      },
    },
  };
};

export const showProfile = () => {
  return {
    type: "SHOWPROFILE",
    payload: {},
  };
};
