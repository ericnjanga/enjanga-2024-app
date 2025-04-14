import React from "react";
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

const Home = () => <p>*** Routes setup ***</p>;

export function PagesssSections({ locale = 'fr'}) {

  const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  const ENVIRONMENT = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT;
  const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
  const GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

  const [sections, setSections] = useState({});

  useEffect(() => {

        const query = `
        query GetPageSectionCollection($locale: String!) {
          pageSectionCollection(locale: $locale) { 
              items {
                title
              } 
          }
        }
      `;

    async function fetchContentfulData(locale = 'en-CA') {
      try {
        const response = await axios.post(
          GRAPHQL_ENDPOINT,
          {
            query,
            variables: { locale },
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );

        console.log('.........data =====', response.data);
    
        return response.data.data.blogPostCollection.items;
      } catch (error) {
        // console.error('Contentful GraphQL error:', error.response?.data || error.message);
        return [];
      }
    }

    fetchContentfulData();


    // const fetchData = async () => {
    //   const query = `
    //     query GetPageSectionCollection($locale: String!) {
    //       pageSectionCollection(locale: $locale) { 
    //           items {
    //             title
    //           } 
    //       }
    //     }
    //   `;


    //   const response = await fetch(GRAPHQL_ENDPOINT, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${ACCESS_TOKEN}`, // this is the Content Delivery API key
    //     },
    //     body: JSON.stringify({
    //       query,
    //       variables: { locale },
    //     }),
    //   });

    //   const { data } = await response.json();
    //   console.log('.........data =====', data);
    //   // setPosts(data.)
    // };

    // fetchData();
  }, [locale]);

  return (<div>????</div>);

}

function App() {




  return (
    <LanguageProvider>
      <ModalProvider>
      <Router>
        <div className="App">

          <br /><br /><br />
          <PagesssSections />
          <br /><br /><br />
          {/* <Modal />

          <Navigation />

          <div id="welcome">
            <Hero />
          </div>

          <div id="scope-of-expertise">
            <CarrouselExpertise />
          </div>

          <div id="some-work">
            <CarrouselPortfolio />
          </div>

          <div id="about">
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
  );
}

export default App;
