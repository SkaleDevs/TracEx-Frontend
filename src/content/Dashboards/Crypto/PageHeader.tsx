import { Typography, Avatar, Grid, styled, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ProgressLocationBar from '@/content/Dashboards/Crypto/ProgressLocationBar';

function PageHeader({ title, subtitle, user, status }) {
  const theme = useTheme();

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item lg={12}>
        {/* <Grid item lg={4}>
          <Avatar
            sx={{
              mr: 2,
              width: theme.spacing(8),
              height: theme.spacing(8)
            }}
            variant="rounded"
            alt={user.name}
            src={user.avatar}
          />
        </Grid> */}
        <Heading textContent={{ title: title, subtitle: subtitle }} />
      </Grid>
      <Grid item lg={12}>
        <ProgressLocationBar
          activeStepValue={status}
          shipmentCurrentHashValue="dummy hash"
        />
      </Grid>
    </Grid>
  );
}

const Heading = ({ textContent: { title, subtitle } }) => (
  <>
    <Typography variant="h3" component="h3" gutterBottom align="center">
      {title}
    </Typography>
    <Typography variant="subtitle2" align="center">
      {subtitle}
    </Typography>
  </>
);

export default PageHeader;
