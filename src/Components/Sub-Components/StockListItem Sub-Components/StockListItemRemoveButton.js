function StockListItemRemoveButton(props){
    function handleClick(event){
        props.onRemoveClick(event.target.getAttribute("name"))
    }
    return(
        <button onClick={handleClick} name={props.removeButtonName} className="btn bi bi-trash">

        </button>
    );
}

export default StockListItemRemoveButton;