// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import employeesArray from "../data"


export default function EmployeeProfile(props) {
    // set state for employee information
    const [employeeInfo, setEmployeeInfo] = useState(null);

    // desctructed employee id
    const { employeeID } = useParams();
    console.log(employeeID)

    // now that the employeeiID is being selected from the useParams() method, 
    // we can search/find to select information for a specific employee

    // develop a function to get the employee information
    const getEmployeeInfo = async () => {
        try {
            // set data to find object in the array by the id set in use params (employeeID)
            const data = employeesArray.find(eachEmployee => eachEmployee.id === employeeID)
            console.log(data)
            // run setEmployeeInfo function
            setEmployeeInfo(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        // call getEmployeeInfo function- this will run the try/catch function as soon as employeeprofile page is hit
        getEmployeeInfo()
    }, [])

    const loaded = () => {
    // const { id } = useParams()
    // console.log(id)
        return (
            <div>
                <div className="employeeProfile">
                    <div className="employeeProfilePicture">
                        <img src={employeeInfo.img} alt="img" />
                        {/* <img src={employeesArray[id].img} alt="img" /> */}
                    </div>

                    <div>
                        <h2 className="employeeName">{employeeInfo.name}</h2>
                        {/* <h2 className="employeeName">{employeesArray[id].name}</h2> */}
                        <h5 className="employeeTitle">{employeeInfo.title}</h5>
                        {/* <h5 className="employeeTitle">{employeesArray[id].title}</h5> */}
                    </div>
                </div>

                <div className="employeeProfileBox">
                    <h3>Call Office &#8250;</h3>
                    <h5>{employeeInfo.office}</h5>
                    {/* <h5>{employeesArray[id].office}</h5> */}
                </div>

                <div className="employeeProfileBox">
                    <h3>Call Mobile &#8250;</h3>
                    <h5>{employeeInfo.mobile}</h5>
                    {/* <h5>{employeesArray[id].mobile}</h5> */}
                </div>

                <div className="employeeProfileBox">
                    <h3>SMS &#8250;</h3>
                    <h5>{employeeInfo.SMS}</h5>
                    {/* <h5>{employeesArray[id].SMS}</h5> */}
                </div>

                <div className="employeeProfileBox">
                    <h3>Email &#8250;</h3>
                    <h5>{employeeInfo.email}</h5>
                    {/* <h5>{employeesArray[id].email}</h5> */}
                </div>
            </div>
        );
    }
    const loading = () => {
        return <h2>Loading Employee ...</h2>
    }
    return (
        employeeInfo ? loaded() : loading()
    )
}