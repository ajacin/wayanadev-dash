const LoginStatusReducer = (state = { isLoggedIn: false, user: {name:""} }, action) => {
    switch (action.type) {
        case 'LOGIN': return { ...state, isLoggedIn: true, user: action.payload.user }
        default: return { ...state };
    }
}

export default LoginStatusReducer;
