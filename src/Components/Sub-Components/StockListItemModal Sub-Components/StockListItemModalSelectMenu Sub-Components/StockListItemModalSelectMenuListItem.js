import StockListItemModalSelectMenuListItemButton from "./StockListItemModalSelectMenuListItemButton";

function StockListItemModalSelectMenuListItem (props) {
    const description = props.availableData.split("-")[0];
    function handleClick(name, value){
        props.onClick(name, value)
    }
    return(
        <div className="row d-flex align-items-center border border-2">
            <div className="col-2 d-flex justify-content-start">
                <StockListItemModalSelectMenuListItemButton availableData={props.availableData} onClick={handleClick} isChecked={props.isChecked}/>
            </div>
            <div className="col-10 d-flex justify-content-start">
                {description}
            </div>
        </div>
    );

}

export default StockListItemModalSelectMenuListItem;