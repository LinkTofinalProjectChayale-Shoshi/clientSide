const initialState = {

    personalEmp: {
        lnwor: '',
        fnwor: '',
        addressfg: null,
        passwardwor: null,
        mail: null,
    },
    constrainEmp: {
        gender: '',
        languagefw: '',
        idcity: '',
        Level_of_functioningfg: '',
        age_of_o:null,
        money_of_hour:null,
        arrDays: []
    }

}

export const daysReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_PERSONAL_EMP":
            {


                switch (action.typePersonal) {
                    case "firstName":
                        return {
                            ...state,
                            personalEmp: { ...state.personalEmp, fnwor: action.payload }

                        }
                    case "lastName":
                        return {
                            ...state,
                            personalEmp: { ...state.personalEmp, lnwor: action.payload }

                        }

                    case "address":
                        return {
                            ...state,
                            personalEmp: { ...state.personalEmp, addressfg: action.payload }

                        }

                    case "email":
                        return {
                            ...state,
                            personalEmp: { ...state.personalEmp, mail: action.payload }

                        }

                    default: return state
                }
            }
        case "AdDD_CONSTRAIN_EMP":
            {
                switch (action.tyConstarin) {
                    case "gender":
                        return {
                            ...state,
                            constrainEmp: { ...state.constrainEmp, gender: action.payload }
                        }
                    case "language":
                        return {
                            ...state,
                            constrainEmp: { ...state.constrainEmp, languagefw: action.payload }
                        }
                    case "citywork":
                        return {
                            ...state,
                            constrainEmp: { ...state.constrainEmp, idcity: action.payload }
                        }
                    case "Level_of_functioningfg":
                        return {
                            ...state,
                            constrainEmp: { ...state.constrainEmp, Level_of_functioningfg: action.payload }

                        }
                    case "oldAge":
                        return {
                            ...state,
                            constrainEmp: { ...state.constrainEmp, age_of_o: action.payload }
                        }
                    case "moneyForHour":
                        return {
                            ...state,
                            constrainEmp: { ...state.constrainEmp, money_of_hour: action.payload }
                        }
                    case "arrDayes":
                        return {
                            ...state,
                            constrainEmp: { ...state.constrainEmp, arrDays: [...state.constrainEmp.arrDays, action.payload] }
                        }
                    default: return state
                }

            }
            case "Add_PAsSWORD":
            return{
                ...state,
                personalEmp: { ...state.personalEmp, passwardwor: action.payload }

            }
        default:

            return state
    }
    // return state;

}