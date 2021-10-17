function StockListItemRecommendationContainer(props){
    return(
        <div className="col-auto d-flex justify-content-start align-items-center">
            <div className="text-center">
               Tip: {props.stockRecommendation}
            </div>
        </div>
    );
}

export default StockListItemRecommendationContainer;