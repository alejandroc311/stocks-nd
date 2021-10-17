import { useEffect, useState } from "react";
import StockListItemModalSelectMenu from "./StockListItemModal Sub-Components/StockListItemModalSelectMenu";
import StockListItemModalSelectedOptionsListView from "./StockListItemModal Sub-Components/StockListItemModalSelectedOptionsListView";
function StockListItemModal(props){
    const {financialData: selectMenuOptions} = props;
    const [selectMenuListItems, setSelectMenuListItems] = useState(setInitialMenuListItemObjects());    
    const {price: {symbol:ticker, longName: name}} = props;
    const modalId = ticker + "-modal";
    function setInitialMenuListItemObjects () {
        let initialMenuListItemObjects = [];
        for (const [key, value] of Object.entries(selectMenuOptions)) {
            initialMenuListItemObjects = [...initialMenuListItemObjects, {selectMenuListItemName: key+"-button", availableData: value, isChecked: "false"}]
      }
      return initialMenuListItemObjects;
    }
    function handleClick(name, value){
        const wasChecked = value == "false" ? "true" : "false";
        let updatedSelectMenuListItems = [];
        selectMenuListItems.forEach((selectMenuListItem) =>{
            const {selectMenuListItemName, availableData} = selectMenuListItem;
            selectMenuListItemName == name ? updatedSelectMenuListItems = [...updatedSelectMenuListItems, {selectMenuListItemName: name, availableData: availableData, isChecked: wasChecked}] : updatedSelectMenuListItems = [...updatedSelectMenuListItems, selectMenuListItem];
        });
        setSelectMenuListItems(updatedSelectMenuListItems);
    }
    useEffect( () => {},[selectMenuListItems]);

    return(
        <div className="modal fade" id={modalId} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <StockListItemModalSelectMenu onClick={handleClick} selectMenuListItems={selectMenuListItems}/>
                        <StockListItemModalSelectedOptionsListView selectMenuListItems={selectMenuListItems}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StockListItemModal;