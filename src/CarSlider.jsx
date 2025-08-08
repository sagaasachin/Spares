import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Brand logos
import bmw from './assets/bmw.png';
import audi from './assets/audi.png';
import benz from './assets/benz.png';
import ford from './assets/ford.png';
import honda from './assets/honda.png';
import toyato from './assets/toyato.png';
import Swift from './assets/Swift.webp';
import tata from './assets/tata.png';

const carBrands = [
  { name: 'BMW', logo: bmw },
  { name: 'Audi', logo: audi },
  { name: 'Mercedes', logo: benz },
  { name: 'Ford', logo: ford },
  { name: 'Honda', logo: honda },
  { name: 'Toyota', logo: toyato },
  { name: 'Swift', logo: Swift },
  { name: 'Tata', logo: tata },
];

const CarBrandSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ px: 3, py: 5, backgroundColor: '#fff' }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: '#0d47a1',
        }}
      >
        Supported Car Brands
      </Typography>

      <Slider {...sliderSettings}>
        {carBrands.map((brand, index) => (
          <Box key={index} sx={{ textAlign: 'center', px: isMobile ? 1 : 2 }}>
            <Box
              component="img"
              src={brand.logo}
              alt={brand.name}
              sx={{
                height: isMobile ? 80 : 100,
                width: 'auto',
                mx: 'auto',
                objectFit: 'contain',
                p: 1,
              }}
            />
            <Typography sx={{ mt: 1, fontSize: isMobile ? '0.9rem' : '1rem' }}>
              {brand.name}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarBrandSlider;
