import React, { useState } from 'react';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    TableSortLabel,
    Button,
    IconButton,
    Grid,
    
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import PrintSingleInvoice from './PrintSingleInvoice'; // Import the PrintSingleInvoice component



const QuotationList = ({ quotations, onEdit, onDelete, onPrint }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderBy, setOrderBy] = useState('date');
    const [order, setOrder] = useState('asc');
    const [selectedQuotation, setSelectedQuotation] = useState(null); // Track selected quotation for printing
    const [openPrintDialog, setOpenPrintDialog] = useState(false);


    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handlePrint = (quotationId) => {
        // Find the selected quotation by its ID
        const selectedQuotation = quotations.find((quotation) => quotation.id === quotationId);

        // Set the selected quotation for printing
        setSelectedQuotation(selectedQuotation);

        // Open the print dialog
        setOpenPrintDialog(true);
    };

    const handleClosePrintDialog = () => {
        // Close the print dialog and clear the selected quotation
        setOpenPrintDialog(false);
        setSelectedQuotation(null);
    };



    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    };

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a[orderBy], b[orderBy])
            : (a, b) => -descendingComparator(a[orderBy], b[orderBy]);
    };

    const descendingComparator = (a, b) => {
        if (b < a) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    };

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const calculateTotalPrice = (quotation) => {
        return quotation.products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    };

    return (
        <div>
            {quotations.length === 0 ? (
                <Typography>No quotations available.</Typography>
            ) : (

                <TableContainer component={Paper}>
                    <Grid container spacing={3}>
                        <Grid xs>
                        </Grid>
                        <Grid xs={9}>
                            <br/>
                        <h4 variant="h5">Quotation List</h4>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className='table-header-cell'>
                                            <TableSortLabel
                                                active={orderBy === 'customerName'}
                                                direction={orderBy === 'customerName' ? order : 'asc'}
                                                onClick={() => handleRequestSort('customerName')}
                                            >
                                                Customer
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>Reference Number</TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'date'}
                                                direction={orderBy === 'date' ? order : 'asc'}
                                                onClick={() => handleRequestSort('date')}
                                            >
                                                Date
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>Product/Service</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Total Price</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {stableSort(quotations, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((quotation) => (
                                            <TableRow key={quotation.id}>
                                                <TableCell>{quotation.customerName}</TableCell>
                                                <TableCell>{quotation.referenceNumber}</TableCell>
                                                <TableCell>{quotation.date}</TableCell>
                                                <TableCell>
                                                    {quotation.products.map((product, index) => (
                                                        <div key={index}>
                                                            {product.name}
                                                        </div>
                                                    ))}
                                                </TableCell>
                                                <TableCell>
                                                    {quotation.products.map((product, index) => (
                                                        <div key={index}>
                                                            {product.quantity}
                                                        </div>
                                                    ))}
                                                </TableCell>
                                                <TableCell>
                                                    {quotation.products.map((product, index) => (
                                                        <div key={index}>
                                                            {product.price}
                                                        </div>
                                                    ))}
                                                </TableCell>
                                                <TableCell>
                                                    {calculateTotalPrice(quotation)}
                                                </TableCell>
                                                <TableCell>
                                                    <IconButton
                                                        aria-label="Edit"
                                                        onClick={() => onEdit(quotation.id)}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        aria-label="Delete"
                                                        onClick={() => onDelete(quotation.id)}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        aria-label="Print"
                                                        onClick={() => handlePrint(quotation.id)}
                                                    >
                                                        <PrintIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                                {/* Print the selected quotation */}
                                {openPrintDialog && selectedQuotation && (
                                    <PrintSingleInvoice
                                        selectedQuotation={selectedQuotation}
                                        onClose={handleClosePrintDialog}
                                    />
                                )}
                            </Table>
                        </Grid>
                        <Grid xs>
                           
                        </Grid>
                    </Grid>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={quotations.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            )}
        </div>
    );
};

export default QuotationList;
