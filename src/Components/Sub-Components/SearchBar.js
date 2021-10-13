function SearchBar(props){
    
    function handleUserInput(event){
        props.onChange(event.target.name, event.target.value);
    }

    return(
        <div className="row">
            <div className="col-xl-4 offset-xl-4 col-6 offset-3">
                <label htmlFor="stockTickerSearchInput" className="form-label">Stock Symbol</label>
                <input value={props.userInput} onChange={handleUserInput} name="stockTickerSearchInput" type="input" className="form-control" id="stockTickerSearchInput" aria-describedby="stockTickerSearchInputTip" placeholder="Enter ticker/symbol here ..."></input>
                <div id="stockTickerSearchInputTip" className="form-text">Ex: AAPL, MSFT </div>
            </div>
        </div>
    );
}

export default SearchBar;