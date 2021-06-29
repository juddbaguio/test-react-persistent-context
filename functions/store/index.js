const initialState = {
    count: 0
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'INCREASE_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREASE_COUNT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
} 

const store = {
    state: initialState,
    reducer
}

export default store