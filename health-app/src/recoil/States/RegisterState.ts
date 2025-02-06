import { atom } from "recoil"
export const RegisterState = atom({
    key : "RegisterState",
    default : {
        firstname : "",
        lastname : "",
        username : "",
        email : "",
        password : "",
        confirmpassword : "",
    }
})

