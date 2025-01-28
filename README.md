# Eric Njanga website (2024 - 2025)

# Architecture
This is a React app with routing capabilities. There is only one page to visit with multiple routes. 
 
## Main navigation
Clicking on any main navigation links:
- Changes the route
- Scrolls the page down to the appropriate position

## Multi-language
English is the default language, and the parameter "&lang=url"

## Front-end Pipeline
I need to create a react app with the following stack:
- Typescript
- Storybook
- SCSS
- Jest
- React testing library
- Formik and Yup
- React router
- MirageJS

## Directory Structure
Project organized for scalability:

src/
├── components/          # Reusable UI components
├── pages/               # Page components for routing
├── styles/              # SCSS files
├── __tests__/           # Unit tests
├── server/              # MirageJS mock API
├── stories/             # Storybook component stories
├── App.tsx              # Main app component
├── index.tsx            # Entry point