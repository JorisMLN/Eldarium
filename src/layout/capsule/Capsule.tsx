import React from 'react';
import './capsule.scss';
import logoName from '../../assets/logoName.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ContentCapsule from './../contentCapsule/contentCapsule';
import Home from './../../features/home/Home';
import GuildHistory from './../../features/guildHistory/GuildHistory';
import Media from './../../features/media/Media';
import Chronicles from './../../features/chronicles/Chronicles';
import Vingilot from './../../features/vingilot/Vingilot';
import Irl from './../../features/irl/Irl';
import Credits from './../../features/credits/Credits';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
  sx?: object;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Capsule : React.FC = () => {

  const [value, setValue] = React.useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='capsule'>
        <Box sx={{ flexGrow: 1, bgcolor: '#121212', display: 'flex', height: 224 }}>
          <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} 
            aria-label="Vertical tabs example" sx={{ width: 300, borderRight: 1, borderColor: '#ffffff', backgroundColor: '#000000' }}>

            <img className='logoName' src={logoName}></img>

            <Tab label="Home" className='tabs'/>
            <Tab label="Guild History" className='tabs'/>
            <Tab label="Media"  className='tabs'/>
            <Tab label="Chronicles"  className='tabs'/>
            <Tab label="Vingilot Studio"  className='tabs'/>
            <Tab label="In Real Life"  className='tabs'/>
            <Tab label="Credits"  className='tabs'/>
          </Tabs>

          <TabPanel value={value} index={1} className='tabPanel'>
            <ContentCapsule child={<Home />} name={'Home'} />
          </TabPanel>
          <TabPanel value={value} index={2} className='tabPanel'>
            <ContentCapsule child={<GuildHistory />} name={'Guild History'} />
          </TabPanel>
          <TabPanel value={value} index={3} className='tabPanel'>
            <ContentCapsule child={<Media />} name={'Media'} />
          </TabPanel>
          <TabPanel value={value} index={4} className='tabPanel'>
            <ContentCapsule child={<Chronicles />} name={'Chronicles'} />
          </TabPanel>
          <TabPanel value={value} index={5} className='tabPanel'>
            <ContentCapsule child={<Vingilot />} name={'Vingilot Studio'} />
          </TabPanel>
          <TabPanel value={value} index={6} className='tabPanel'>
            <ContentCapsule child={<Irl />} name={'In Real Life'} />
          </TabPanel>
          <TabPanel value={value} index={7} className='tabPanel'>
            <ContentCapsule child={<Credits />} name={'Credits'} />
          </TabPanel>
        </Box>
      </div>
    </>
  );
}

export default Capsule;