import MinLayout2 from 'layout/MinLayout2';
import { lazy } from 'react';

// project imports
 import AuthGuard from 'utils/route-guard/AuthGuard';
// import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Workspace page routing
const Homepage = Loadable(lazy(() => import('views/Homepage/homepage')));
// ==============================|| MAIN ROUTING ||============================== //

const homepageRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MinLayout2 />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Homepage />
        },
        
        {
            path: '/homepage',
            element: <Homepage />
        }
    ]
};

export default homepageRoutes;