import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Paper,
} from '@mui/material';

const ConvertToInvoice = ({ quotation, onConvert }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleConvert = () => {
    // Create the invoice based on the quotation
    const invoice = {
      // You can copy relevant data from the quotation or modify it as needed
      id: quotation.id,
      date: new Date().toLocaleDateString(), // Current date as the invoice date
      customerDetails: quotation.customerDetails,
      referenceNumber: quotation.referenceNumber,
      products: quotation.products,
    };

    // Call the onConvert callback function to pass the invoice data to the parent component
    onConvert(invoice);
    
    setOpenModal(false);
  };

  return (
    <div>
      <Typography variant="h5">Convert to Invoice</Typography>
      <Button variant="outlined" color="success"size="large" onClick={() => setOpenModal(true)}>
        Convert to Invoice
      </Button>

      {/* Convert to Invoice Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>Convert to Invoice</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We need connection to backend
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConvert} color="success" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConvertToInvoice;
