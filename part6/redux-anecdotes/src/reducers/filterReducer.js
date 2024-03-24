const reducer = (state = '', action) => {
    if (action.type == 'SET_FILTER') {
        return action.payload
    }
    return state
}

export default reducer

export const setFilter = (value) => {
    const action = {
        type: 'SET_FILTER',
        payload: value
    }
    return action
}