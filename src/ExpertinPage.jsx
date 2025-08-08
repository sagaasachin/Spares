import React, { useState, memo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  TextField,
  Button,
  Paper,
  Chip,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// Sample car problem data with online images
const carProblems = [
  {
    title: 'Engine Overheating',
    description:
      'The engine gets too hot and may cause damage. Often caused by a faulty radiator, thermostat, or coolant leak.',
    image: 'https://www.telletire.com/wp-content/uploads/2023/07/AdobeStock_554189491-scaled.jpeg',
  },
  {
    title: 'Brake Failure',
    description:
      'Reduced or no braking power. Can be caused by worn brake pads, leaking brake fluid, or ABS malfunction.',
    image: 'https://daveandraysauto.com/wp-content/uploads/2023/09/How-Do-You-Fix-a-Brake-Light-Warning.jpg',
  },
  {
    title: 'Electrical System Issues',
    description:
      'Problems with battery, starter, or alternator. These can cause the car not to start or lights to flicker.',
    image: 'https://avtorusservis.ru/ars_uploads/2023/05/remont-elektroprovodki-auto.jpeg',
  },
  {
    title: 'Transmission Slipping',
    description:
      'Automatic transmission changes gears erratically or slips out of gear. Can indicate low fluid or mechanical wear.',
    image: 'https://th.bing.com/th/id/OIP.o9MSYmMoHr-9BmJJlFdcgAHaEo?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2',
  },
  {
    title: 'Steering Wheel Vibration',
    description:
      'Steering wheel shakes while driving. Often due to unbalanced tires, worn suspension, or brake issues.',
    image: 'https://www.liveabout.com/thmb/OrJSTbWzlUzzDs4Of8yGR_J_8qM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-827878966-5c01b05646e0fb0001ed5d34.jpg',
  },
];

const ExpertinCard = memo(({ problem, selected, onSelect, isMobile }) => (
  <Card
    onClick={() => onSelect(problem.title)}
    sx={{
      width: isMobile ? '100%' : 400,
      height: isMobile ? 'auto' : 400,
      borderRadius: 3,
      boxShadow: 4,
      border: selected ? '3px solid #0d47a1' : 'none',
      transition: 'transform 0.3s ease, border 0.3s ease',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.03)',
      },
    }}
  >
    <CardMedia
      component="img"
      image={problem.image}
      alt={problem.title}
      sx={{
        objectFit: 'cover',
        width: '100%',
        height: isMobile ? 200 : 270,
      }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography
        variant={isMobile ? 'subtitle1' : 'h6'}
        sx={{
          color: '#0d47a1',
          fontWeight: 'bold',
          mb: 1,
          backgroundColor: '#e3f2fd',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        {problem.title}
      </Typography>
      <Typography variant="body2">{problem.description}</Typography>
    </CardContent>
  </Card>
));

const RelatedForm = ({ selectedProblem, onSelect, isMobile }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    problem: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'problem') onSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Send form data to backend here
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: isMobile ? 2 : 4,
        mt: 6,
        maxWidth: 500,
        mx: 'auto',
      }}
    >
      <Typography
        variant={isMobile ? 'h6' : 'h5'}
        sx={{ mb: 2, color: '#0d47a1', fontWeight: 'bold', textAlign: 'center' }}
      >
        Get Expert Help
      </Typography>
      {submitted ? (
        <Typography color="success.main" sx={{ mt: 2, textAlign: 'center' }}>
          Thank you! Your request has been submitted.
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Car Problem"
            name="problem"
            value={form.problem}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          >
            {carProblems.map((p, idx) => (
              <MenuItem key={idx} value={p.title}>
                {p.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Describe the Issue"
            name="details"
            value={form.details}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={submitted}>
            {submitted ? 'Submitted' : 'Submit Request'}
          </Button>
        </form>
      )}
    </Paper>
  );
};

const ExpertinPage = () => {
  const [selectedProblem, setSelectedProblem] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: isMobile ? 4 : 8,
        px: isMobile ? 2 : 4,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{
          textAlign: 'center',
          mb: isMobile ? 3 : 5,
          color: '#0d47a1',
          fontWeight: 'bold',
        }}
      >
        Expert in Difficult Car Problems
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
        {carProblems.map((problem, index) => (
          <Grid item key={index} xs={12} sm={6} md="auto">
            <ExpertinCard
              problem={problem}
              selected={selectedProblem === problem.title}
              onSelect={setSelectedProblem}
              isMobile={isMobile}
            />
          </Grid>
        ))}
      </Grid>

      <RelatedForm selectedProblem={selectedProblem} onSelect={setSelectedProblem} isMobile={isMobile} />
    </Box>
  );
};

export default ExpertinPage;
