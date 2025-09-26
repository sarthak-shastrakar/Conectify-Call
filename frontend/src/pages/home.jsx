import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "./Navbar.jsx";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;

  @media (max-width: 768px) {
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-left: 60px;
  padding-top: 2rem;
  gap: 3rem;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-left: 0;
    justify-content: center; /* override on mobile */
  }
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.65);
  padding: 30px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: #4e342e;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1rem;
    color: #37474f;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

const HeroImage = styled.div`
  flex: 1;
  img {
    width: 70%;
    border-radius: 16px;
  }
  @media (max-width: 768px) {
    img {
      width: 100%;
      border-radius: 16px;
    }
  }
`;

const JoinControls = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const FeaturesSection = styled.div`
  margin-bottom: 60px;
  color: black;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #4e342e;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  h3 {
    color: #4e342e;
    margin-bottom: 10px;
  }
  p {
    color: #37474f;
  }
`;

const HowItWorksSection = styled.div`
  margin-bottom: 60px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const StepCard = styled(FeatureCard)``;

const CTASection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: rgba(255, 228, 196, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(8px);

  h2 {
    font-size: 2rem;
    color: #4e342e;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #37474f;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (meetingCode.trim()) {
      await addToUserHistory(meetingCode);
      navigate(`/${meetingCode}`);
    } else {
      alert("Please enter a valid meeting code.");
    }
  };

  return (
    <PageWrapper>
      <Navbar />

      <HeroSection>
        <HeroText>
          <h1>Start or Join a Meeting Instantly</h1>
          <p>
            Connect with colleagues, friends, or clients using a secure meeting
            code. Fast, reliable, and completely online.
          </p>
          <JoinControls>
            <TextField
              onChange={(e) => setMeetingCode(e.target.value)}
              label="Enter Meeting Code"
              variant="outlined"
              fullWidth
            />
            <Button onClick={handleJoinVideoCall} variant="contained">
              Join Now
            </Button>
          </JoinControls>
        </HeroText>
        <HeroImage>
          <img src="/conference_img02.jpg" alt="Video meeting illustration" />
        </HeroImage>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <SectionTitle>Why Conectify?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Secure & Private</h3>
            <p>All your meetings are end-to-end encrypted and secure.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Instant Connection</h3>
            <p>
              Start or join meetings in just a few clicks, no downloads needed.
            </p>
          </FeatureCard>
          <FeatureCard>
            <h3>Cross-Platform</h3>
            <p>Works on desktop, mobile, or tablet seamlessly.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      {/* How It Works Section */}
      <HowItWorksSection>
        <SectionTitle>How It Works</SectionTitle>
        <StepsGrid>
          <StepCard>
            <h3>1. Create a Meeting</h3>
            <p>
              Generate a unique meeting code and share it with participants.
            </p>
          </StepCard>
          <StepCard>
            <h3>2. Join a Meeting</h3>
            <p>Enter the meeting code to join instantly from any device.</p>
          </StepCard>
          <StepCard>
            <h3>3. Collaborate</h3>
            <p>Chat, video call, and share your screen with your team.</p>
          </StepCard>
        </StepsGrid>
      </HowItWorksSection>

      {/* Call to Action Section */}
      <CTASection>
        <h2>Ready to Connect?</h2>
        <p>Start your first meeting now and experience smooth collaboration.</p>
        <Button
          onClick={handleJoinVideoCall}
          variant="contained"
          sx={{ padding: "10px 30px", fontWeight: "bold" }}
        >
          Join or Start a Meeting
        </Button>
      </CTASection>
    </PageWrapper>
  );
}

export default withAuth(HomeComponent);
