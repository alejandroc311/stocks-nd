function SearchButton(props){
    const isSubmittable = props.isFormSubmittable;
    //If the parent component passes the state "true" down to the "isFormSubmittable" prop, an enabled button is rendered.
    //Otherwise, a disabled button is rendered. 
    return(isSubmittable ? 
        <div className="row">
            <div className="col-xl-4 offset-xl-4 col-6 offset-3">
                <button className="btn btn-dark">
                    Submit
                </button> 
            </div>
        </div>
        
        :
        <div className="row">
            <div className="col-xl-4 offset-xl-4 col-6 offset-3">
                <button className="btn btn-dark disabled">
                    Submit
                </button> 
            </div>
        </div>
    );
}

export default SearchButton;