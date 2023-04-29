import React from 'react';
import styled from 'styled-components';
import AdminHomeHelper from './AdminHomeHelper'

const AboutUs = () => {
    const members = ['Akash', 'Apurv', 'Archana'];
    const groupName = 'BCA 3';

    return (
        <>
        <AdminHomeHelper/>
        <Wrapper>
            <ContentWrapper>
                <h1>About Us</h1>
                <p>We are a group of two members, {members[0]} and {members[1]}, and one member, {members[2]}, from {groupName} who have developed an Attendance Management System (AMS).</p>
                <p>The AMS is a web application designed to help schools and universities manage student attendance records efficiently.</p>
                <p>Our team has worked hard to create a user-friendly interface and robust functionality that meets the needs of educational institutions of all sizes.</p>
                <a href="mailto:ak65469@gmail.com" className="btn btn-primary mt-3">Contact Us</a>
            </ContentWrapper>
        </Wrapper>
        </>
    );
};

export default AboutUs;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;

  @media (min-width: 768px) {
    width: 500px;
    padding: 50px;
  }
`;
