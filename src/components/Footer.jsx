import React from 'react';
import { Container, Grid, Typography, Link, Paper } from '@mui/material';

const Footer = () => {
  return (
    <Paper style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Your Company Name
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, vestibulum libero eu, dignissim nunc.
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
              Contact
            </Typography>
            <address>
              123 Main Street<br />
              City, Country<br />
              Email: <Link href="mailto:info@example.com" style={{ color: '#fff', textDecoration: 'none' }}>info@example.com</Link>
            </address>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
