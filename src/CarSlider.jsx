import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

// Sample car brand logo images
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
  { name: 'Toyato', logo: toyato },
  { name: 'Swift', logo: Swift },
  { name: 'Tata', logo: tata },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const CarBrandSlider = () => {
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: 'white' }}>
      <Typography variant="h5" sx={{ color: '#0d47a1', mb: 3, fontWeight: 'bold', textAlign: 'center'   }}>
        Supported Car Brands
      </Typography>

      <Slider {...sliderSettings}>
        {carBrands.map((brand, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={brand.logo}
              alt={brand.name}
              sx={{
                height: 100,
                width: 'auto',
                mx: 'auto',
                objectFit: 'contain',
                transition: 'transform 0.3s',
                '&:hover': {
                //   transform: 'scale(1.1)',
                },
              }}
            />
            <Typography sx={{ mt: 1 }}>{brand.name}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarBrandSlider;
