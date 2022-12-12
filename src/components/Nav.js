import { Link } from "react-router-dom";

export default function Nav(props) {
    return (

        <div className="main">
            <h1>Company XYZ </h1>
            <nav className="nav">
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/contact">
                    <div>Contact Us</div>
                </Link>

                <Link to="/homepage">
                    <div>Employee Directory</div>
                </Link>
            </nav>
        </div>
    )
}