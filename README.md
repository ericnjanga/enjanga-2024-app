# Eric Njanga website (2024 - 2025)

# Architecture
This is a React app with routing capabilities. There is only one page to visit with multiple routes. 
 
## Main navigation
Clicking on any main navigation links:
- Changes the route
- Scrolls the page down to the appropriate position

## Lazy loading components
- Created useInView() custom hook, but haven't implemented it (too buggy).

## Multi-language
English is the default language, and the parameter "&lang=url"

## Front-end Pipeline
I need to create a react app with the following stack:
- Typescript
- SCSS
- Jest
- React testing library
- Formik and Yup
- React router
- MirageJS

## Data fetching
- Axios: 
  * Built-in JSON parsing — no need for .json() 
  * Easier error handling (try/catch) 
  * Cleaner syntax for headers and config
- React Query:
  * 🚀 Data caching – avoids unnecessary re-fetching. 
  * 🔄 Automatic updates – refetches on focus or reconnect. 
  * 🧪 Built-in loading & error states – simplifies UI logic. 
  * 🎯 Background refetching – keeps data fresh without blocking UI. 
  * 💾 Pagination & infinite scroll – handled out of the box. 
  * 🔁 Deduplication – prevents multiple requests for the same data. 
  * 💡 Declarative & scalable – perfect for growing apps.

## Directory Structure
Project organized for scalability:

src/
├── components/          # Reusable UI components
├── pages/               # Page components for routing
├── styles/              # SCSS files
├── __tests__/           # Unit tests
├── server/              # MirageJS mock API
├── App.tsx              # Main app component
├── index.tsx            # Entry point