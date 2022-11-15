import Carousel from '@/components/Carousel';
import {
  // Button,
  Container,
  Grid,
  Typography,
  styled
} from '@mui/material';

// import Link from 'src/components/Link';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 6 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={12} xs={12}>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            URJA - An energy saving monitoring app
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            An app to monitor the energy saved by the employees and to award
            them on the basis of their contributions.
          </TypographyH2>
          <Carousel />
        </Grid>
        <Grid item md={10} lg={8} mx="auto"></Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
