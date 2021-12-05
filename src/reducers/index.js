import {combineReducers} from 'redux';
import LoginStatusReducer from './LoginStatusReducer'

const reducer = combineReducers({
    loginStatusReducer: LoginStatusReducer,
})

export default reducer;