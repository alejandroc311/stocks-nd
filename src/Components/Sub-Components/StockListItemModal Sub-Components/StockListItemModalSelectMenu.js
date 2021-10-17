import StockListItemModalSelectMenuListItem from "./StockListItemModalSelectMenu Sub-Components/StockListItemModalSelectMenuListItem";
function StockListItemModalSelectMenu(props){
    const {selectMenuListItems} = props;
    const selectMenuListItem = selectMenuListItems.map((selectMenuListItem) => {
        const {selectMenuListItemName, isChecked} = selectMenuListItem; 
        return(
            <div className="dropdown-item container-fluid">
                <StockListItemModalSelectMenuListItem availableData={selectMenuListItemName} onClick={handleClick} isChecked={isChecked}/>
            </div>   
        );  
    });
    function handleClick(value, name){
        props.onClick(value, name);
    }

    return(
        <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="StockListItemModalSelectuMenu" data-bs-toggle="dropdown" aria-expanded="false">
                Choose data
            </button>
            <div className="dropdown-menu" aria-labelledby="StockListItemModalSelectuMenu">
                {selectMenuListItem}
            </div>
        </div>  
    );
}

export default StockListItemModalSelectMenu;