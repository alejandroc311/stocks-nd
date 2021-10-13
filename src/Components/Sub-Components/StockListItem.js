import StockListItemNameContainer from "./Stock List Item Sub-Components/StockListItemNameContainer";
import StockListItemTickerContainer from "./Stock List Item Sub-Components/StockListItemTickerContainer";
import StockListItemDEContainer from "./Stock List Item Sub-Components/StockListItemDEContainer";
import StockListItemRecommendationContainer from "./Stock List Item Sub-Components/StockListItemRecommendationContainer";

function StockListItem(props){
    return(
        <div className="card border-0">
            <div className="row align-items-center">
               <StockListItemTickerContainer stockTicker={props.stockTicker}/>
               <StockListItemNameContainer stockName={props.stockName}/>
               <StockListItemDEContainer stockDE={props.stockDE}/>
               <StockListItemRecommendationContainer stockRecommendation={props.stockRecommendation}/>
            </div>
        </div>
    );
}

export default StockListItem;