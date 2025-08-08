import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const testimonials = [
  {
    name: 'Suresh Kumar',
    review: 'The service was excellent and the issue was resolved quickly!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Priya Raj',
    review: 'Very professional experts. Highly recommend them!',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Rahul Dev',
    review: 'Quick diagnosis and transparent pricing. Great experience!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Anjali Mehta',
    review: 'Friendly support team and great customer service.',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

const TestimonialSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Box sx={{ py: 6, px: isMobile ? 2 : 8, backgroundColor: '#f9f9f9' }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        fontWeight="bold"
        textAlign="center"
        mb={1}
      >
        What Our Customers Say
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        mb={4}
      >
        Real feedback from real people.
      </Typography>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} px={2}>
            <Card
              sx={{
                p: 3,
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: 3,
                minHeight: 250,
              }}
            >
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 64, height: 64, mb: 2 }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  variant="body1"
                  fontStyle="italic"
                  color="text.secondary"
                  mb={2}
                >
                  “{testimonial.review}”
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="primary"
                >
                  {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSection;
