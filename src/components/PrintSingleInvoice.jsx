import React from 'react';
import PrintInvoice from './PrintInvoice'; // Import the PrintInvoice component

const PrintSingleInvoice = ({ selectedQuotation, onClose }) => {
    return (
        <div>
            <button onClick={onClose}>Close</button>
            {selectedQuotation && <PrintInvoice invoiceData={selectedQuotation} />}
        </div>
    );
};

export default PrintSingleInvoice;
