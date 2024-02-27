import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className='mt-5 text-center'>
                <Link to="/" className="text-decoration-none text-dark"><h2>JSONPlaceholder</h2></Link>
        </div>
    )
}