import React, { useRef } from 'react';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';

const PrintInvoice = ({ invoiceData }) => {
    const calculateTotalPrice = (products) => {
        return products.reduce((total, product) => total + product.quantity * product.price, 0);
    };

    const printInvoice = () => {
        const printContents = document.getElementById('invoice-content').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };

    return (
        <div>
            <Button variant="outlined" onClick={printInvoice}>
                Print Invoice
            </Button>
            <div id="invoice-content">
                <Paper>
                    <Typography variant="h5" align="center">
                        Invoice
                    </Typography>
                    <Typography variant="subtitle1">Date: {invoiceData.date}</Typography>
                    <Typography variant="subtitle1">Customer: {invoiceData.customerName}</Typography>
                    <Typography variant="subtitle1">Reference Number: {invoiceData.referenceNumber}</Typography>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product/Service</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {invoiceData.products.map((product, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell align="right">{product.quantity}</TableCell>
                                        <TableCell align="right">{product.price}</TableCell>
                                        <TableCell align="right">{product.quantity * product.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle1" align="right">
                        Total: Tsh {calculateTotalPrice(invoiceData.products)}
                    </Typography>
                </Paper>
            </div>
        </div>
    );
};

export default PrintInvoice;
