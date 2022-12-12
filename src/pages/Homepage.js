import Header from "../components/Header";
import Search from "../components/Search";
import EmployeeList from "../components/EmployeeList";

export default function Homepage(props) {
    return (
            <>
                <Header />
                <Search />
                <EmployeeList />
            </>
    )
};
