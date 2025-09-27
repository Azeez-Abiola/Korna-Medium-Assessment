// Component Breakdown Analysis
// Based on the provided Medium designs

/*
HEADER COMPONENTS:
1. Header - Main container
   - Logo (Medium text)
   - Search Bar (with search icon)
   - Navigation (For you, Featured)
   - Actions (Write button, notifications, profile menu)

MAIN CONTENT COMPONENTS:
2. ArticleCard - Individual article items
   - AuthorInfo (avatar, name, "in" tag, publication)
   - ArticleContent (title, description)
   - ArticleImage (featured image)
   - ArticleStats (claps, responses, reading time, save button)
   - TrendingIndicator (for trending articles)

3. MainContent - Container for articles
   - ArticleList (collection of ArticleCard components)

SIDEBAR COMPONENTS:
4. Sidebar - Right sidebar container
   - StaffPicks section
   - RecommendedTopics section
   - WhoToFollow section

5. StaffPicks
   - Section title
   - Featured articles list

6. RecommendedTopics
   - Section title
   - Topic tags (clickable buttons)

7. WhoToFollow
   - Section title
   - AuthorCard components with follow buttons

8. AuthorCard (used in sidebar)
   - Avatar
   - Name and description
   - Follow button

LAYOUT COMPONENTS:
9. Layout - Main responsive container
   - Desktop: Two-column (main content + sidebar)
   - Mobile: Single column

10. Navigation - Tab navigation
    - "For you" tab (active)
    - "Featured" tab

RESPONSIVE BREAKPOINTS:
- Desktop: > 768px (two-column layout)
- Mobile: <= 768px (single column, simplified header)

KEY STYLING NOTES:
- Font: Similar to Medium's typography
- Colors: Black text, gray metadata, green accent for actions
- Spacing: Consistent padding and margins
- Hover states: Subtle animations on interactive elements
*/