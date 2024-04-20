import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Layout from '../../components/layout/Layout';
import StyledContent from './StoryContent'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({story}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Layout>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="World Explorer" {...a11yProps(0)} />
                        <Tab label="Story Adventure" {...a11yProps(1)} />
                        <Tab label="Brain Quest" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                    <CustomTabPanel value={value} index={0}>
                        <StyledContent story={story}/>
                    </CustomTabPanel>
                
                <CustomTabPanel value={value} index={1}>
                    <Button>Story Adventure</Button>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Button>Brain Quest</Button>
                </CustomTabPanel>

                {/* <StyledContent /> */}
            </Box>
        </Layout>
    );
}
