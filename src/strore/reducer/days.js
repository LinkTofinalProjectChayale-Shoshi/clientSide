const initialState = {
    arrDays: []
}

export const daysReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_DAY":
            return {
                ...state,
                arrDays: [...state.arrDays, action.payload]
            }
        default:
            return  state 
    }
    // return state;

}