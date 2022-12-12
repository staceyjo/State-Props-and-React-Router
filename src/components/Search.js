export default function SearchBar() {
    return (
        <form className="search">
            <input id="searchbar" type="search" placeholder={"Search ..."}></input>
            <button>Enter</button>
        </form>
    );
}