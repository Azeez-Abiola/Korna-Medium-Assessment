import React from 'react';
import styled from 'styled-components';

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-300px'};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  z-index: 1001;
  transition: left 0.3s ease-in-out;
  overflow-y: auto;
  border-right: 1px solid #e6e6e6;
`;

const MenuHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url('./src/assets/images/abiola-profile.jpg');
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 500;
  color: #242424;
  font-size: 16px;
  margin-bottom: 2px;
`;

const UserHandle = styled.div`
  color: #6b6b6b;
  font-size: 14px;
`;

const MenuContent = styled.div`
  padding: 8px 0;
`;

const MenuSection = styled.div`
  margin-bottom: 8px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: #242424;
  font-size: 16px;

  &:hover {
    background-color: #f9f9f9;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #6b6b6b;
  }
`;

const MenuDivider = styled.div`
  height: 1px;
  background-color: #e6e6e6;
  margin: 8px 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #f2f2f2;
  }
  
  svg {
    width: 24px;
    height: 24px;
    fill: #6b6b6b;
  }
`;

const HamburgerMenu = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <MenuOverlay isOpen={isOpen} onClick={handleOverlayClick} />
      <MenuContainer isOpen={isOpen}>
        <MenuHeader>
          <ProfileAvatar />
          <UserInfo>
            <UserName>Abiola</UserName>
            <UserHandle>@abiola</UserHandle>
          </UserInfo>
          <CloseButton onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M6.343 6.343a.5.5 0 0 1 .707 0L12 11.293l4.95-4.95a.5.5 0 0 1 .707.707L12.707 12l4.95 4.95a.5.5 0 0 1-.707.707L12 12.707l-4.95 4.95a.5.5 0 0 1-.707-.707L11.293 12 6.343 6.657a.5.5 0 0 1 0-.707z"/>
            </svg>
          </CloseButton>
        </MenuHeader>
        
        <MenuContent>
          <MenuSection>
            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4.5 7.653a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8.694a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm6-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11.694a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5.694a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
              </svg>
              Home
            </MenuItem>
            
            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/>
                <path fill="currentColor" d="M8 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"/>
              </svg>
              Library
            </MenuItem>

            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 4c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4m0 1c2.4 0 6.67 1.17 6.93 2H5.07c.26-.83 4.53-2 6.93-2"/>
              </svg>
              Profile
            </MenuItem>

            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"/>
                <path fill="currentColor" d="M7 7h10v1H7zm0 3h10v1H7zm0 3h7v1H7z"/>
              </svg>
              Stories
            </MenuItem>

            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 3h18v18H3zm1 1v16h16V4z"/>
                <path fill="currentColor" d="M6 7h4v4H6zm1 1v2h2V8z"/>
                <path fill="currentColor" d="M6 13h12v1H6zm0 2h12v1H6zm6-8h6v1h-6zm0 2h6v1h-6z"/>
              </svg>
              Stats
            </MenuItem>
          </MenuSection>

          <MenuDivider />

          <MenuSection>
            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              Following
            </MenuItem>

            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"></path>
                <path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path>
              </svg>
              Write Story
            </MenuItem>

            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"/>
                <path fill="currentColor" d="M12 6.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h4.5V7a.5.5 0 0 1 .5-.5"/>
              </svg>
              Membership Status
            </MenuItem>

            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 1v14h16V5zm2 2h12v1H6zm0 3h12v1H6zm0 3h8v1H6z"/>
              </svg>
              Newsletters
            </MenuItem>
          </MenuSection>

          <MenuDivider />

          <MenuSection>
            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"/>
                <path fill="currentColor" d="M12 7a.5.5 0 0 1 .5.5V11h3.5a.5.5 0 0 1 0 1h-3.5v3.5a.5.5 0 0 1-1 0V12H8a.5.5 0 0 1 0-1h3.5V7.5A.5.5 0 0 1 12 7"/>
              </svg>
              Best Practices
            </MenuItem>

            <MenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"/>
                <path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2z"/>
              </svg>
              Our suggestions
            </MenuItem>
          </MenuSection>
        </MenuContent>
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu;