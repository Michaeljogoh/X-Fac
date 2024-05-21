
const AuthHeader = () =>{
    const user = JSON.parse(localStorage.getItem("token"))

    if(user && user.access){
        return {"x-access-token": user.access}
    } else{
        return {}
    }
}

export default AuthHeader