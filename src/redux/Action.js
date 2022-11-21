export const LOGIN = "LOGIN"
export const  ADDCART = "ADDCART";
export const UPDATECART = "UPDATECART"
export const STYLE = "STYLE"
export const SHOWBTN = "SHOWBTN"

export const login = (token) =>{
    console.log(token)
    return{
        type : LOGIN,
        payload : token
    }
}

export const addCart = (cart) =>{
    return{
        type: ADDCART,
        payload:cart
    }
}

export const updateCart = (updatedCart) =>{
    return{
        type:UPDATECART,
        payload:updatedCart
    }
}

export const style = (classActive) =>{
    return{
        type: STYLE,
        payload:classActive
    }
}

export const showBtn = (value) =>{
    return{
        type:SHOWBTN,
        payload:value
    }
}

