function StockListItemNameContainer(props){
    return(
        <div className="col-6 d-flex justify-content-start align-items-center">
                <div className="text-center">
                    {props.stockName}
                </div> 
            
        </div>
    );
}

export default StockListItemNameContainer;