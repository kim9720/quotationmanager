import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography,
    Paper,
    Grid,
} from '@mui/material';

const CreateQuotation = ({ addQuotation, quotations }) => {
    const [openModal, setOpenModal] = useState(false); // State to control modal visibility
    const [customerName, setCustomerDetails] = useState('');
    const [newProduct, setNewProduct] = useState({ name: '', quantity: 1, price: 0 });
    const [referenceNumber, setReferenceNumber] = useState(''); // Define referenceNumber
    const [quotationDate, setQuotationDate] = useState(''); // Define quotationDate



    const handleSubmit = () => {
        const newQuotation = {
            id: quotations.length + 1, // Generate a unique ID as needed
            date: new Date().toLocaleDateString(), // Date of creation
            customerName,
            newProduct,
            referenceNumber, // Added referenceNumber
            quotationDate, // Added quotationDate
          };
          
        addQuotation(newQuotation);
        setOpenModal(false);
    };

    return (
        <div>
            <Typography variant="h5"></Typography><br/>
            <Button variant="outlined" size="large" onClick={() => setOpenModal(true)}>
                Open Quotation Modal
            </Button>

            {/* Quotation Modal */}
            <Dialog open={openModal} onClose={() => setOpenModal(false)}>
                <DialogTitle>Create Quotation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill in the details for the new quotation.
                    </DialogContentText>
                    <TextField
                        label="Customer Name"
                        fullWidth
                        value={customerName}
                        onChange={(e) => setCustomerDetails(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Reference Number"
                        fullWidth
                        value={referenceNumber}
                        onChange={(e) => setReferenceNumber(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Quotation Date"
                        type="date"
                        fullWidth
                        value={quotationDate}
                        onChange={(e) => setQuotationDate(e.target.value)}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Product/Services"
                                fullWidth
                                value={newProduct.name}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, name: e.target.value })
                                }
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Quantity"
                                type="number"
                                fullWidth
                                value={newProduct.quantity}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, quantity: e.target.value })
                                }
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Price"
                                type="number"
                                fullWidth
                                value={newProduct.price}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, price: e.target.value })
                                }
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    {/* Product input fields */}
                    {/* Add product button */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenModal(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary" variant="contained">
                        Create Quotation
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default CreateQuotation;