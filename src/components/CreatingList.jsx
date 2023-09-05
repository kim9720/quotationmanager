import React, { useState } from 'react';
import CreateQuotation from './CreateQuotation';
import QuotationList from './QuotationList';

const CreatingList= () => {
    const [quotations, setQuotations] = useState([]);

    const addQuotation = (newQuotation) => {
        setQuotations([...quotations, newQuotation]);
    };

    return (
        <div>
            <CreateQuotation addQuotation={addQuotation} quotations={quotations} />
            <QuotationList quotations={quotations} />
        </div>
    );
};

export default CreatingList;
