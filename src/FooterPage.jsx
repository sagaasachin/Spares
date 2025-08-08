import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappIcon from '@mui/icons-material/Whatsapp';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0d47a1',
        color: 'white',
        mt: 6,
        pt: 6,
        pb: 3,
        px: 4,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Company Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Car Garage
          </Typography>
          <Typography variant="body2">
            We provide reliable, expert automotive services with a focus on safety,
            performance, and customer satisfaction.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="#" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="#" underline="hover" color="inherit">
              About
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Services
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">+91 98765 43210</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2">info@cargarage.com</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
             <IconButton href="#" color="inherit">
              <WhatsappIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Car Garage. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
