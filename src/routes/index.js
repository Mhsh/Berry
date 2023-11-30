import { useRoutes } from 'react-router-dom';

// routes
import AuthenticationRotes from './AuthenticationRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import HomepageRoutes from './HomepageRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([LoginRoutes, AuthenticationRotes, MainRoutes, HomepageRoutes]);
}
