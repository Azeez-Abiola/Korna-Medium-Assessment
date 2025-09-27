import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import FeaturedPage from './components/FeaturedPage';
import Sidebar from './components/Sidebar';
import { sampleArticles } from './data/sampleData';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden; /* Prevent horizontal scrolling */
    max-width: 100vw; /* Ensure content doesn't exceed viewport width */
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #242424;
    background-color: #ffffff;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #c1c1c1 #f1f1f1;
  }

  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 3px;
  }
`;

const ArticlesContainer = styled.div`
  max-width: 100%;
`;

function App() {
  const [activeTab, setActiveTab] = useState('for-you');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === 'featured') {
      return <FeaturedPage />;
    }
    
    return (
      <ArticlesContainer>
        {sampleArticles.map((article, index) => (
          <ArticleCard 
            key={article.id}
            article={article}
            featured={article.featured}
            trending={article.trending}
            hideDescriptionOnMobile={index >= 3} // Hide description for last 2 articles on mobile
          />
        ))}
      </ArticlesContainer>
    );
  };

  return (
    <>
      <GlobalStyle />
      <Layout 
        header={<Header activeTab={activeTab} onTabChange={handleTabChange} />}
        sidebar={<Sidebar />}
      >
        {renderContent()}
      </Layout>
    </>
  );
}

export default App;