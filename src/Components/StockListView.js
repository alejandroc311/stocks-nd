import StockListItem from "./Sub-Components/StockListItem";

function StockListView(props){
    var stocksList = props.stockList;
    return(stocksList.map((stock) => {
        return(
            <div className="container">
                <div className="row border border-dark border-2 rounded-pill p-1">
                    <div className="col-8 col-xl-6">
                        <StockListItem stockTicker={stock.ticker} stockName={stock.name} stockDE={stock.debtToEquity} stockRecommendation={stock.recommendation}/>
                    </div>
                </div>
            </div>
        );
        
    })
    );
    
}

export default StockListView;