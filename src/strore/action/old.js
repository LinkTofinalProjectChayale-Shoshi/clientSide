export const addPersonalOld=(old,tpo)=>{
    return{
        type:"ADD_OLD_DATA",
        payload:old,
        typeOld:tpo
    }
}
export const addConstraintsOld=(old,tco)=>{
    return{
        type:"ADD_CONSTRAINTS_OLD",
        payload:old,
        typeConst:tco
    }
}
export const addPasswordlOld=(old)=>{
    return{
        type:"ADD_PASSWORD_OLD",
        payload:old
    }
}