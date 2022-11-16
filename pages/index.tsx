import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';

import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
  background-color: #FFFBC1;
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1073%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(182%2c 226%2c 161%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c601.019C110.707%2c585.132%2c154.702%2c447.44%2c246.434%2c383.459C333.101%2c323.011%2c475.191%2c333.158%2c520.739%2c237.814C566.187%2c142.679%2c481.376%2c37.179%2c461.304%2c-66.326C442.455%2c-163.523%2c460.064%2c-268.931%2c406.339%2c-352.095C349.162%2c-440.603%2c258.17%2c-505.285%2c157.541%2c-536.535C56.09%2c-568.04%2c-57.604%2c-569.753%2c-154.527%2c-526.271C-246.605%2c-484.963%2c-298.864%2c-391.318%2c-354.23%2c-306.942C-403.162%2c-232.372%2c-442.716%2c-153.751%2c-456.764%2c-65.673C-470.974%2c23.419%2c-461.109%2c112.279%2c-434.863%2c198.595C-405.469%2c295.264%2c-370.666%2c392.749%2c-296.508%2c461.375C-214.667%2c537.111%2c-110.376%2c616.859%2c0%2c601.019' fill='%2398d67b'%3e%3c/path%3e%3cpath d='M1440 1055.068C1535.131 1073.233 1638.092 1047.254 1717.5720000000001 991.9110000000001 1795.877 937.386 1830.358 843.165 1869.373 756.088 1908.121 669.607 1958.371 581.199 1943.525 487.604 1928.746 394.429 1843.633 334.30899999999997 1790.144 256.598 1728.605 167.192 1702.586 44.92999999999995 1605.468-3.532000000000039 1505.014-53.65899999999999 1381.783-36.39200000000005 1275.509-0.20500000000004093 1171.725 35.13499999999999 1085.321 107.99000000000001 1019.8 195.894 957.337 279.695 917.968 379.96000000000004 914.286 484.414 910.816 582.856 940.9 682.103 999.881 760.996 1053.184 832.294 1149.089 848.0360000000001 1223.107 897.492 1298.9470000000001 948.165 1350.408 1037.96 1440 1055.068' fill='%23d4eec7'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1073'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Urja | Energy Saving Montitoring App</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/dashboards/crypto"
                  variant="contained"
                  color="error"
                  sx={{ ml: 2, background: '#FEBE8C'}}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  href="/dashboards/crypto"
                  variant="outlined"
                  color= "error"
                  sx={{ ml: 2, color: '#FEBE8C' }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography textAlign="center" variant="subtitle1">
          Developed by{' '}
          <Link
            href="https://github.com/ShellShock01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team ShellShock
          </Link>
        </Typography>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
