
const initialState = {
    old:{
        lnameold: '',
        fnameold: '',
        addressold: '',
        nomhomeold: null,
        passwardold:null,
        mail: ''
    },
    constraintsOld: {
        arrDays: [],
        gender: '',
        languageold: '',
        idcity:null,
        Level_of_functioningo:0,
        age: null,
        nationold: ''
    }
}
export const oldReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_OLD_DATA":
            switch (action.typeOld) {
                case "fnameold":
                    return {
                        ...state,
                        old: { ...state.old, fnameold: action.payload }
                    }
                case "lnameold":
                    return {
                        ...state,
                        old: { ...state.old, lnameold: action.payload }
                    }
                case "addressold":
                    return {
                        ...state,
                        old: { ...state.old, addressold: action.payload }
                    }
                case "nomhomeold":
                    return {
                        ...state,
                        old: { ...state.old, nomhomeold: action.payload }
                    }
                case "mail":
                    return {
                        ...state,
                        old: { ...state.old, mail: action.payload }
                    }
                    default: return state
            }
        case "ADD_CONSTRAINTS_OLD":
            switch (action.typeConst) {
                case "arrDays":
                    return {
                        ...state,
                        constraintsOld: { ...state.constraintsOld, arrDays:[...state.constraintsOld.arrDays ,action.payload] }
                    }
                case "idcity":
                    return {
                        ...state,
                        constraintsOld: { ...state.constraintsOld, idcity: action.payload }
                    }
                case "gender":
                    return {
                        ...state,
                        constraintsOld: { ...state.constraintsOld, gender: action.payload }
                    }
                case "age":
                    return {
                        ...state,
                        constraintsOld: { ...state.constraintsOld, age: action.payload }
                    }
                case "Level_of_functioningo":
                    return {
                        ...state,
                        constraintsOld: { ...state.constraintsOld, Level_of_functioningo: action.payload }
                    }
                case "languageold":
                    return {
                        ...state,
                        constraintsOld: { ...state.constraintsOld, languageold: action.payload }
                    }
                case "nation":
                    return {
                        ...state,
                        constraintsOld: { ...state.constraintsOld, nationold: action.payload }
                    }
                    default: return state
            }
           
        case "ADD_PASSWORD_OLD":
            return {
                ...state,
                old: { ...state.old, passwardold: action.payload }
            }
            default:
                return state
    }
    
}