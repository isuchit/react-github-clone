export const initialState = {
    user: null,
    userDetails: {},
    userRepos: []
};


// //selector
// export const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    console.log(action)
    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_USER_DETAILS':
            return {
                ...state,
                userDetails: action.userDetails
            }
        
        case 'SET_USER_REPO':
            return {
                ...state,
                userRepos: action.userRepos
            }

        default:
            return state;
    }

}

export default reducer;