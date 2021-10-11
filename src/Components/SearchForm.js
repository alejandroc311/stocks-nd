import SearchBar from "./Sub-Components/SearchBar";
import SearchButton from "./Sub-Components/SearchButton";

function SearchForm(props){
    function handleUserInput(name, value){
        props.onChange(name, value);
    }
    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit();
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="container">
                <SearchBar onChange={handleUserInput} userInput={props.userInput}/>
                <SearchButton isFormSubmittable={props.isFormSubmittable}/>
            </div>
        </form>
    );
}

export default SearchForm; 