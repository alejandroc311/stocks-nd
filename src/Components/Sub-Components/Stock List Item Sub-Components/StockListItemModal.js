function StockListItemModal(props){
    const modalId = props.modalId + "-modal";
    return(
        <div className="modal fade" id={modalId} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.stockName}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            <li>Cash: ${props.totalCash}</li>
                            <li>Debt: ${props.totalDebt}</li>
                            <li>Revenue: ${props.totalRevenue}</li>
                            <li>Gross Profits: ${props.grossProfits}</li>
                            <li>Free Cash Flow: ${props.freeCashflow}</li>
                            <li>Operating Cash Flow: ${props.operatingCashflow}</li>
                        </ul>
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