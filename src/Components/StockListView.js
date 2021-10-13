import StockListItem from "./Sub-Components/StockListItem";
import StockListItemModal from "./Sub-Components/Stock List Item Sub-Components/StockListItemModal";
import StockListItemSeeMoreButton from "./Sub-Components/Stock List Item Sub-Components/StockListItemSeeMoreButton";
import StockListItemRemoveButton from "./Sub-Components/Stock List Item Sub-Components/StockListItemRemoveButton";
function StockListView(props){
    var stocksList = props.stockList;
    return(stocksList.map((stock) => {
        return(
            <div className="container" key={stock.ticker} id={stock.ticker}>
                <div className="row border border-2 rounded-pill p-1">
                    <div className="col-10">
                        <StockListItem stockTicker={stock.ticker} stockName={stock.name} stockDE={stock.debtToEquity} stockRecommendation={stock.recommendation}/>
                        <StockListItemModal modalId={stock.ticker} stockName={stock.longName} totalCash={stock.totalCash} totalDebt={stock.totalDebt} grossProfits={stock.grossProfit} totalRevenue={stock.grossRevenue} operatingCashflow={stock.operatingCashflow} freeCashflow={stock.freeCashflow} />
                    </div>
                    <div className="col-1 d-flex justify-content-end align-items-center">
                        <StockListItemSeeMoreButton modalTargetId={stock.ticker}/>
                    </div>
                    <div className="col-1 d-flex justify-content-end align-items-center">
                        <StockListItemRemoveButton onRemoveClick={props.onRemoveClick} removeButtonName={stock.ticker}/>
                    </div>
                </div>
            </div>
        );
        
    })
    );
    
}

export default StockListView;