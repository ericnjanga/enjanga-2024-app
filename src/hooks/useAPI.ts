
import { useCallback, useEffect, useState } from "react";
// import { HostContext } from "../utils/contexts";
// import { useParams } from "react-router-dom";
import { PageSectionProps, InformationCard1Props, ProjectProps, NavOptionProps } from "../models";
import { logErrorMessage } from "../utils/functions";
import { mockContactForm } from "../models/mockupData";
import { getCurrentLanguage } from "../utils/functions";


/**
 * TODO
 * THESE FUNCTIONS NEED TO BE OPTIMIZED FOR:
 * - RENDERING PERFORMANCE
 * - CODE EFFICIENCY
 */

export const fetchData = async(dataType: string, dataId: string | null) => {
  let queryString = '';
  let stateProps = ''; // Property name of the data we expect from the API response

  switch(dataType) {
    case 'expertiseSpecs':
      queryString = `/api/expertiseSpecs/${dataId}`;
      stateProps = 'expertiseSpecs';
    break;

    case 'expertiseSpecsParent':
      queryString = `/api/expertiseSpecsByParent/${dataId}`;
      stateProps = 'expertiseSpecs';
    break;  

    case 'projects':
      queryString = `/api/projects/${dataId}`;
      stateProps = 'projects';
    break;

    case 'all projects':
      queryString = `/api/projects`;
      stateProps = 'projects';
    break;

    case 'pageSections':
      queryString = `/api/pageSections/${dataId}`;
      stateProps = 'pageSection';
    break;

    case 'navOptions':
      queryString = `/api/navOptions`;
      stateProps = 'navOptions';
    break; 
  }

  try {
    // Issue the API request and wait for the response ...
    const response = await fetch(queryString);

    // console.log('>>>>>(244) data fetch', dataId); // [Mode Troubleshooting] ...

    // Handle http errors ...
    if (!response.ok) {
      throw new Error(`HTTP Error. Status: ${response.status}`);
    }

    // Once the response is available, parse it to json ...
    const data = await response.json();

    // [Mode Troubleshooting] ...
    if (dataType === 'projects') { 
      console.log('.....1***', data); 
      console.log('.....2***', stateProps); 
      console.log('.....3***', !data); 
      console.log('.....4***', data[stateProps]); 
    }
 

    // Handle data structure errors ...
    if (!data || !data[stateProps]) {
      throw new Error("The expected data structure was not received. Please try another query.");
    }

    // Place the result inside the returned promise ...
    return data[stateProps];
  } 
  
  // Place the error object inside the returned promise ...
  catch (error: unknown) { 
    const errorMsg = { title:'Oups, something went wrong!', description: 'An unknown error occurred.' };
    if (error instanceof Error) {
      errorMsg.description = error.message; 
    } 
    logErrorMessage(error); // Display the errpr in the console anyway
    return errorMsg;
  }
};


 
// Returns a database record of type "PageSectionProps"
export const usePageSection = (id: string): PageSectionProps | null => {
  const [pageSection, setPageSection] = useState(null); 

  useEffect(() => {  
    fetchData('pageSections', id).then(response => setPageSection(response));
  }, [id]);
  return pageSection;
};

// Returns a database record of type "InformationCard1Props[]"
export const useExpertises = (parentId: string): InformationCard1Props[] | null => {
  const [InformationCard1s, setPanelFrame] = useState(null); 
  
  useEffect(() => { 
    fetchData('expertiseSpecsParent', parentId).then((response) => { 
      setPanelFrame(response);
    }); 
  }, [parentId]);
  return InformationCard1s;
};

// Returns a database record of type "InformationCard1Props"
export const useExpertise = (id: string): InformationCard1Props | null => {
  const [InformationCard1s, setPanelFrame] = useState(null); 
  
  useEffect(() => { 
    fetchData('expertiseSpecs', id).then((response) => setPanelFrame(response)); 
  }, [id]);
  return InformationCard1s;
};

// Returns a database record of type "InformationCard1Props[]"
export const useProjects = (): ProjectProps[] | null => {
  const [projects, setPanelFrame] = useState(null); 
  
  useEffect(() => { 
    fetchData('all projects', null).then((response) => setPanelFrame(response)); 
  }, []);
  return projects;
};

// Returns a database record of type "InformationCard1Props[]"
export const useNavOptions = (): NavOptionProps[] | [] => {
  const [navOptions, setNavOptions] = useState<NavOptionProps[]>([]); 
  
  useEffect(() => { 
    fetchData('navOptions', null).then((response) => setNavOptions(response)); 
  }, []);
  return navOptions;
};



/**
 * - Responsible for fetching data from the "/api/definition"
 * - MEMOIZATION: Using useCallback() to ensure fetchDefinition() is not re-created on each render
 * @returns Promise containing either the successful data or and error object
 */
export const useDefinition = () => {
  const fetchDefinition = useCallback(async (id: string) => {
    try {
      // Issue the API request and wait for the response ...
      const response = await fetch(`/api/definition/${id}`);

      // console.log('>>>>>(244) data fetch', id); // [Mode Troubleshooting] ...

      // Handle http errors ...
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      }

      // Once the response is available, parse it to json ...
      const data = await response.json();

      // Handle data structure errors ...
      if (!data || !data.definition) {
        throw new Error("The expected data structure was not received. Please try another query.");
      }

      // Place the result inside the returned promise ...
      return data.definition;
    } 
    
    // Place the error object inside the returned promise ...
    catch (error: unknown) { 
      const errorMsg = { title:'Oups, something went wrong!', description: 'An unknown error occurred.' };
      if (error instanceof Error) {
        errorMsg.description = error.message; 
      } 
      logErrorMessage(error); // Display the errpr in the console anyway
      return errorMsg;
    }
  }, []);

  return { fetchDefinition };
};


export const useThirdPartyFormSubmission = () => {
  const formSubmit = useCallback(async(values: typeof mockContactForm.initValues) => {
    let message = { ...mockContactForm.submissionDefault };
    const currentLang = getCurrentLanguage();
   
    try {
      const response = await fetch(mockContactForm.submissionEndpoint, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        message = { ...mockContactForm.submissionSuccess };
      } else {
        message = { ...mockContactForm.submissionFailure };
      }
    } catch (error) {
      message = { ...mockContactForm.submissionError };
      message.description[currentLang] = `${message.description} ${error}`; 
    }
  
    return message;
  }, []);

  return { formSubmit };
};





/*
export const useCardDetails = (): HeroProps | null => {
  const params = useParams();
  const [car, setCar] = useState<HeroProps | null>(null);
  const { id } = params;

  const fetchDetails = useCallback(async() => {
    try {
      const response = await fetch(`/api/hero/${id}`);

      // Check for HTTP Errors
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      }
      // Parse response into JSON
      const data = await response.json();

      // Check for data structure errors
      if (!data || !data.car) {
        throw new Error('Invalid data structure');
      }
      // Save data
      setCar(data.car);
    }
    catch (error) {
      logErrorMessage(error); // Display the errpr in the console anyway
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return car;
};
*/



 