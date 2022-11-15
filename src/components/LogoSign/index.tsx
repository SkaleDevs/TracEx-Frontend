import {
  Box,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  styled,
} from '@mui/material';
import Link from 'src/components/Link';
import Image from 'next/image';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 222px;
        margin: 0 auto;
        margin-top: -50px;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 210px;
        height: 115px;  
`
);

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100]
  }
}));

function Logo() {
  return (
    <TooltipWrapper title="Urja Dashboard" arrow>
      <LogoWrapper href="/">
        <LogoSignWrapper>
          <Image src= "/logo.png" width= {400} height= {300} />
        </LogoSignWrapper>
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default Logo;
