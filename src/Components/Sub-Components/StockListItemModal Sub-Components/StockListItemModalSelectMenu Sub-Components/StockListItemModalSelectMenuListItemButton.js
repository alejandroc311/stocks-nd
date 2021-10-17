function StockListItemModalSelectMenuListItemButton(props){
    const buttonName = props.availableData;
    function handleClick(event){
        event.stopPropagation();
        props.onClick(event.target.getAttribute("name"), event.target.getAttribute("value"));
    }
    return(
        props.isChecked == "true" ?
            <button value={props.isChecked} name={buttonName} className="dropdown-item btn bi bi-check-square" onClick={handleClick} type="checkbox" id={buttonName}></button> 
         : 
            <button value={props.isChecked} name={buttonName} className="dropdown-item btn bi bi-square" onClick={handleClick} type="checkbox" id={buttonName}></button>
    );


}

export default StockListItemModalSelectMenuListItemButton;