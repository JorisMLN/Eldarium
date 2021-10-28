import React, { ReactElement, useEffect } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";

const Icons: { [key: string]: ReactElement } = {
  fastfoodIcon: <FastfoodIcon></FastfoodIcon>,
  laptopMacIcon: <LaptopMacIcon></LaptopMacIcon>,
  hotelIcon: <HotelIcon></HotelIcon>,
  repeatIcon: <RepeatIcon></RepeatIcon>,
};

const fakeData: any[] = [
  {
    content: {
      title: "Eat",
      details: ["Because you need strength"],
    },
    info: {
      title: "9:30 am",
      details: ["Let's go !"],
    },
    icon: {
      value: "fastfoodIcon",
      color: undefined,
      variant: undefined,
    },
  },
  {
    content: {
      title: "Code",
      details: ["Because it's awesome !", "... And because i want my PROTO !"],
    },
    info: {
      title: "10:00 am",
      details: [],
    },
    icon: {
      value: "laptopMacIcon",
      color: "primary",
      variant: undefined,
    },
  },
  {
    content: {
      title: "Sleep",
      details: ["Because you need rest"],
    },
    info: {
      title: "",
      details: [],
    },
    icon: {
      value: "hotelIcon",
      color: "primary",
      variant: "outlined",
    },
  },
  {
    content: {
      title: "Repeat",
      details: ["Because this is the life you love !"],
    },
    info: {
      title: "",
      details: [],
    },
    icon: {
      value: "repeatIcon",
      color: "secondary",
      variant: undefined,
    },
  },
];

export function History() {
  const [historyData, setHistoryData] = React.useState<any[]>([]);
  const [transitionActivated, setTransitionActivated] = React.useState(false);

  useEffect(() => {
    // retrieve history from API
    const apiResponse = fakeData;
    if (apiResponse.length) {
      setHistoryData(apiResponse);
      setTransitionActivated(true);
    } else {
      setHistoryData([]);
      setTransitionActivated(false);
    }
  }, []);

  return (
    <Timeline position="alternate">
      {historyData.map((item, index: number) => {
        return (
          <Grow
            key={index}
            in={transitionActivated}
            style={{ transformOrigin: index % 2 === 0 ? "right" : "left" }}
            timeout={{ enter: index * 500 + 1000, exit: index * 500 + 1500 }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align={index % 2 === 0 ? "right" : "left"}
                variant="body2"
                color="text.secondary"
              >
                <Typography variant="body1">{item.info.title}</Typography>
                {item.info.details.map((detail: string, subIndex: number) => {
                  return (
                    <Typography key={subIndex} variant="body2">
                      {detail}
                    </Typography>
                  );
                })}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color={item.icon.color}
                  variant={item.icon.variant}
                >
                  {Icons[item.icon.value]}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6">{item.content.title}</Typography>
                {item.content.details.map(
                  (content: string, subIndex: number) => {
                    return (
                      <Typography key={subIndex} variant="body1">
                        {content}
                      </Typography>
                    );
                  }
                )}
              </TimelineContent>
            </TimelineItem>
          </Grow>
        );
      })}
    </Timeline>
  );
}
