import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weig          {whoToFollow.map(author => (
            <AuthorCard key={author.id}>
              <AuthorInfo>
                <AuthorAvatar avatar={author.avatar} />
                <AuthorDetails>
                  <AuthorName>{author.name}</AuthorName>
                  <AuthorDescription>{author.description}</AuthorDescription>
                </AuthorDetails>
              </AuthorInfo>
              <FollowButton>Follow</FollowButton>
            </AuthorCard>
          )))color: #242424;
  margin-bottom: 16px;
`;

const StaffPicksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StaffPickItem = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const StaffPickContent = styled.div`
  flex: 1;
`;

const StaffPickAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #6b6b6b;
`;

const StaffPickAuthorAvatar = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-image: url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face');
  background-size: cover;
  background-position: center;
`;

const StaffPickTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #242424;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StaffPickImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f2f2f2;
  background-image: ${props => props.src ? `url(${props.src})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  flex-shrink: 0;
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const TopicTag = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500; /* Make topics medium bold */
  color: #242424; /* Change to black */
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e6e6e6;
    color: #242424;
  }
`;

const SeeMoreLink = styled.button`
  background: none;
  border: none;
  color: #242424; /* Change to black */
  font-size: 13px;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

const SeeMoreSuggestions = styled(SeeMoreLink)`
  margin-top: 16px; /* Add margin-top to move it downwards */
`;

const WhoToFollowList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AuthorCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
`;

const AuthorAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: ${props => props.avatar ? `url(${props.avatar})` : `url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face")`};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

const AuthorDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const AuthorName = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #242424;
  margin-bottom: 2px;
`;

const AuthorDescription = styled.p`
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FollowButton = styled.button`
  background: none;
  border: 1px solid #242424; /* Change border to black */
  border-radius: 20px; /* Restore original border radius */
  color: #242424; /* Change text color to black */
  font-size: 13px;
  font-weight: 500;
  padding: 6px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: #242424; /* Change hover background to black */
    color: #ffffff;
  }
`;

const ReadingListSection = styled.div`
  margin-top: 40px;
  padding-top: 16px;
  border-top: 1px solid #f2f2f2;
`;

const BookmarkIcon = styled.svg`
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin: 0 2px;
  cursor: pointer;
  
  path {
    fill: #6b6b6b;
    transition: fill 0.2s ease;
  }
`;

const ReadingListContent = styled.p`
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.4;
  margin-bottom: 16px;
  
  svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 0 2px;
    fill: #6b6b6b;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #6b6b6b;
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  const staffPicks = [
    {
      id: 1,
      author: "The Medium Handbook for Sales at Medium",
      title: "How this brand used Leo Zodiac to explore ideas, repurpose content, and land clients",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      author: "Just Some MO PhD",
      title: "From \"I Have To\" to \"I Get To\": How One Word Change Rewires Your Brain",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      author: "Lim Nguyen",
      title: "Golden Design Lessons from Tokyo Metro",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=100&h=100&fit=crop"
    }
  ];

  const recommendedTopics = [
    "Data Science", "React", "Coding", "Mental Health", "UX", "Python", "Productivity"
  ];

  const whoToFollow = [
    {
      id: 1,
      name: "Dr. Derek Austin 🥳",
      description: "AI Creative Engineer | Machine Learning Full Stack | The AI Workforce Series",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "iTEXT",
      description: "iTEXT is a platform for IT developers and software developers",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Oliver Shaw",
      description: "Primarily publication in the Java programming.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <SidebarContainer>
      <Section>
        <SectionTitle>Staff Picks</SectionTitle>
        <StaffPicksList>
          {staffPicks.map(pick => (
            <StaffPickItem key={pick.id}>
              <StaffPickContent>
                <StaffPickAuthor>
                  <StaffPickAuthorAvatar />
                  <span>{pick.author}</span>
                </StaffPickAuthor>
                <StaffPickTitle>{pick.title}</StaffPickTitle>
              </StaffPickContent>
              {pick.image && <StaffPickImage src={pick.image} />}
            </StaffPickItem>
          ))}
        </StaffPicksList>
      </Section>

      <Section>
        <SectionTitle>Recommended topics</SectionTitle>
        <TopicsContainer>
          {recommendedTopics.map(topic => (
            <TopicTag key={topic}>{topic}</TopicTag>
          ))}
        </TopicsContainer>
        <SeeMoreLink>See more topics</SeeMoreLink>
      </Section>

      <Section>
        <SectionTitle>Who to follow</SectionTitle>
        <WhoToFollowList>
          {whoToFollow.map(author => (
            <AuthorCard key={author.id}>
              <AuthorInfo>
                <AuthorAvatar />
                <AuthorDetails>
                  <AuthorName>{author.name}</AuthorName>
                  <AuthorDescription>{author.description}</AuthorDescription>
                </AuthorDetails>
              </AuthorInfo>
              <FollowButton>Follow</FollowButton>
            </AuthorCard>
          ))}
        </WhoToFollowList>
        <SeeMoreSuggestions>See more suggestions</SeeMoreSuggestions>
      </Section>

      <ReadingListSection>
        <SectionTitle>Reading list</SectionTitle>
        <ReadingListContent>
          Click the
          <BookmarkIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="#6b6b6b" d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"/>
          </BookmarkIcon>
          on any story to easily add it to your reading list or a custom list that you can share.
        </ReadingListContent>
        
        <FooterLinks>
          <FooterLink>Help</FooterLink>
          <FooterLink>Status</FooterLink>
          <FooterLink>About</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Terms</FooterLink>
          <FooterLink>Text to speech</FooterLink>
        </FooterLinks>
      </ReadingListSection>
    </SidebarContainer>
  );
};

export default Sidebar;