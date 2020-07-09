import React, { useState, useMemo } from "react";
import moment from "moment-timezone";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 160px;
`;

const Button = styled.button`
  background: #f2f2f2;
  color: black;
  padding: 10px;
  border-radius: 5px;
  border-style: none;
  border: 2px solid black;
  cursor: pointer;
  min-width: 160px;
`;

const ButtonDropdown = styled.div`
  display: ${props => props.active ? "block" : "none"};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px hsla(0, 0%, 0%, 0.2);
  z-index: 1;
`;

const Anchor = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover { background-color: #ddd }
`;

// --- Helper Functions ---
const makeUrl = (base, query) => Object.keys(query).reduce(
  (accum, key, index) => {
    const value = query[key];

    if (value !== null) {
      return `${accum}${index === 0 ? "?" : "&"}${key}=${encodeURIComponent(value)}`;
    }
    return accum;
  },
  base
);

const makeDuration = (data) => {
  const minutes = Math.floor((+new Date(data?.start.dateTime) - +new Date(data?.end.dateTime)) / 60 / 1000);
  return `${Math.floor(minutes / 60)}:${`0${minutes % 60}`.slice(-2)}`;
};

const makeTime = (time) => (`${moment(time).format("YYYYMMDD[T]HHmmss")}`);

const makeUrls = (data) => ({
  google: makeGoogleCalendarUrl(data),
  outlook: makeOutlookCalendarUrl(data),
  yahoo: makeYahooCalendarUrl(data),
  ics: makeICSCalendarUrl(data)
});

const makeGoogleCalendarUrl = (data) => makeUrl("https://calendar.google.com/calendar/render", {
  action: "TEMPLATE",
  text: "Handshake Meeting",
  details: data?.summary,
  dates: `${makeTime(data?.start.dateTime)}/${makeTime(data?.end.dateTime)}`
});

// Need to Test
const makeOutlookCalendarUrl = (data) => makeUrl("https://outlook.live.com/owa", {
  rru: "addevent",
  startdt: makeTime(data?.start.dateTime),
  enddt: makeTime(data?.end.dateTime),
  subject: "Handshake Meeting",
  body: data?.summary,
  allday: false,
  uid: new Date().getTime().toString(),
  path: "/calendar/view/Month"
});

const makeYahooCalendarUrl = (data) => makeUrl("https://calendar.yahoo.com", {
  v: 60,
  view: "d",
  type: 20,
  title: "Handshake Meeting",
  st: makeTime(data?.start.dateTime),
  dur: makeDuration(data),
  desc: data?.summary
});

// TODO: this needs refining
const makeICSCalendarUrl = (data) => {
  const components = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `URL:${document.URL}`,
    `DTSTART:${makeTime(data?.start.dateTime)}`,
    `DTEND:${makeTime(data?.end.dateTime)}`,
    `SUMMARY:"Handshake Meeting"`,
    `DESCRIPTION:${data?.summary}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ];

  return encodeURI(`data:text/calendar;charset=utf8,${components.join("\n")}`);
};

// --- Functional Components ---
function Calendar({ children, download = false, href }) {
  return (
    <Anchor download={download} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Anchor>
  )
}

function Dropdown({ active, urls }) {
  console.log(urls);
  return (
    <ButtonDropdown active={active}>
      <Calendar href={urls.ics} download>iCal</Calendar>
      <Calendar href={urls.google}>Google</Calendar>
      <Calendar href={urls.outlook}>Outlook</Calendar>
      <Calendar href={urls.yahoo}>Yahoo</Calendar>
    </ButtonDropdown>
  )
}

export default function AddToCalendarButton({ data, value }) {
  const [showDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(active => !active);
  const urls = useMemo(() => makeUrls(data), [data]);

  return (
    <ButtonWrapper>
      {data && (
        <Button type="button" onClick={toggleDropdown}>{value}</Button>
      )}
      {showDropdown && <Dropdown active={showDropdown} urls={urls} />}
    </ButtonWrapper>
  );
}
