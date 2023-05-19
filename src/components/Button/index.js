import { useContext } from "react";
import Context from "../Context";

function Button({value}){
    const {changeCount} = useContext(Context);

    const onClick = ()=>{
        changeCount(value)
    }
    
    return(
        <button onClick={onClick}>{value}</button>
    )
}

export default Button;