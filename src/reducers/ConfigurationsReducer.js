const initialValue = {
  showProfile: false,
};
const ConfigurationsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "SHOWPROFILE":
      return { ...state, showProfile: true };
    default:
      return { ...state };
  }
};

export default ConfigurationsReducer;
//NO IMPLEMENATION YET
