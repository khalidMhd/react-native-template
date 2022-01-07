import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constant/Auth";

function signinReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true }
        case USER_SIGNIN_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export { signinReducer };