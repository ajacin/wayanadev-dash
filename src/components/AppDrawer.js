import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        width: "95%",
        alignSelf: "center",
        // border: "1px solid black",
        boxShadow: 5,
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          background="transparent"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{
            background: "linear-gradient(to right, #273b7a, #476bdd)",
          }}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item One" {...a11yProps(3)} />
          <Tab label="Item Two" {...a11yProps(4)} />
          <Tab label="Item Three" {...a11yProps(5)} />
          <Tab label="Item One" {...a11yProps(6)} />
          <Tab label="Item Two" {...a11yProps(7)} />
          <Tab label="Item Three" {...a11yProps(8)} />
          <Tab label="Item One" {...a11yProps(9)} />
          <Tab label="Item Two" {...a11yProps(10)} />
          <Tab label="Item Three" {...a11yProps(11)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Hello there sample{" "}
          <ClearIcon
            style={{ alignSelf: "flex-end", color: "red", cursor: "pointer" }}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item five
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item six
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={9} dir={theme.direction}>
          Item four
        </TabPanel>
        <TabPanel value={value} index={10} dir={theme.direction}>
          Item five
        </TabPanel>
        <TabPanel value={value} index={11} dir={theme.direction}>
          Item ten
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
