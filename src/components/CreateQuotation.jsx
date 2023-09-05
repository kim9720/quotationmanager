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
    const [openModal, setOpenModal] = useState(false);
    const [customerName, setCustomerDetails] = useState('');
    const [products, setProducts] = useState([{ name: '', quantity: 1, price: 0 }]);
    const [referenceNumber, setReferenceNumber] = useState('');
    const [quotationDate, setQuotationDate] = useState('');

    const addProduct = () => {
        setProducts([...products, { name: '', quantity: 1, price: 0 }]);
    };

    const calculateTotal = () => {
        return products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    };

    const handleSubmit = () => {
        const newQuotation = {
            id: quotations.length + 1,
            date: new Date().toLocaleDateString(),
            customerName,
            products,
            referenceNumber,
            quotationDate,
            total: calculateTotal(), // Calculate the total price
        };

        addQuotation(newQuotation);
        setOpenModal(false);
    };

    return (
        <div>
            <Typography variant="h5"></Typography>
            <br />
            <Button variant="outlined" size="large" onClick={() => setOpenModal(true)}>
                New Quotation 
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
                    {products.map((product, index) => (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Product/Service"
                                    fullWidth
                                    value={product.name}
                                    onChange={(e) =>
                                        setProducts((prevProducts) => {
                                            const updatedProducts = [...prevProducts];
                                            updatedProducts[index].name = e.target.value;
                                            return updatedProducts;
                                        })
                                    }
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Quantity"
                                    type="number"
                                    fullWidth
                                    value={product.quantity}
                                    onChange={(e) =>
                                        setProducts((prevProducts) => {
                                            const updatedProducts = [...prevProducts];
                                            updatedProducts[index].quantity = e.target.value;
                                            return updatedProducts;
                                        })
                                    }
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    value={product.price}
                                    onChange={(e) =>
                                        setProducts((prevProducts) => {
                                            const updatedProducts = [...prevProducts];
                                            updatedProducts[index].price = e.target.value;
                                            return updatedProducts;
                                        })
                                    }
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    ))}
                    <Typography variant="h6">
                        Total Price: Tsh {calculateTotal()}
                    </Typography>
                    <Button variant="outlined" onClick={addProduct}>
                        Add Another Product
                    </Button>
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
