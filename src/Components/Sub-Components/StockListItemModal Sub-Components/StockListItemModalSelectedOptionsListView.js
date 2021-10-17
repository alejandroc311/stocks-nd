function StockListItemModalSelectedOptionsListView(props){

    const {selectMenuListItems} = props; 
    const stockListItemModalSelectedOptionsListObjects = selectMenuListItems.filter(stockListItemModalSelectedOptionsListItem => stockListItemModalSelectedOptionsListItem.isChecked == "true")
    const stockListItemModalSelectedOptionsListItems = stockListItemModalSelectedOptionsListObjects.map((stockListItemModalSelectedOptionsListItem) => {
        const {availableData, selectMenuListItemName} = stockListItemModalSelectedOptionsListItem;
        return(
            <li className="list-group-item">
                {selectMenuListItemName.split("-")[0]+":   "+availableData} 
            </li>
        );
    });
    return(
        <ul className="list-group">
            {stockListItemModalSelectedOptionsListItems}
        </ul> 
    )

}

export default StockListItemModalSelectedOptionsListView;