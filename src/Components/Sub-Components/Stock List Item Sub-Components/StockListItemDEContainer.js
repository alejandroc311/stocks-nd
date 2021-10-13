function StockListItemDEContainer(props){
    return(
        <div className="col-auto d-flex justify-content-end align-items-center">
            <div className="text-center">
                D/E: {props.stockDE}
            </div>
        </div>
    );


}
export default StockListItemDEContainer;