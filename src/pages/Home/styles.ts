import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 4px;
  display: flex;
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
`

export const HomeContainer = styled.div`
  padding-top: 44px;
  display: flex;
  width: 100%;
  height: calc(100vh);
`;

export const EventListContainer = styled.div`
  width: 30%;
`;

export const CalendarContainer = styled.div`
  flex-grow: 1;
  overflow-x: auto;
`;
