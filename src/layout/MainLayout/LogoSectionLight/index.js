import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// project imports
import { DASHBOARD_PATH } from 'config';
import LogoLight from 'ui-component/LogoLight'
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <Link component={RouterLink} to={DASHBOARD_PATH} aria-label="berry logo">
        <LogoLight></LogoLight>
    </Link>
);

export default LogoSection;