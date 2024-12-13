
import { useCallback, useEffect, useState } from "react";
// import { HostContext } from "../utils/contexts";
// import { useParams } from "react-router-dom";
import { PageSectionProps, InformationCard1Props, ProjectProps, NavOptionProps } from "../models";
import { logErrorMessage } from "../utils/functions";


/**
 * TODO
 * THESE FUNCTIONS NEED TO BE OPTIMIZED FOR:
 * - RENDERING PERFORMANCE
 * - CODE EFFICIENCY
 */

/**
 * Fetch server data, handle errors, and save response using a state provided function
 * @param stateProps It has to match the database record property
 * @param setStateFct 
 * @param queryUrl 
 */
const fetchData = async(
    stateProps: string, 
    setStateFct: React.Dispatch<React.SetStateAction<null>>, 
    queryUrl: string
  ) => {
  try {
    const response = await fetch(queryUrl);

    // Handle HTTP Errors (500, 400, ...)
    if (!response.ok) {
      throw new Error(`HTTP Error. Status: ${response.status}`);
    }

    // Parse data to JSON
    const data = await response.json();

    // Handle invalid data structure
    if (!data && !data[stateProps]) {
      throw new Error('Invalid data structure');
    }

    console.log(`**** data[${stateProps}]>>>`, data[stateProps]);
    // Save data
    setStateFct(data[stateProps]);
  }
  catch(error) {
    // Handle all errors
    logErrorMessage(error); 
  }
};

 
// Returns a database record of type "PageSectionProps"
export const usePageSection = (id: string): PageSectionProps | null => {
  const [pageSection, setPageSection] = useState(null); 

  useEffect(() => {
    fetchData('pageSection', setPageSection, `/api/pageSection/${id}`);
  }, [id]);
  return pageSection;
};

// Returns a database record of type "InformationCard1Props[]"
export const useExpertises = (parentId: string): InformationCard1Props[] | null => {
  const [InformationCard1s, setPanelGrid1] = useState(null); 
  
  useEffect(() => {
    fetchData('expertiseSpecs', setPanelGrid1, `/api/expertiseSpecsByParent/${parentId}`);
  }, [parentId]);
  return InformationCard1s;
};

// Returns a database record of type "InformationCard1Props"
export const useExpertise = (id: string): InformationCard1Props | null => {
  const [InformationCard1s, setPanelGrid1] = useState(null); 
  
  useEffect(() => {
    fetchData('InformationCard1s', setPanelGrid1, `/api/InformationCard1/${id}`);
  }, [id]);
  return InformationCard1s;
};

// Returns a database record of type "InformationCard1Props[]"
export const useProjects = (): ProjectProps[] | null => {
  const [projects, setPanelGrid1] = useState(null); 
  
  useEffect(() => {
    fetchData('projects', setPanelGrid1, `/api/projects`);
  }, []);
  return projects;
};

// Returns a database record of type "InformationCard1Props[]"
export const useNavOptions = (): NavOptionProps[] | null => {
  const [navOptions, setNavOptions] = useState(null); 
  
  useEffect(() => {
    fetchData('navOptions', setNavOptions, `/api/navOptions`);
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

      console.log('>>>>>(244) data fetch', id);

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
      return errorMsg;
    }
  }, []);

  return {
    fetchDefinition,
  };
};


export const fetchAPIData = async(dataType: string, dataId: string) => {
  let queryString = '';
  let stateProps = ''; // Property name of the data we expect from the API response
  // `/api/definition/${dataId}` 

  // ...
  switch(dataType) {
    case 'InformationCard1 item':
      queryString = `/api/expertiseSpec/${dataId}`;
      stateProps = 'expertiseSpec';
    break;

    case 'ProjectThumb item':
      queryString = `/api/projects/${dataId}`;
      stateProps = 'project';
    break;
  }


  

  try {
    // Issue the API request and wait for the response ...
    const response = await fetch(queryString);

    console.log('>>>>>(244) data fetch', dataId);

    // Handle http errors ...
    if (!response.ok) {
      throw new Error(`HTTP Error. Status: ${response.status}`);
    }

    // Once the response is available, parse it to json ...
    const data = await response.json();

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
    return errorMsg;
  }
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
      logErrorMessage(error); 
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return car;
};
*/



 