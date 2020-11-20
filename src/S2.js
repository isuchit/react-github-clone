  
import React from 'react'
import './S2.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function S2() {

    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="chat">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="Overview" {...a11yProps('one')} />
           <Tab value="two" label="Repositories 16" {...a11yProps('two')} />
          <Tab value="three" label="Projects" {...a11yProps('three')} />
          <Tab value="four" label="Packages" {...a11yProps('three')} />
            </Tabs>
            <hr />
            <TabPanel value={value} index="one" >
                Item One
            </TabPanel>
            <TabPanel value={value} index="two" >
                Item Two
            </TabPanel>
            <TabPanel value={value} index="three" >
                Item Three
            </TabPanel>
            <TabPanel value={value} index="four" >
                Item Four
            </TabPanel>
            <hr />
            <h2>hello</h2>
    </div>
    )
}

export default S2
