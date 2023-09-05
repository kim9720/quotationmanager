import React from 'react';
import { Container, Grid, Typography, Link, Paper } from '@mui/material';

const Footer = () => {
  return (
    <Paper style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Mohamed Sadik Hababuu
            </Typography>
            <Typography variant="body2">
              Tomondo Zanzibat
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact 0778665524
            </Typography>
            <address>
              Changu Main Street<br />
              Zanzibar City, Country<br />
              Email: <Link href="mailto:info@example.com" style={{ color: '#fff', textDecoration: 'none' }}>dulisadik@gmail.com.com</Link>
            </address>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
