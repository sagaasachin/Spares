import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      setEmailError(!isEmailValid(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      return;
    }

    if (!isEmailValid(formData.email)) {
      setEmailError(true);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setSnackbarOpen(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setEmailError(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        sx={{ color: '#0d47a1', fontWeight: 'bold', mb: 5, textAlign: 'center' }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            elevation={3}
          >
            <form onSubmit={handleSubmit} aria-label="contact-form">
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                aria-label="Name"
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                error={emailError}
                helperText={emailError ? 'Enter a valid email' : ''}
                aria-label="Email"
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
                aria-label="Subject"
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                aria-label="Message"
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  sx={{ backgroundColor: '#0d47a1' }}
                  aria-label="Send Message"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              border: '1px solid #ccc',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            elevation={3}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Reach Us At
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ color: '#0d47a1', mr: 1 }} />
                <Typography>
                  123 Auto Lane, Car City, State - 600001
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ color: '#0d47a1', mr: 1 }} />
                <Typography
                  component="a"
                  href="tel:+919876543210"
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  +91 98765 43210
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ color: '#0d47a1', mr: 1 }} />
                <Typography
                  component="a"
                  href="mailto:info@cargarage.com"
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  info@cargarage.com
                </Typography>
              </Box>
            </Box>

            {/* Map with border and border radius */}
            <Box
              sx={{
                border: '2px solid #0d47a1',
                borderRadius: 2,
                overflow: 'hidden',
                mt: 2,
              }}
            >
              <iframe
                title="Car Garage Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.884922161899!2d80.2091!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f36b3bdb57%3A0xa7d6e59e2b22c6f9!2sChennai%20Central!5e0!3m2!1sen!2sin!4v1625569693001!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
