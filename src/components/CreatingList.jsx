import React, { useState } from 'react';
import CreateQuotation from './CreateQuotation';
import QuotationList from './QuotationList';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ConvertToInvoice from './ConvertToInvoice.jsx';

// Import addQuotation from the parent component


function CreatingList() {
    const [quotations, addQuotation] = useState([]); // Initialize quotations state
    const quotationData = {
        id: 1,
        // Other properties like customerDetails, referenceNumber, products, etc.
    };
    const handleConvert = () => {
        if (1) {
            // Proceed with the conversion logic
        }
    };
    // Add quotations to the state using setQuotations

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                        <CreateQuotation quotations={quotations} addQuotation={addQuotation} />
                        <br />
                        <br />

                        <QuotationList quotations={quotations} /> {/* Pass quotations as a prop */}
                        <ConvertToInvoice quotation={quotationData} onConvert={handleConvert} />

                    </Box>
                </Container>
            </React.Fragment>


        </div>
    );
}

export default CreatingList;
