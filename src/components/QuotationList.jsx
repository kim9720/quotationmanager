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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const QuotationList = ({ quotations, onEdit, onDelete }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderBy, setOrderBy] = useState('date');
    const [order, setOrder] = useState('asc');

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
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

    const sortedQuotations = stableSort(quotations, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <div>
            <Typography variant="h5">Quotation List</Typography>
            {quotations.length === 0 ? (
                <Typography>No quotations available.</Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
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
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedQuotations.map((quotation) => (
                                <TableRow key={quotation.id}>
                                    <TableCell>{quotation.customerName}</TableCell>
                                    <TableCell>{quotation.referenceNumber}</TableCell>
                                    <TableCell>{quotation.date}</TableCell>
                                    <TableCell>{quotation.newProduct.name}</TableCell>
                                    <TableCell>{quotation.newProduct.quantity}</TableCell>
                                    <TableCell>{quotation.newProduct.price}</TableCell>
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
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
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
