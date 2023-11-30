import { lazy } from 'react';

// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
const Subscriptions = Loadable(lazy(() => import('views/DataSources/subscription-list')));
const SubscriptionMain = Loadable(lazy(() => import('views/DataSources/subscriptions/subscription-main')));
const Subscription1connect = Loadable(lazy(() => import('views/DataSources/subscriptions/subscription-1connect')));
const Subscription2map = Loadable(lazy(() => import('views/DataSources/subscriptions/subscription-2map')));
const Subscription3test = Loadable(lazy(() => import('views/DataSources/subscriptions/subscription-3test')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Subscriptions />
        },
        {
            path: '/subscription-list',
            element: <Subscriptions />
        },
        {
            path: '/subscriptions/subscription-main',
            element: <SubscriptionMain />
        },
        {
            path: '/subscriptions/subscription-1connect',
            element: <Subscription1connect />
        },
        {
            path: '/subscriptions/subscription-2map',
            element: <Subscription2map />
        },
        {
            path: '/subscriptions/subscription-3test',
            element: <Subscription3test />
        }
    ]
};

export default MainRoutes;
