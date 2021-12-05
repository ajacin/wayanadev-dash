export const login = (username) =>{
    return {
        type:'LOGIN',
        payload :{
            user:{
                name:username
            }
        }
    }
}