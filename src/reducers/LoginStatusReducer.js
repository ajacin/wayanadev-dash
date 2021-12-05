const LoginStatusReducer = (state = { isLoggedIn: false, user: {} }, action) => {
    switch (action.type) {
        case 'LOGIN': return { ...state, isLoggedIn: true, loggedInUser: action.payload.user }
        default: return { ...state };
    }
}

export default LoginStatusReducer;
