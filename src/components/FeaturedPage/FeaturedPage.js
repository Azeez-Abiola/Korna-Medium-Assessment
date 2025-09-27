import React from 'react';
import styled from 'styled-components';

const FeaturedContainer = styled.div`
  max-width: 680px;
  width: 100%;
`;

const NotificationBanner = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 6px;
  font-size: 14px;
  color: #242424; /* Changed to black */
  line-height: 1.4;

  @media (max-width: 768px) {
    margin: 0 -16px 32px -16px;
    padding: 16px;
  }
`;

const DismissButton = styled.button`
  background: none;
  border: none;
  color: #242424; /* Changed to black */
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 8px;
  
  &:hover {
    color: #242424;
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
`;

const EmptyStateTitle = styled.h2`
  font-size: 18px; /* Reduced from 24px to 18px */
  font-weight: 500;
  color: #242424;
  margin-bottom: 16px;
`;

const EmptyStateDescription = styled.p`
  font-size: 16px;
  color: #242424; /* Changed to black */
  line-height: 1.4;
  margin-bottom: 24px;
  max-width: 400px;
`;

const ViewRecommendationsLink = styled.a`
  color: #242424; /* Changed to black */
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    color: #242424; /* Keep black on hover */
  }
`;

const FeaturedPage = () => {
  return (
    <FeaturedContainer>
      <NotificationBanner>
        "Following" and your topics are now part of the new Following page, which you can find from the sidebar.
        <DismissButton>Okay, got it</DismissButton>
      </NotificationBanner>
      
      <EmptyStateContainer>
        <EmptyStateTitle>No featured stories</EmptyStateTitle>
        <EmptyStateDescription>
          Featured stories from the publications you follow will appear here.
        </EmptyStateDescription>
        <ViewRecommendationsLink>View recommended publications</ViewRecommendationsLink>
      </EmptyStateContainer>
    </FeaturedContainer>
  );
};

export default FeaturedPage;