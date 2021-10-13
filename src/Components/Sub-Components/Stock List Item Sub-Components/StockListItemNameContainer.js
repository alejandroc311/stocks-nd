function StockListItemNameContainer(props){
    return(
        <div className="col-auto d-flex justify-content-start align-items-center">
                <div className="text-center">
                    ${props.stockName}
                </div> 
            
        </div>
    );
}

export default StockListItemNameContainer;