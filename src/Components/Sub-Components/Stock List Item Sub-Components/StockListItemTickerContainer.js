function StockListItemTickerContainer(props){
    return(
        <div className="col-2">
            <div className="border border-2 rounded-circle d-flex justify-content-center align-items-center">
                <div className="text-center" id="stockTickerContainer">
                    {props.stockTicker}
                </div>
                
            </div>
        </div>
    );
}

export default StockListItemTickerContainer;