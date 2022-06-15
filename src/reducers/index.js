import { combineReducers } from "redux";
import LoginStatusReducer from "./LoginStatusReducer";
import ConfigurationsReducer from "./ConfigurationsReducer";

const reducer = combineReducers({
  LoginStatusReducer,
  ConfigurationsReducer,
});

export default reducer;
