
const authHeader = () =>{
    const user = JSON.parse(localStorage.getItem("user"))

    if(user && user.access){
        return {"x-access-token": user.access}
    } else{
        return {}
    }
}

export default authHeader