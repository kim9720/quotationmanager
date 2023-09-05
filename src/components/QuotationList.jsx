import React from 'react';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Paper,
} from '@mui/material';

const QuotationList = ({ quotations }) => {
  return (
    <div>
      <Typography variant="h5">Quotation List</Typography>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {quotations.map((quotation) => ( 
  <TableRow key={quotation.id}> 
    <TableCell>{quotation.id}</TableCell> 
    <TableCell>{quotation.quotationDate}</TableCell> 
  <TableCell>{quotation.referenceNumber}</TableCell> Display referenceNumber 
    <TableCell>{quotation.quotationDate}</TableCell> Display quotationDate 
    <TableCell>
      <ul>
         {quotation.newProducts.map((newProduct, index) => (
          <li key={index}>
            {newProduct.name} - Quantity: {newProduct.quantity}, Price: ${newProduct.price}
          </li>
        ))} 
      </ul>
    </TableCell>
    <TableCell>
      <Button variant="contained" color="primary">
        Edit
      </Button>
      <Button variant="contained" color="secondary">
        Delete
      </Button>
    </TableCell>
  </TableRow>
  ))} 

          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default QuotationList;
