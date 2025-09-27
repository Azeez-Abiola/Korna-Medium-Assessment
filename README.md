# Medium Clone - Korna Frontend Engineer Assessment

A responsive, high-fidelity replica of Medium's interface built with React and Styled Components.

## 🎯 Overview

This project is a take-home coding assessment for the Korna Frontend Engineer position. The implementation focuses on building a pixel-perfect replica of Medium's user interface with emphasis on design accuracy, responsive design, and clean code architecture.

**Assessment Timeline**: September 27-29, 2025  
**Candidate**: Abiola  
**Submission Deadline**: Monday, September 29, 2025

## 🚀 Features

- **Responsive Design**: Seamlessly adapts between desktop and mobile layouts
- **Pixel-Perfect Implementation**: Closely matches the provided design references
- **Component Architecture**: Well-structured, reusable React components
- **Modern Styling**: Styled Components with hover effects and smooth transitions
- **Performance Optimized**: Clean, maintainable code structure

## 🛠️ Technologies Used

- **React** (18.2.0) - UI Framework
- **Styled Components** (6.0.7) - CSS-in-JS styling solution
- **React Scripts** (5.0.1) - Build tooling

## 📱 Responsive Breakpoints

- **Desktop**: > 1080px (Two-column layout with sidebar)
- **Tablet**: 768px - 1080px (Single column, simplified layout)
- **Mobile**: < 768px (Mobile-optimized layout)

## 🏗️ Component Structure

```
src/
├── components/
│   ├── Header/          # Navigation header with search and user actions
│   ├── Layout/          # Main responsive layout container
│   ├── ArticleCard/     # Individual article display component
│   └── Sidebar/         # Staff picks, topics, and who to follow
├── data/
│   └── sampleData.js    # Sample article data matching designs
└── App.js               # Main application component
```

## 🎨 Key Components

### Header Component
- Medium logo and branding
- Search functionality (UI only)
- Navigation tabs (For you, Featured)
- User actions (Write, notifications, profile)
- Responsive mobile layout

### Article Card Component
- Author information and avatars
- Article titles and descriptions
- Engagement stats (claps, responses, reading time)
- Featured images with proper aspect ratios
- Trending indicators
- Hover effects and interactions

### Sidebar Component
- Staff Picks section
- Recommended Topics with clickable tags
- Who to Follow suggestions
- Reading list information
- Footer links

### Layout Component
- Responsive grid system
- Desktop: Main content + Sidebar
- Mobile: Single column layout
- Proper spacing and typography

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd medium-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### Building for Production

```bash
npm run build
```

## 📋 Design Implementation Notes

### Typography
- System font stack for optimal cross-platform rendering
- Consistent font weights and sizes matching Medium's design
- Proper line heights and text hierarchy

### Color Scheme
- Primary text: `#242424`
- Secondary text: `#6b6b6b`
- Accent color: `#1a8917` (Medium green)
- Border color: `#f2f2f2`
- Background: `#ffffff`

### Responsive Behavior
- **Desktop**: Two-column layout with sticky sidebar
- **Mobile**: Single column, simplified navigation, compact cards
- **Images**: Responsive sizing with proper aspect ratios
- **Typography**: Scaled font sizes for better mobile readability

### Interactive Elements
- Smooth hover transitions on all clickable elements
- Visual feedback on buttons and links
- Proper cursor states
- Touch-friendly mobile interactions

## 🔧 Development Decisions

1. **Styled Components**: Chosen for its CSS-in-JS approach, allowing component-scoped styling and easy responsive design implementation.

2. **Component Architecture**: Each major UI section is broken into reusable components with clear separation of concerns.

3. **Responsive Strategy**: Mobile-first approach with progressive enhancement for larger screens.

4. **Data Structure**: Sample data structure mirrors real Medium articles for realistic testing.

5. **Performance**: Minimal dependencies, optimized images, and efficient rendering patterns.

## 📦 Deployment

The application is configured for easy deployment to services like:
- **Vercel**: `npm run build` → Connect GitHub repository
- **Netlify**: `npm run build` → Deploy build folder
- **GitHub Pages**: Using `gh-pages` package

## 🎯 Assessment Criteria Coverage

✅ **Design Fidelity**: Pixel-perfect match to provided designs
✅ **Code Craftsmanship**: Clean, readable, and maintainable code
✅ **Component Architecture**: Logical, reusable component structure
✅ **Responsiveness**: Smooth adaptation between desktop and mobile

## 📝 Future Enhancements

While this is a visual-only implementation, potential additions could include:
- Real API integration
- User authentication
- Infinite scrolling
- Content management
- Search functionality
- Dark mode support

---

**Built with ❤️ for Korna Frontend Engineer Assessment**