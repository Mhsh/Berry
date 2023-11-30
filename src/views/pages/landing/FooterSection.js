// // material-ui
//  import { useTheme } from '@mui/material/styles';
// import { Box, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material'; // Divider

// // project import
// // import Chip from 'ui-component/extended/Chip';
// // import { frameworks } from './FrameworkSection';

// // assets
// // import Dribble from 'assets/images/landing/footer-dribble.png';
// // import Freepik from 'assets/images/landing/footer-freepik.png';
// // import Awards from 'assets/images/landing/footer-awards.png';

// import PublicIcon from '@mui/icons-material/Public';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// // import LogoSection from 'layout/MainLayout/LogoSection';
// import LightLogo from 'layout/MainLayout/LogoSectionLight';
// // Link - custom style
// // const FooterLink = styled(Link)(({ theme }) => ({
// //     color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.hint,
// //     '&:hover': {
// //         color: theme.palette.primary.main
// //     },
// //     '&:active': {
// //         color: theme.palette.primary.main
// //     }
// // }));

// // =============================|| LANDING - FOOTER SECTION ||============================= //

// const FooterSection = () => {
//     const theme = useTheme();
//     const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';

//     const dividerSX = {
//         borderImageSlice: 1,
//         borderImageSource: `linear-gradient(90deg, rgba(255, 255, 255, 0) -0.01%, rgba(255, 255, 255, 0.56) 51.97%, rgba(255, 255, 255, 0.03) 99.99%)`,
//         opacity: 0.5,
//         width: '100%', // Set the width to 100% of the container
//         height: '20px', // Set the height to control the thickness of the divider
//         border: '1px solid transparent', // Add a transparent border for the decorative effect
//     };

//     return (
//         <>      
//             <div style={dividerSX}>
//             </div>
//             <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '0vh' }}>
//             <Grid item xs={12}>
//             <Box component="span" sx={{py: { xs: 5, sm: 3}, bgcolor: 'secondary.main' ,display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
//                     <LightLogo/>                   
//                 </Box>
//             </Grid>
//             <Box sx={{ bgcolor: 'secondary.dark', py: { xs: 1.5, sm: 0.5 } }}>
//                 <Container>              
//                     <Stack
//                         direction={{ xs: 'column', sm: 'row' }}
//                         alignItems="center"
//                         justifyContent="space-between"
//                         spacing={{ xs: 1.5, sm: 1, md: 3 }}
//                     >
//                         <Typography  color={textColor} >
//                             © 2023 BlueberryLabs. All rights reserved{' '}
//                         </Typography>
//                         <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
//                             <IconButton
//                                 size="small"
//                                 component={Link}
//                                 href="https://BlueberryLabs"
//                                 target="_blank"
//                                 aria-label="blog"
//                             >
//                                 <PublicIcon sx={{ color: 'primary.light', '&:hover': { color: 'error.main' } }} />
//                                 <Typography color={textColor}>Website{' '}</Typography>
//                             </IconButton>
//                             <IconButton
//                                 size="small"
//                                 component={Link}
//                                 href="https://twitter.com/BlueberryLabs"
//                                 target="_blank"
//                                 aria-label="twitter"
//                                 icon= "icons.ListAltOutlinedIcon"
//                             >
//                                 <TwitterIcon sx={{ color: 'primary.light', '&:hover': { color: 'primary.main' } }}  />
//                                 <Typography color={textColor}>Twitter{' '}</Typography>
//                             </IconButton>
//                             <IconButton
//                                 size="small"
//                                 component={Link}
//                                 href="https://Facebook.com/BlueberryLabs"
//                                 target="_blank"
//                                 aria-label="dribble"
//                             >
//                                 <FacebookOutlinedIcon sx={{ color: 'primary.light', '&:hover': { color: 'warning.main' } }} />
//                                 <Typography color={textColor}>Facebook{' '}</Typography>
//                             </IconButton>
//                         </Stack>
//                     </Stack>
//                 </Container>
//             </Box>
//             </Box>
//         </>
//     );
// };

// export default FooterSection;

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LightLogo from 'layout/MainLayout/LogoSectionLight';

const FooterSection = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';

  const dividerStyle = {
    borderImageSlice: 1,
    borderImageSource: `linear-gradient(90deg, rgba(255, 255, 255, 0) -0.01%, rgba(255, 255, 255, 0.56) 51.97%, rgba(255, 255, 255, 0.03) 99.99%)`,
    opacity: 0.5,
    width: '100%',
    height: '20px',
    border: '1px solid transparent',
  };

  return (
    <>
      <div style={dividerStyle}></div>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '0vh' }}>
        <Grid item xs={12}>
          <Box
            component="span"
            sx={{
              py: { xs: 5, sm: 3 },
              bgcolor: 'secondary.main',
              display: { xs: 'none', md: 'block' },
              flexGrow: 1,
            }}
          >
            <LightLogo />
          </Box>
        </Grid>
        <Box sx={{ bgcolor: 'secondary.dark', py: { xs: 1.5, sm: 0.5 } }}>
          <Container>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ xs: 1.5, sm: 1, md: 3 }}
            >
              <Typography color={textColor}>
                © 2023 BlueberryLabs. All rights reserved{' '}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
                <IconButton
                  size="small"
                  component={Link}
                  href="https://BlueberryLabs"
                  target="_blank"
                  aria-label="blog"
                >
                  <PublicIcon sx={{ color: 'primary.light', '&:hover': { color: 'error.main' } }} />
                  <Typography color={textColor}>Website</Typography>
                </IconButton>
                <IconButton
                  size="small"
                  component={Link}
                  href="https://twitter.com/BlueberryLabs"
                  target="_blank"
                  aria-label="twitter"
                >
                  <TwitterIcon sx={{ color: 'primary.light', '&:hover': { color: 'primary.main' } }} />
                  <Typography color={textColor}>Twitter</Typography>
                </IconButton>
                <IconButton
                  size="small"
                  component={Link}
                  href="https://Facebook.com/BlueberryLabs"
                  target="_blank"
                  aria-label="dribble"
                >
                  <FacebookOutlinedIcon sx={{ color: 'primary.light', '&:hover': { color: 'warning.main' } }} />
                  <Typography color={textColor}>Facebook</Typography>
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default FooterSection;
