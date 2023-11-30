// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2" component={Link} href="https://blueberrylabs.ai" target="_blank" underline="hover">
            www.blueberrylabs.ai
        </Typography>
        <Typography variant="body2" component={Link} href="https://blueberrylabs.ai" target="_blank" underline="hover">
            2023&copy;BlueberryLabs
        </Typography>
    </Stack>
);

export default AuthFooter;
