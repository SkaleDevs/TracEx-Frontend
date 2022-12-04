import QRCode from 'react-qr-code';
import { Card, styled } from '@mui/material';

const CardQR = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
  background-color: #FFFBC1;
`
);

const QRCodeComponent = ({ size, content }) => {
  return (
    <CardQR>
      <QRCode
        size={size}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={content}
        viewBox={`0 0 256 256`}
      />
    </CardQR>
  );
};

export default QRCodeComponent;
