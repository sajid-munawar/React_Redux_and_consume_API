
const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value:state.value+1
            }
        case "DECREMENT":
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state
    }
}

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type:"DECREMENT"
    }
}

export default counterReducer;