

export const addPersonalEmp = (personalEmp, tp) => {
    return {
        type: "ADD_PERSONAL_EMP",
        payload: personalEmp,
        typePersonal: tp
    }
}

export const addConstarin = (constrainEmp, tc) => {
    return {
        type: "AdDD_CONSTRAIN_EMP",
        payload: constrainEmp,
        tyConstarin: tc
    }
}
export const addPassword = (constrainEmp) => {
    return {
        type: "Add_PAsSWORD",
        payload: constrainEmp
      
    }
}