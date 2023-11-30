// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// // material-ui
// import { useTheme } from '@mui/material/styles';
// import { Container, Grid, Typography, Stack, CardMedia, Box, Button } from '@mui/material';

// // project imports
// import FadeInWhenVisible from './Animation';
// import SubCard from 'ui-component/cards/SubCard';
// import Avatar from 'ui-component/extended/Avatar';
// import Cover from 'assets/images/homepage_bkgd_1.jpg';
// // assets
// import Offer1 from 'assets/images/landing/offer/offer-1.png';
// import Offer2 from 'assets/images/landing/offer/offer-2.png';
// import Offer3 from 'assets/images/landing/offer/offer-3.png';


// const OfferCard = ({ title, caption, image }) => {
//     const theme = useTheme();
//     const AvaterSx = { background: 'transparent', color: theme.palette.secondary.main, width: 56, height: 56 };
//     return (
//         <FadeInWhenVisible>
//             <SubCard
//                 sx={{
//                     bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
//                     borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.divider,
//                     '&:hover': { boxShadow: 'none' },
//                     height: '100%'
//                 }}
//             >
//                 <Stack spacing={4}>
//                     <Avatar variant="rounded" sx={AvaterSx}>
//                         <CardMedia component="img" src={image} alt="Beautiful User Interface" />
//                     </Avatar>
//                     <Stack spacing={2}>
//                         <Typography variant="h3" sx={{ fontWeight: 500 }}>
//                             {title}
//                         </Typography>
//                         <Typography variant="body2" sx={{ fontSize: '1rem' }}>
//                             {caption}
//                         </Typography>
//                     </Stack>
//                 </Stack>
//             </SubCard>
//         </FadeInWhenVisible>
//     );
// };

// OfferCard.propTypes = {
//     title: PropTypes.string,
//     caption: PropTypes.string,
//     image: PropTypes.string
// };

// // =============================|| LANDING - FEATURE PAGE ||============================= //
// const FeatureSection = () => (

//     <Container>
//         <Grid container spacing={7.5} justifyContent="center">
//             {/* <CardMedia
//                             component="img"
//                             image={Cover}
//                             sx={{ height:'250px',width:'100%', overflow: 'hidden', mb: 1 , objectFit:'contain', marginRight:'auto'}}
//                             alt="pro images"
                          
//                         />  */}
//             <Box
//                 sx={{
//                     backgroundImage: `url(${Cover})`,  // Set the background image
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     // backgroundPosition: 'left',
//                     height: '250px',  // Set the height
//                     marginTop: '2rem',  // Adjust margin-top 
//                     width: '100%',
//                     overflow: 'hidden',
//                     display:'flex',
//                     alignItems: 'center',  // Center vertically
//                     justifyContent: 'space-between',  // Align to the left horizontally
//                     paddingRight: '15%',
//                 }}
//             >
//                 {/* Content within the full-width section */}
//                 <Container sx={{ width: '100%', paddingRight: 0 }}>
//                 <Grid container justifyContent="space-between" alignItems="center">
//                     <Grid item xs={6}>
//                         <Grid container justifyContent="center">
//                             <Button color="secondary" variant="contained">Click here to add new Data Source</Button>
//                         </Grid>
//                     </Grid>
                    
//                     <Grid item xs={2}>
//                         <Grid container direction="column" alignItems="flex-start" >
//                             {/*  workspace options */}
//                             <Typography variant="h3" sx={{ marginBottom: '16px' }}>
//                             Your Workspaces:
//                             </Typography>
//                             <Button component={Link} to="/subscription-list" variant="text"  sx={{ fontSize: '1rem', padding: '0px' }}>User Accounts</Button>
//                             <Button component={Link} to="/subscription-list" variant="text"  sx={{ fontSize: '1rem', padding: '0px' }}>System Settings</Button>
//                             <Button component={Link} to="/subscription-list" variant="text"  sx={{ fontSize: '1rem', padding: '0px' }}>Data Sources</Button>
//                             <Button component={Link} to="/subscription-list" variant="text"  sx={{ fontSize: '1rem', padding: '0px' }}>Insights</Button>
//                         </Grid>
//                     </Grid>
//                  </Grid>
//                 </Container>

