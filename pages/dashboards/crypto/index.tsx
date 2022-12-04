import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
import Wallets from '@/content/Dashboards/Crypto/Wallets';
import AccountSecurity from '@/content/Dashboards/Crypto/AccountSecurity';
import WatchList from '@/content/Dashboards/Crypto/WatchList';
import BottomBarContent from '@/content/Applications/Messenger/BottomBarContent';
import StepperForms from '@/content/Applications/Messenger/StepperForms';
import ProgressLocationBar from '@/content/Dashboards/Crypto/ProgressLocationBar';

function DashboardCrypto() {
  const user = {
    name: 'Shipper',
    avatar: '/static/images/avatars/profile.jpg'
  };

  const title = `Welcome back, ${user.name}!`;
  const subtitle = `Updates on the latest shipment`;
  const status = 2;

  return (
    <>
      <Head>
        <title>TracEx Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader title={title} subtitle={subtitle} user={user} status={status} />
      </PageTitleWrapper>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
