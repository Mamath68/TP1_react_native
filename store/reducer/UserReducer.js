const initialState = {
    users: []
}

export default function userReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_USER':
            nextState = {
                ...state,
                users: [...state.users, action.value]
            }
            return nextState
        default:
            return state
    }
}
