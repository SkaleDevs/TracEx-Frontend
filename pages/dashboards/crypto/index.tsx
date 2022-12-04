import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
import StepperForms from '@/content/Applications/Messenger/StepperForms';

function DashboardCrypto() {
  const user = {
    name: 'Shipper',
    avatar: '/static/images/avatars/profile.jpg'
  };

  const title = `Welcome back, ${user.name}!`;
  const subtitle = `Updates on the latest shipment`;

  return (
    <>
      <Head>
        <title>TracEx Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader title={title} subtitle={subtitle} user={user} />
      </PageTitleWrapper>
      <Container maxWidth="lg" className="container">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
