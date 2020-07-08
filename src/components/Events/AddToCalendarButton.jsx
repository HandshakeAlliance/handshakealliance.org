import React, { useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 160px;
`;

const Button = styled.button`
  background: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  min-width: 160px;
`;

const Dropdown = styled.div`
  display: ${props => props.active ? "block" : "none"};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px hsla(0, 0%, 0%, 0.2);
  z-index: 1;
`;

const CalendarLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover { background-color: #ddd }
`;

export default function AddToCalendarButton({ data, value }) {
  const [showDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(active => !active);
  const closeDropdown = () => setDropdown(false);



  return (
    <ButtonWrapper>
      <Button type="button" onClick={toggleDropdown} onBlur={closeDropdown}>{value}</Button>
      <Dropdown active={showDropdown}>
        <CalendarLink href="#">iCal</CalendarLink>
        <CalendarLink href="#">Google</CalendarLink>
        <CalendarLink href="#">Outlook</CalendarLink>
        <CalendarLink href="#">Yahoo</CalendarLink>
      </Dropdown>
    </ButtonWrapper>
  );
}
