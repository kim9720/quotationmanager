import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const Documentation = () => {
    return (
        <Paper elevation={1} style={{ padding: '20px', margin: '20px 0' }}>
            <Typography variant="h4">System Documentation</Typography>

            {/* Getting Started */}
            <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
                <Typography variant="h5">Getting Started</Typography>
                <Typography variant="body1">
                    Welcome to the system! Here's how to get started:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="1. Create a New Quotation" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2. Edit or Delete Quotations" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3. Print Invoices" />
                    </ListItem>
                </List>
            </Paper>

            {/* Creating Quotations */}
            <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
                <Typography variant="h5">Creating Quotations</Typography>
                <Typography variant="body1">
                    To create a new quotation, follow these steps:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="1. Click the 'Open Quotation Modal' button." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2. Fill in the details for the new quotation, including customer name, reference number, and products." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3. Click the 'Create Quotation' button to add the quotation to the list." />
                    </ListItem>
                </List>
            </Paper>

            {/* Editing and Deleting Quotations */}
            <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
                <Typography variant="h5">Editing and Deleting Quotations</Typography>
                <Typography variant="body1">
                    To edit or delete a quotation, follow these steps:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="1. Find the quotation in the list that you want to edit or delete." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2. Click the 'Edit' icon to edit the quotation details, or click the 'Delete' icon to remove the quotation." />
                    </ListItem>
                </List>
            </Paper>

            {/* Printing Invoices */}
            <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
                <Typography variant="h5">Printing Invoices</Typography>
                <Typography variant="body1">
                    To print an invoice for a quotation, follow these steps:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="1. Find the quotation in the list that you want to print an invoice for." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2. Click the 'Print' icon next to the quotation to generate and print the invoice." />
                    </ListItem>
                </List>
            </Paper>

            {/* Additional Features */}
            <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
                <Typography variant="h5">Additional Features</Typography>
                <Typography variant="body1">
                    Explore these additional features to make the most of the system:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="1. Add multiple products to a single quotation." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2. Calculate and display the total price of products in each quotation." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3. Use the side menu for navigation." />
                    </ListItem>
                </List>
            </Paper>
        </Paper>
    );
};

export default Documentation;
