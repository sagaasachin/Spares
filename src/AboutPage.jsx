import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import aboutImage from './assets/part.jpg'; // Replace with your actual image

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        minHeight: '100vh',
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(245,245,245,0.85)',
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Welcome to Car Garage – your one-stop solution for all automotive needs.
              With years of experience and a passion for excellence, we deliver top-notch
              repair and maintenance services.
            </Typography>

            <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
              Why Choose Us?
            </Typography>
            <List dense>
              {[
                'Certified mechanics with hands-on experience.',
                'Transparent pricing and trustworthy diagnostics.',
                'Quick turnaround and customer-first attitude.',
                'High-quality parts and state-of-the-art tools.',
              ].map((item, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              gutterBottom
              sx={{ mt: 3 }}
            >
              Our Guarantee of Work
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We stand behind every repair with a satisfaction guarantee. Our team ensures
              every vehicle leaves in peak condition. If you're not happy, we'll make it
              right—no questions asked. We’re here for your safety and confidence on the road.
            </Typography>

            <Button variant="contained" color="primary">
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutPage;
