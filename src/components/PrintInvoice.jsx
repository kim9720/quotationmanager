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
        const printWindow = window.open('', '', 'width=600,height=600');
        
        printWindow.document.open();
        printWindow.document.write(`
            <html>
            <head>
                <title>Invoice</title>
                <style>
                    /* Add your CSS styles here, if needed */
                    td, th {
                        border: 1px solid #777;
                        padding: 0.5rem;
                        text-align: center;
                    }
                     
                    table {
                        border-collapse: collapse;
                    }
                     
                    TableBody TableRow:nth-child(odd) {
                        background: #eee;
                    }
                    caption {
                        font-size: 0.8rem;
                    }
                    
                </style>
            </head>
            <body>${invoiceContentRef.current.innerHTML}</body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    };

    // Create a ref to the content of the PrintInvoice component
    const invoiceContentRef = useRef();

    return (
        <div>
            <Button variant="outlined" onClick={printInvoice}>
                Print Invoice
            </Button>
            <div ref={invoiceContentRef} id="invoice-content">
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
