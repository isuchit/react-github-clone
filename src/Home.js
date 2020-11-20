import React from 'react'
import './Home.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';

const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#F9826C',
    },
  })(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#000000',
        opacity: 1,
      },
      '&$selected': {
        color: '#000000',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#000000',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

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

function Home() {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="home">
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab value="one" label="Overview" {...a11yProps('one')} />
            <AntTab value="two" label="Repositories 16" {...a11yProps('two')} />
            <AntTab value="three" label="Projects" {...a11yProps('three')} />
            <AntTab value="four" label="Packages" {...a11yProps('three')} />
            </AntTabs>
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
        </div>

    )
}

export default Home
