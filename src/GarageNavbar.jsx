// Header.jsx
import React, { useRef, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  CssBaseline,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Slider from 'react-slick';

import car1 from './assets/car1.jpg';
import car2 from './assets/car2.jpg';
import car3 from './assets/car3.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AboutPage from './AboutPage';
import ServicePage from './ServicePage';
import ExpertinPage from './ExpertinPage';
import TestimonialPage from './TestimonialSection';
import CarBrandSlider from './CarSlider';
import ContactPage from './ContactPage';
import Footer from './FooterPage';

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 1500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const expertRef = useRef(null);
  const testimonialRef = useRef(null);
  const brandsRef = useRef(null);
  const contactRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Home', ref: homeRef },
    { label: 'About', ref: aboutRef },
    { label: 'Services', ref: serviceRef },
    { label: 'Contact', ref: contactRef },
  ];

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const scrollToSection = (ref) => {
    setDrawerOpen(false);
    if (ref.current) {
      const offset = 80;
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', color: '#1976d2' }}>
        <Toolbar>
          <IconButton edge="start" sx={{ color: '#1976d2', mr: 2 }} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Car Garage
          </Typography>
          {!isMobile && (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.ref)}
                  sx={{
                    color: '#1976d2',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#e3f2fd' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  textTransform: 'none',
                  ml: 2,
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
                href="tel:+919876543210"
              >
                Call Now
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, height: '100%', backgroundColor: '#ffffff', color: '#1976d2' }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.ref)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ px: 2, mt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                href="tel:+919876543210"
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
              >
                Call Now
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Sections */}
      <Box sx={{ mt: 9 }}>
        {/* Home Section */}
        <Box ref={homeRef} sx={{ scrollMarginTop: '80px', height: '100vh', position: 'relative' }}>
          <Slider {...sliderSettings}>
            {[car1, car2, car3].map((img, index) => (
              <Box
                key={index}
                sx={{
                  height: '100vh',
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </Slider>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '25%', md: '30%' },
              left: '10%',
              right: '10%',
              color: 'white',
              textAlign: 'left',
              zIndex: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '4rem', lg: '5rem' },
                lineHeight: 1.2,
              }}
            >
              Welcome to Car Garage
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.5rem' }, maxWidth: 600 }}
            >
              Quality Service. Trusted Repairs. Always on Time.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                backgroundColor: '#1976d2',
                '&:hover': { backgroundColor: '#1565c0' },
              }}
              href="tel:+919876543210"
            >
              Book Now
            </Button>
          </Box>
        </Box>

        {/* Main Sections */}
        <Box ref={aboutRef} sx={{ scrollMarginTop: '80px' }}>
          <AboutPage />
        </Box>
        <Box ref={serviceRef} sx={{ scrollMarginTop: '80px' }}>
          <ServicePage />
        </Box>
        <Box ref={expertRef} sx={{ scrollMarginTop: '80px' }}>
          <ExpertinPage />
        </Box>
        <Box ref={testimonialRef} sx={{ scrollMarginTop: '80px' }}>
          <TestimonialPage />
        </Box>
        <Box ref={brandsRef} sx={{ scrollMarginTop: '80px' }}>
          <CarBrandSlider />
        </Box>
        <Box ref={contactRef} sx={{ scrollMarginTop: '80px' }}>
          <ContactPage />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Header;
