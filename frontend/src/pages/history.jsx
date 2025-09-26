import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { IconButton } from "@mui/material";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        // TODO: Snackbar for error
      }
    };

    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Wrapper>
      <Navbar />
      <Header>
        <IconButton
          onClick={() => {
            routeTo("/home");
          }}
          sx={{ color: "#5d4037" }}
        >
          <HomeIcon />
        </IconButton>
        <Title>Your Meeting History</Title>
      </Header>

      <HistoryList>
        {meetings.length !== 0 ? (
          meetings.map((e, i) => (
            <HistoryCard key={i}>
              <MeetingName>{e.meetingName || "Untitled Meeting"}</MeetingName>
              <Code>Code: {e.meetingCode}</Code>
              <DateText>Date: {formatDate(e.date)}</DateText>
              
            </HistoryCard>
          ))
        ) : (
          <EmptyState>No meetings found yet 🚀</EmptyState>
        )}
      </HistoryList>
    </Wrapper>
  );
}

/* ---------------- Styled Components ---------------- */

const Wrapper = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #4e342e;
  margin-left: 10px;
`;

const HistoryList = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 20px;

  /* Responsive grid */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const HistoryCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }
`;

const MeetingName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #37474f;
  margin: 0 0 8px 0;
`;

const Code = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #37474f;
  margin: 0 0 6px 0;
`;

const DateText = styled.p`
  font-size: 0.9rem;
  color: #607d8b;
  margin: 0;
`;

const EmptyState = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #757575;
  margin-top: 40px;
`;
