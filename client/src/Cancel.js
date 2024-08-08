import {useNavigate} from "react-router-dom";

export default function Cancel() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Payment Cancelled</h1>
            <button onClick={()=> navigate("../")}>Back to menu</button>
        </>
    );      
}