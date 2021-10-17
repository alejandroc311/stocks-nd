import StockListItemNameContainer from "./StockListItem Sub-Components/StockListItemNameContainer";
import StockListItemTickerContainer from "./StockListItem Sub-Components/StockListItemTickerContainer";
import StockListItemDEContainer from "./StockListItem Sub-Components/StockListItemDEContainer";
import StockListItemRecommendationContainer from "./StockListItem Sub-Components/StockListItemRecommendationContainer";

function StockListItem(props){
    const {financialData: {recommendationKey, debtToEquity, currentPrice, }, price: {symbol: ticker}} = props;
    return(
        <div className="card border-0">
            <div className="row align-items-center">
               <StockListItemTickerContainer stockTicker={ticker}/>
               <StockListItemNameContainer stockName={currentPrice}/>
               <StockListItemDEContainer stockDE={debtToEquity}/>
               <StockListItemRecommendationContainer stockRecommendation={recommendationKey.toUpperCase()}/>
            </div>
        </div>
    );
}

export default StockListItem;