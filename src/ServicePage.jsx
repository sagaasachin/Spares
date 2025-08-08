import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

// Sample service data
const services = [
  {
    title: 'Engine Repair',
    image: 'https://th.bing.com/th/id/OIP.J0hLGSEpfpm_Y_cWBq0-ngHaFG?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2',
    description: 'Professional engine diagnostics and repairs.',
  },
  {
    title: 'Wheel Alignment',
    image: 'https://dubaimatic.com/wp-content/uploads/2022/11/Wheel-Alignment.jpg',
    description: 'Precision alignment for a smoother drive.',
  },
  {
    title: 'Oil Change',
    image: 'https://www.motoradvices.com/wp-content/uploads/2023/01/Car-Overheating-After-Oil-Change.jpg',
    description: 'Quick and clean oil change service.',
  },
  {
    title: 'Car Wash',
    image: 'https://img.freepik.com/premium-photo/man-worker-washing-black-suv-with-sponge-car-wash_157125-11850.jpg',
    description: 'Shiny and clean – like brand new.',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <Card
      sx={{
        height: 400,
        width: 400,
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 4,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          image={service.image}
          alt={service.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(75%)',
            transition: 'filter 0.3s ease',
            '&:hover': {
              filter: 'brightness(60%)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            color: 'white',
            background: 'rgba(0,0,128,0.6)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {service.title}
          </Typography>
          <Typography variant="body2">{service.description}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const ServicePage = () => {
  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ color: '#0d47a1', fontWeight: 'bold', textAlign: 'center' }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Box display="flex" justifyContent="center">
              <ServiceCard service={service} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicePage;
