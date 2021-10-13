function StockListItemTickerContainer(props){
    return(
        <div className="col-auto">
            <div className="border border-2 rounded-circle d-flex justify-content-center align-items-center">
                <div className="text-center" id="stockTickerContainer">
                    {props.stockTicker}
                </div>
                
            </div>
        </div>
    );
}

export default StockListItemTickerContainer;