import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.article`
  display: flex;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
  max-width: 680px; /* Reduce width of article cards */
  width: 100%;

  @media (max-width: 768px) {
    gap: 12px;
    padding: 16px 0;
    max-width: none; /* Remove max-width on mobile for full width */
    flex-direction: column; /* Stack content vertically on mobile */
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  min-width: 0;
  
  @media (max-width: 768px) {
    display: none; /* Hide desktop layout on mobile */
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  color: #6b6b6b;
`;

const AuthorAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url(${props => props.authorImage || 'https://images.unsplash.com/photo-1494790108755-2616b52d5ddd?w=50&h=50&fit=crop&crop=face'});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

const AuthorName = styled.span`
  color: #242424;
  font-weight: 500;
`;

const PublicationInfo = styled.span`
  &:before {
    content: "in ";
  }
`;

const ArticleTitle = styled.h2`
  font-size: ${props => props.featured ? '22px' : '16px'};
  font-weight: 700;
  line-height: 1.25;
  color: #242424;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: ${props => props.featured ? '20px' : '16px'};
  }
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #6b6b6b;
  line-height: 1.4;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    display: ${props => props.hideOnMobile ? 'none' : '-webkit-box'};
  }
`;

const ArticleStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: #6b6b6b;
`;

const StatsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: color 0.2s ease;
  font-size: 13px;

  &:hover {
    color: #242424;
  }
`;

const StarIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #FFC017;
  flex-shrink: 0;
`;

const ClapIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  
  path {
    fill: #6b6b6b;
    transition: fill 0.2s ease;
  }
  
  &:hover path {
    fill: #1a8917;
  }
`;

const BookmarkIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  
  path {
    fill: #6b6b6b;
    transition: fill 0.2s ease;
  }
  
  &:hover path {
    fill: #1a8917;
  }
`;

const ResponseIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  
  path {
    fill: #6b6b6b;
    transition: fill 0.2s ease;
  }
  
  &:hover path {
    fill: #1a8917;
  }
`;

const ClapCount = styled.span`
  font-weight: 600;
  color: #242424;
`;

const StatsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    display: none; /* Hide desktop action buttons on mobile */
  }
`;

const MobileContentRow = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
`;

const MobileTextContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const MobileImageContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const MobileActionButtons = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const MobileStats = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 13px;
    color: #6b6b6b;
    margin-top: 4px; /* Reduced from 8px */
    padding: 4px 0; /* Reduced from 8px 0 */
  }
`;

const MobileBottomRow = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px; /* Reduced from 8px */
    padding: 4px 0; /* Reduced from 8px 0 */
  }
`;

const BookmarkButton = styled.button`
  background: none;
  border: none;
  color: #6b6b6b;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #1a8917;
    background-color: #f2f2f2;
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6b6b6b;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #1a8917;
    background-color: #f2f2f2;
  }

  svg {
    width: 20px;
    height: 20px;
  }
  
  /* For stroke-based icons (circle with dash) */
  svg[data-type="stroke"] path {
    stroke: currentColor;
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  /* For fill-based icons (three dots) */
  svg[data-type="fill"] path {
    fill: currentColor;
    stroke: none;
  }
`;

const ImageSection = styled.div`
  flex-shrink: 0;
  width: ${props => props.featured ? '160px' : '90px'}; /* Reduced sizes */
  height: ${props => props.featured ? '110px' : '90px'}; /* Reduced sizes */
  margin-left: 16px; /* Move images to the right */

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-left: 0; /* Remove margin on mobile */
    
    &.desktop-image {
      display: none; /* Hide desktop image section on mobile */
    }
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  background-image: ${props => props.src ? `url(${props.src})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const ArticleCard = ({ 
  article, 
  featured = false, 
  hideDescriptionOnMobile = false 
}) => {
  const {
    author,
    authorImage,
    publication,
    title,
    description,
    image,
    claps,
    responses,
    publishedDate
  } = article;

  return (
    <ArticleContainer>
      {/* Desktop Layout */}
      <ContentSection>
        <AuthorInfo>
          <AuthorAvatar authorImage={authorImage} />
          <AuthorName>{author}</AuthorName>
          {publication && (
            <PublicationInfo>{publication}</PublicationInfo>
          )}
        </AuthorInfo>
        
        <ArticleTitle featured={featured}>
          {title}
        </ArticleTitle>
        
        <ArticleDescription hideOnMobile={hideDescriptionOnMobile}>
          {description}
        </ArticleDescription>
        
        <ArticleStats>
          <StatsLeft>
            <StarIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64">
              <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"/>
            </StarIcon>
            <span>{publishedDate}</span>
            <StatItem>
              <ClapIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-labelledby="clap-filled-static-desc" viewBox="0 0 16 16">
                <desc id="clap-filled-static-desc">A clap icon</desc>
                <path fill="#6B6B6B" fill-rule="evenodd" d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895" clip-rule="evenodd"/>
              </ClapIcon>
              <ClapCount>{claps}</ClapCount>
            </StatItem>
            <StatItem>
              <ResponseIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path fill="#6B6B6B" d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"/>
              </ResponseIcon>
              <span>{responses}</span>
            </StatItem>
          </StatsLeft>
          
          <StatsRight>
            <ActionButton>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-type="stroke">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"/>
              </svg>
            </ActionButton>
            <BookmarkButton>
              <BookmarkIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="#000" d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"/>
              </BookmarkIcon>
            </BookmarkButton>
            <ActionButton>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-type="fill">
                <path d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"/>
              </svg>
            </ActionButton>
          </StatsRight>
        </ArticleStats>
      </ContentSection>
      
      {image && (
        <ImageSection featured={featured} className="desktop-image">
          <ArticleImage src={image} />
        </ImageSection>
      )}

      {/* Mobile Layout - Content Row */}
      <MobileContentRow>
        <MobileTextContent>
          <AuthorInfo>
            <AuthorAvatar authorImage={authorImage} />
            <AuthorName>{author}</AuthorName>
          </AuthorInfo>
          
          <ArticleTitle featured={featured}>
            {title}
          </ArticleTitle>
          
          <ArticleDescription hideOnMobile={hideDescriptionOnMobile}>
            {description}
          </ArticleDescription>
        </MobileTextContent>

        {image && (
          <MobileImageContainer>
            <ImageSection featured={featured}>
              <ArticleImage src={image} />
            </ImageSection>
          </MobileImageContainer>
        )}
      </MobileContentRow>

      {/* Mobile Bottom Row - Stats and Action Buttons */}
      <MobileBottomRow>
        <MobileStats>
          <StarIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64">
            <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"/>
          </StarIcon>
          <StatItem>
            <ClapIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-labelledby="clap-filled-static-desc" viewBox="0 0 16 16">
              <desc id="clap-filled-static-desc">A clap icon</desc>
              <path fill="#6B6B6B" fillRule="evenodd" d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895" clipRule="evenodd"/>
            </ClapIcon>
            <ClapCount>{claps}</ClapCount>
          </StatItem>
          <StatItem>
            <ResponseIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path fill="#6B6B6B" d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"/>
            </ResponseIcon>
            <span>{responses}</span>
          </StatItem>
        </MobileStats>

        <MobileActionButtons>
          <ActionButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-type="stroke">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"/>
            </svg>
          </ActionButton>
          <ActionButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-type="fill">
              <path d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"/>
            </svg>
          </ActionButton>
        </MobileActionButtons>
      </MobileBottomRow>
    </ArticleContainer>
  );
};

export default ArticleCard;