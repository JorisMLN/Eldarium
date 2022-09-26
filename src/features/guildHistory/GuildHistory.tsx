import React from "react";
import './guild.scss';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const fakeData : Array<string> = [
  '1', 
  '2', 
  '3', 
  '(anon) Council periode', 
  '(mai2013) Eldarium Fondation', 
  '(fev2013-mai2013) Night Watch Aera',
  '(dec2012-fev2013) Arsenal Aera', 
  '(2010-2012) Pre-guild Aera with Jager'
];

const GuildHistory : React.FC = () => {
  return(
    <>
      <div className="guild">
        <Timeline position="alternate">

          {fakeData.map((moment, index) : React.ReactNode => {
            return <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary"/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{moment}</TimelineContent>
            </TimelineItem>
          })}

        </Timeline> 
      </div>
    </>
  )
}

export default GuildHistory;