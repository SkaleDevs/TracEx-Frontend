import { Typography, styled, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {
  stepConnectorClasses
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const TypographyModified = styled(Typography)(
  ({ theme }) => `
  font-family: Montserrat;
  text-align: center;
`
);

export default function ProgressLocationBar({
  activeStepValue,
  shipmentCurrentHashValue
}) {
  const steps = [
    'Received at previous station',
    'In transit',
    'Arrived at center'
  ];

  const activeStep = activeStepValue;

  const shipmentCurrentHash = shipmentCurrentHashValue;

  return (
    <>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <TypographyModified>{label}</TypographyModified>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <TypographyModified>
        Shipment Hash : {shipmentCurrentHash}
      </TypographyModified>
      {activeStep === 3 ? <Button variant="contained">Fill form</Button> : null}
    </>
  );
}

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <InventoryIcon />,
    2: <LocalShippingIcon />,
    3: <BusinessIcon />
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: 'rgb(251, 167, 59)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  }),
  ...(ownerState.completed && {
    backgroundColor: 'rgb(104, 185, 33)'
  })
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'rgb(251, 167, 59)'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'rgb(104, 185, 33)'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1
  }
}));