//             </Box>
//             <Grid item xs={12} md={16} sx={{ textAlign: 'left' }}>
//                 <Grid container spacing={1.5}>
//                     <Grid item xs={12}>
//                         <Typography variant="h1" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
//                             A Glimpse into the Future: Our Upcoming Features
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant='caption' sx={{ fontSize: '1rem' }}>
//                             Get ready for a wave of innovation! Our next set of game-changing features is just around the corner. Stay tuned for
//                             {'\n'}
//                             a whole new level of functionality, designed to make your experience even more powerful and user-friendly.
//                         </Typography>
//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Grid item xs={12}>
//                 <Grid container justifyContent="center" spacing={5} sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Seamless Data Integration"
//                             caption="Unleash the power of our API to effortlessly access all your ingested data sources, unlocking limitless possibilities for your business."
//                             image={Offer1}
//                         />
//                     </Grid>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Your Knowledge Navigator"
//                             caption="Harnessing the immense power of data, we've crafted a chatbot that delivers answers at your fingertips, transforming the way you access and utilize information."
//                             image={Offer2}

//                         />
//                     </Grid>
//                     <Grid item md={4} sm={6}>
//                         <OfferCard
//                             title="Discover More"
//                             caption="Elevate your searches beyond data source boundaries with our revolutionary technology."
//                             image={Offer3}
//                         />
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Container>
// );

// export default FeatureSection;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import Cover from 'assets/images/homepage_bkgd_1.jpg';
import Offer1 from 'assets/images/landing/offer/offer-1.png';
import Offer2 from 'assets/images/landing/offer/offer-2.png';
import Offer3 from 'assets/images/landing/offer/offer-3.png';

const OfferCard = ({ title, caption, image }) => {
  const theme = useTheme();
  const avatarSx = { background: 'transparent', color: theme.palette.secondary.main, width: 56, height: 56 };

  return (
    <SubCard
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.divider,
        '&:hover': { boxShadow: 'none' },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center-align content vertically
        justifyContent: 'center', // Center-align content horizontally
        textAlign: 'center', 
      }}
    >
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar variant="rounded" sx={avatarSx}>
          <img src={image} alt="Beautiful User Interface" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Avatar>
      </Box>
      <Box mt={2} textAlign="center" width="100%">
        <Typography variant="h3" sx={{ fontWeight: 500, mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '1rem', mb: 2 }}>
          {caption}
        </Typography>
      </Box>
    </SubCard>
  );
};

OfferCard.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
};

const FeatureSection = () => (
  <>
    <Box
      sx={{
        backgroundImage: `url(${Cover})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: { xs: '200px', sm: '250px' },
        marginTop: '2rem',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: { xs: '5%', sm: '15%' },
      }}
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center" >
          <Grid item xs={12} sm={6}>
            <Box mt={{ xs: 2, sm: 0 }} textAlign={{ xs: 'center', sm: 'right' }}>
              <Button color="secondary" variant="contained">
                Click here to add new Data Source
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box textAlign={{ xs: 'center', sm: 'left' }}>
              <Typography variant="h3" sx={{ marginBottom: { xs: '8px', sm: '16px' } }}>
                Your Workspaces:
              </Typography>
              <Button component={Link} to="/subscription-list" variant="text" sx={{ fontSize: '1rem', padding: 0, mr: 2, display: 'block' }}>
                User Accounts
              </Button>
              <Button component={Link} to="/subscription-list" variant="text" sx={{ fontSize: '1rem', padding: 0, mr: 2, display: 'block' }}>
                System Settings
              </Button>
              <Button component={Link} to="/subscription-list" variant="text" sx={{ fontSize: '1rem', padding: 0, mr: 2, display: 'block' }}>
                Data Sources
              </Button>
              <Button component={Link} to="/subscription-list" variant="text" sx={{ fontSize: '1rem', padding: 0, display: 'block' }}>
                Insights
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
      <Grid item xs={12} md={16} textAlign="left">
        <Typography variant="h1" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
          A Glimpse into the Future: Our Upcoming Features
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1rem', mb: 3 }}>
          Get ready for a wave of innovation! Our next set of game-changing features is just around the corner. Stay tuned for a whole new level of functionality,
          designed to make your experience even more powerful and user-friendly.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item md={4} sm={6}>
            <OfferCard
              title="Seamless Data Integration"
              caption="Unleash the power of our API to effortlessly access all your ingested data sources, unlocking limitless possibilities for your business."
              image={Offer1}
            />
          </Grid>
          <Grid item md={4} sm={6}>
            <OfferCard
              title="Your Knowledge Navigator"
              caption="Harnessing the immense power of data, we've crafted a chatbot that delivers answers at your fingertips, transforming the way you access and utilize information."
              image={Offer2}
            />
          </Grid>
          <Grid item md={4} sm={6}>
            <OfferCard title="Discover More" caption="Elevate your searches beyond data source boundaries with our revolutionary technology." image={Offer3} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default FeatureSection;

