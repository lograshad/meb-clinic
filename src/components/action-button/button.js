import { Link } from "react-router-dom";
import "./button.css";

const Button = ({child}) => {
    return ( 
        <Link to="/book_appointment" className="button-wrapper">
            {child}
        </Link>
     );
}
 
export default Button;