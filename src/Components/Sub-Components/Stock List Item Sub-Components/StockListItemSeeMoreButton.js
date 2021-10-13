function StockListItemSeeMoreButton(props){
    const modalTarget = "#" + props.modalTargetId + "-modal"
    return(
            <button data-bs-toggle="modal" data-bs-target={modalTarget} className="btn bi bi-eye">
                
            </button>
    );
}
export default StockListItemSeeMoreButton;