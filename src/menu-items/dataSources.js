// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconAlignBoxLeftTop } from '@tabler/icons';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
// ==============================|| MENU ITEMS - subscription-list ||============================== //

const icons = {
    IconAlignBoxLeftTop, ContentCopyIcon, VerticalSplitOutlinedIcon, BrandingWatermarkOutlinedIcon,
    ExpandMoreIcon, ListAltOutlinedIcon, StreamOutlinedIcon
};
const DataSources = {
    id: 'Data Sources',
    title: <FormattedMessage id="Data sources" />,
    icon: icons.IconAlignBoxLeftTop,
    type: 'group',
    children: [
        {
            id: 'subscription-List',
            title: <FormattedMessage id="Subscription List" />,
            type: 'item',
            url: '/subscription-list',
            icon: icons.ListAltOutlinedIcon,
            breadcrumbs: true
        },
        {
            id: 'Subscriptions',
            title: <FormattedMessage id="Subscriptions" />,
            type: 'item',
             url: '/subscriptions/subscription-main',
            icon: icons.StreamOutlinedIcon,
            breadcrumbs: true
        },
        
    ]
};

export default DataSources;
