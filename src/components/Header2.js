import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <span>
                <h1 className="header">
                    <Link to="/homepage" class="previous">&#8249;</Link>
                    Employee Profile
                </h1></span>
        </header>
    );
}