// redux/reducer.js

const initialState = {
    username: '',
    age: null,
    position: '',
    code: '',
    dob: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_PROFILE':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
