// material-ui
import { TreeItem, TreeView } from '@mui/lab';
import { Link } from 'react-router-dom';
// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// ==============================|| UI TREEVIEW - MULTI-SELECT ||============================== //

export default function MultiSelectTreeView() {
    return (
        <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />} multiSelect>
            <TreeItem nodeId="1" label="Workspace">
            {/* <TreeItem nodeId="1" label={<Link to="/subscriptions">Workspace</Link>}> */}
                <TreeItem nodeId="2" label={<Link to="/subscription-list">User Accounts</Link>} />
                <TreeItem nodeId="3" label="System Settings" />
                <TreeItem nodeId="4" label={<Link to="/subscription-list">Data Sources</Link>} />
                <TreeItem nodeId="5" label="Insights" />
            </TreeItem>
            {/* <TreeItem nodeId="5" label="Documents">System Settings,Data Sources,Insights
                <TreeItem nodeId="6" label="Material-UI">
                    <TreeItem nodeId="7" label="src">
                        <TreeItem nodeId="8" label="index.js" />
                        <TreeItem nodeId="9" label="tree-view.js" />
                    </TreeItem>
                </TreeItem>
            </TreeItem> */}
        </TreeView>
    );
}