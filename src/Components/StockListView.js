import StockListItem from "./Sub-Components/StockListItem";
import StockListItemModal from "./Sub-Components/StockListItemModal";
import StockListItemSeeMoreButton from "./Sub-Components/StockListItem Sub-Components/StockListItemSeeMoreButton";
import StockListItemRemoveButton from "./Sub-Components/StockListItem Sub-Components/StockListItemRemoveButton";
function StockListView(props){
    function handleRemoveClick(name){
        props.onRemoveClick(name)
    }
    const {stockList} = props;
    return(stockList.map((stock) => {
        const {price: {symbol:ticker}} = stock;
        return(
            <div className="container" key={ticker} id={ticker}>
                <div className="row border border-2 rounded-pill p-1">
                    <div className="col-10">
                        <StockListItem {...stock}/>
                        <StockListItemModal {...stock}/>
                    </div>
                    <div className="col-1 d-flex justify-content-end align-items-center">
                        <StockListItemSeeMoreButton modalTargetId={ticker}/>
                    </div>
                    <div className="col-1 d-flex justify-content-end align-items-center">
                        <StockListItemRemoveButton onRemoveClick={handleRemoveClick} removeButtonName={ticker}/>
                    </div>
                </div>
            </div>
        );
        
    })
    );
}
export default StockListView;