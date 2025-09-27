import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  position: relative; /* Add relative positioning to contain the absolute vertical line */
`;

const ContentWrapper = styled.div`
  max-width: 1192px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 328px; /* Simplified grid - just main content and sidebar */
  gap: 0 48px; /* Space between main content and sidebar */
  padding-top: 25px;
  position: relative;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0 20px;
    padding-top: 25px;
  }

  @media (max-width: 768px) {
    padding: 0 16px; /* Single padding value for mobile */
    padding-top: 20px;
    margin: 0; /* Remove margins to prevent overflow */
  }
`;

const MainContent = styled.main`
  min-height: calc(100vh - 100px);
`;

const VerticalDivider = styled.div`
  width: 1px;
  background-color: #e6e6e6; /* Match TopSection border color exactly */
  position: absolute;
  top: -73px; /* Connect to TopSection bottom border: -(57px TopSection + 48px Navigation - 32px adjustment) */
  bottom: 0; /* Extend to the bottom */
  right: 320px; /* Keep the same horizontal position */
  height: auto; /* Let it fill from top to bottom automatically */
  
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 25px;
  height: fit-content;
  padding-left: 60px; /* Increase this value to move content further right */
  
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Layout = ({ header, children, sidebar }) => {
  return (
    <LayoutContainer>
      {header}
      <ContentWrapper>
        <MainContent>
          {children}
        </MainContent>
        <Sidebar>
          {sidebar}
        </Sidebar>
        <VerticalDivider />
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;