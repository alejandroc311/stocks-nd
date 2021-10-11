function StockListItemRecommendationContainer(props){
    return(
        <div className="col-2">
            <div className="text-center">
                {props.stockRecommendation}
            </div>
        </div>
    );
}

export default StockListItemRecommendationContainer;