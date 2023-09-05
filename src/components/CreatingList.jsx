import React, { useState } from 'react';
import CreateQuotation from './CreateQuotation';
import QuotationList from './QuotationList';

const CreatingList = () => {
    const [quotations, setQuotations] = useState([]);
    const [editQuotationId, setEditQuotationId] = useState(null);


    const addQuotation = (newQuotation) => {
        setQuotations([...quotations, newQuotation]);
    };

    // Function to delete a quotation
    const deleteQuotation = (quotationId) => {
        const updatedQuotations = quotations.filter((quotation) => quotation.id !== quotationId);
        setQuotations(updatedQuotations);
    };
    // Function to edit a quotation
    const editQuotation = (quotationId) => {
        // Set the editQuotationId state to open the modal for editing
        setEditQuotationId(quotationId);
    };
    return (
        <div>
            <CreateQuotation addQuotation={addQuotation} quotations={quotations} />
            <QuotationList quotations={quotations} onEdit={editQuotation} onDelete={deleteQuotation} />

        </div>
    );
};

export default CreatingList;
