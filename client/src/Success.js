import {useNavigate} from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Payment Successful</h1>
            <button onClick={()=> navigate("../")} className="button">Back to menu</button>
        </>
    );      
}