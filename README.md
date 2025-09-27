# Medium Clone - Korna Frontend Engineer Assessment

Hi! I'm Abiola, and this is my take-home assessment for the Korna Frontend Engineer position. I've built a responsive replica of Medium's interface using React and Styled Components.

## About This Project

I had about 2 days to work on this (September 27-29, 2025), and I really enjoyed diving deep into recreating Medium's clean, professional design. The goal was to build something that looks and feels just like the real Medium - pixel-perfect design, smooth responsive behavior, and clean code architecture.

## What I Built

This isn't just a rough approximation - I spent time getting the details right:

- Responsive design that works perfectly on desktop and mobile
- Interactive hamburger menu on mobile that slides in smoothly
- Pixel-perfect spacing, typography, and colors matching Medium exactly
- Hover effects and smooth transitions on interactive elements
- Clean component architecture that's easy to understand and maintain

## Tech Stack

I kept it simple but effective:
- React 18.2.0 for the UI framework
- Styled Components 6.0.7 for CSS-in-JS styling
- Modern JavaScript with clean, readable code

## How It's Organized

```
src/
├── components/
│   ├── Header/          # Top navigation with Medium logo and search
│   ├── Layout/          # Main layout container with responsive grid
│   ├── ArticleCard/     # Individual blog post cards
│   ├── Sidebar/         # Staff picks and recommendations
│   ├── HamburgerMenu/   # Mobile navigation menu
│   └── FeaturedPage/    # Featured tab content
├── data/
│   └── sampleData.js    # Sample blog posts data
└── App.js
```

## Key Features I'm Proud Of

### Desktop Experience
The desktop layout has everything you'd expect from Medium - the clean header with search, the two-column layout with main content and sidebar, and all the little details like proper spacing and typography. I even got the vertical divider line to connect perfectly with the header border.

### Mobile Experience  
The mobile version transforms beautifully. The hamburger menu slides in from the left with all the navigation options, and the article layout stacks vertically with optimized spacing. I spent extra time making sure the touch targets are properly sized and the animations feel smooth.

### Component Design
Each component is self-contained and reusable. The ArticleCard component, for example, handles both desktop and mobile layouts internally, switching between different arrangements based on screen size.

## Running the Project

It's straightforward to get started:

```bash
# Clone and install
git clone https://github.com/Azeez-Abiola/Korna-Medium-Assessment.git
cd Korna-Medium-Assessment
npm install

# Start development server
npm start
```

Then open http://localhost:3000 and you'll see the Medium clone in action.

## Design Decisions

I made some specific choices that I think worked well:

**Styled Components**: I love how it keeps styles close to components and makes responsive design really clean. Each component has its styles right there, making it easy to understand and maintain.

**Mobile-First Responsive**: I built the mobile experience first, then enhanced it for desktop. This approach usually results in better performance and cleaner code.

**Component Architecture**: I broke things down logically - Header, Layout, ArticleCard, Sidebar, etc. Each component has a clear responsibility and can be easily modified or reused.

**Attention to Detail**: I spent time on the little things - making sure the vertical line connects properly with the header, getting the hamburger menu animation just right, and matching the exact colors and spacing from Medium.

## Responsive Breakpoints

The design adapts at these key points:
- Mobile: Under 768px (single column, hamburger menu)
- Desktop: Over 1080px (two-column layout with sidebar)
- Everything in between gracefully adapts

## What I Learned

This project was a great exercise in paying attention to detail and building responsive interfaces. I really enjoyed the challenge of recreating such a polished, professional interface and making sure it works smoothly across different screen sizes.

The hamburger menu was particularly fun to implement - getting the slide animation, backdrop, and menu structure just right took some iteration but I'm happy with how smooth it feels.

## Future Improvements

If I had more time, I'd love to add:
- Real API integration for dynamic content
- User authentication and profiles
- Search functionality that actually works
- Infinite scrolling for articles
- Dark mode (because who doesn't love dark mode?)

But for this assessment, I focused on nailing the UI/UX and code quality first.

---

Thanks for taking the time to review my work! I'm excited about the possibility of joining the Korna team.

- Abiola