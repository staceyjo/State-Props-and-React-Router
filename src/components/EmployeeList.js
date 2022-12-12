
// - The data we pass from a parent > child component are props

// - The employee list is the parent of employee list item
// so we import the child component into the parent to use it
import EmployeeListItem from "./EmployeeListItem";

// - The data we are passing from employee list to employee list item
// is the array of employee information which includes:
// name, title, image, office #, mobile #, SMS # and email

// - The only data we are using for Employee List are:
// name, title and image

// import data:
import employeesArray from "../data";

// In order to use the data contained within the array, 
// we need to write a function that loops over the array of data 

// map() does not change the original array of data
// JS map() method takes in the array of string

// and pass multiple props

{/* <img src={props.img} alt={`${props.name}`}/>
<h1>{props.name}</h1>
<p>{props.title}</p>
 */}


 

export default function EmployeeList(props) {
    return (
        
            <div id="employeeList">
                {employeesArray.map((elements, index) => {
                    return (
                        <EmployeeListItem key={index} {...elements} />
                    )
                }
                )}
            </div>
    )
}