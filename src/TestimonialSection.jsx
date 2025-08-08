import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Grid,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Fixed and unique testimonials
const testimonials = [
  {
    name: 'John Doe',
    image: 'https://th.bing.com/th/id/OIP.tR2Umw6O108_1cjdtEOb8QHaHT?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2',
    quote: 'Great service! My car feels brand new. Very professional and fast.',
    rating: 5,
  },
  {
    name: 'Emily Smith',
    image: 'https://th.bing.com/th/id/OIP.JM59rVdcb-fghyiJAD-NNgHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2',
    quote: 'Highly recommend Car Garage. Honest pricing and great customer support. Really helped me when my engine broke down and explained everything clearly.',
    rating: 4,
  },
  {
    name: 'Michael Brown',
    image: 'https://th.bing.com/th/id/R.ebf217230acec6ef88eedf5371133cfc?rik=smeZrB0tIOamxw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31300000%2fMichael-Brown-michael-brown-31332522-824-1246.jpg&ehk=zIAU0rQpdFnHicdG7Xw55KEQY1eOBCnZqyC6ppgrWBM%3d&risl=&pid=ImgRaw&r=0',
    quote: 'The team did an amazing job fixing my brakes. I feel much safer now. They were friendly and walked me through the whole process.',
    rating: 5,
  },
  
     
{
    name: 'Emily Smith',
    image: 'https://imgresizer.tntsports.io/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.tntsports.io/2024/10/22/4054147-82220593-2560-1440.jpg',
    quote:
      'Highly recommend Car Garage. Honest pricing and great customer support.',
    rating: 4,
  },
  
];

const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 120;
  const isLong = testimonial.quote.length > maxLength;

  const displayedText = expanded
    ? testimonial.quote
    : testimonial.quote.substring(0, maxLength) + (isLong ? '...' : '');

  return (
    <Card
      sx={{
        width: 320,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 3,
        boxShadow: 4,
        p: 2,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar
          src={testimonial.image}
          alt={`Photo of ${testimonial.name}`}
          aria-label={`Avatar of ${testimonial.name}`}
          sx={{ width: 80, height: 80 }}
        />
      </Box>
      <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
        <FormatQuoteIcon sx={{ fontSize: 40, color: '#0d47a1' }} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          {displayedText}
        </Typography>
        {isLong && (
          <IconButton
            size="small"
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? 'Show less' : 'Read more'}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
          {testimonial.name}
        </Typography>
        <Rating
          value={testimonial.rating}
          readOnly
          sx={{ mt: 1 }}
          size="small"
          aria-label={`Rating: ${testimonial.rating} stars`}
        />
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f5f5f5' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 5, color: '#0d47a1', fontWeight: 'bold' }}
      >
        What Our Customers Say
      </Typography>

      {isMobile ? (
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <TestimonialCard testimonial={testimonial} />
            </Box>
          ))}
        </Slider>
      ) : (
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TestimonialSection;
