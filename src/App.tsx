import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CarrouselExpertise from "./components/Expertise/Expertise";
import CarrouselPortfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Modal from "./components/ModalModule";
import { ModalProvider } from "./components/ModalModule";
import Navigation from "./components/Navigation/Navigation";
import { LanguageProvider } from "./components/LanguageModule";

import { useEffect, useState } from "react";
import axios from 'axios'; 

// Ensuring that Bootstrap's JavaScript is globally available across all components.
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// We'll use slick-carousel in two compoment, so we might as well import it globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useContentful } from "./hooks/useContentful";

const Home = () => <p>*** Routes setup ***</p>;

export function PagesssSections({ sectionId = '2IESwjrb2JUTQG0S8PZ65S', locale = 'fr'}) {

  const collectionQuery = `
  query GetPageSectionCollection($sectionId: String, $locale: String!) {
    pageSectionCollection(id: $sectionId, locale: $locale) { 
      items {
        title
        description {
          json
        }
      } 
    }
  }
  `;

  const query = `
  query getPageSectionEntryQuery($sectionId: String!, $locale: String!) {
    pageSection(id: $sectionId, locale: $locale) {  
      title
      description {
        json
      } 
    }
  }
`;

  const { data, isLoading, error } = useContentful({
    query,
    variables: { sectionId, locale },
    queryKey: `pageSection-${sectionId}-${locale}`
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog posts.</p>;

  console.log('********** title = ', data.pageSection.title);
  console.log('********** description = ', documentToReactComponents(data.pageSection.description.json));
 
  return (
    <div>
      <h3>{data.pageSection.title}</h3>
      <div>{documentToReactComponents(data.pageSection.description.json)}</div>
    </div>
  );

}

const queryClient = new QueryClient();

function App() {




  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ModalProvider>
        <Router>
          <div className="App">

            <br /><br /><br />
            <PagesssSections />
            <br /><br /><br />
            <Modal />
            <Navigation />


            {/* 


            <div id="welcome">
              <Hero />
            </div>

            <div id="scope-of-expertise">
              <CarrouselExpertise />
            </div>

            <div id="some-work">
              <CarrouselPortfolio />
            </div>

            <div id="about-me">
              <About />
            </div>

            <Footer /> */}

              {/* <Routes>
                <Route path="/" element={<Home />} />
                
                  <Route id="about" path="/about" element={<About />} />
              
              </Routes> */}
          </div>
          </Router>
        </ModalProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
