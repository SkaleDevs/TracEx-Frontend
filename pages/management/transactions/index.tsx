import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Management/Transactions/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '@/components/Footer';
import AddProductForm from '@/content/Forms/AddProductForm';
import AddUserDetails from '@/content/Forms/AddUserDetails';
import SellProduct from '@/content/Forms/sellProduct';
import AddVendor from '@/content/Forms/AddVendor';
import ReceivedProduct from '@/content/Forms/ReceivedProduct';


function ApplicationsTransactions() {
  return (
    <>
      <Head>
        <title>Shipment Details</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <AddProductForm />
            <AddUserDetails />
            <AddVendor />
            <SellProduct/>
            <ReceivedProduct/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsTransactions;
