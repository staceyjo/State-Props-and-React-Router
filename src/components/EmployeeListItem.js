// - The data we passed from employee list(parent) to employee 
// list item(child) is the array of employee information:
// name, title, image, office #, mobile #, SMS # and email

// - The only data we are using for Employee List are:
// name, title and image

// Employee List Item ~ CardBodyImage.js
// export default function CardImage({ img }) {
//     return <img src={img} alt="pic" />;
// }

import { Link } from "react-router-dom";


export default function EmployeeListItem({ img, name, title, id }) {
    const employeeID = id;
    return (
        <Link to={`/employeepage/${employeeID}`}>
            <div className="employeeListItem">
                <div className="employeeImage">
                    <img src={img} alt="img" />
                </div>
                <div className="employeeText">
                    <h3 className="employeeName">{name}</h3>
                    <p className="employeeTitle">{title}</p>
                </div>
            </div>
        </Link>
    )

}