
import { /* useCallback, */ useEffect, useState } from "react";
// import { HostContext } from "../utils/contexts";
// import { useParams } from "react-router-dom";
import { PageSectionProps, ExpertiseSpecProps, ProjectProps, NavOptionProps } from "../models";
import { logErrorMessage } from "../utils/functions";




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
  }, []);
  return pageSection;
};

// Returns a database record of type "ExpertiseSpecProps[]"
export const useExpertises = (parentId: string): ExpertiseSpecProps[] | null => {
  const [expertiseSpecs, setExpertisePanel] = useState(null); 
  
  useEffect(() => {
    fetchData('expertiseSpecs', setExpertisePanel, `/api/expertiseSpecsByParent/${parentId}`);
  }, [parentId]);
  return expertiseSpecs;
};

// Returns a database record of type "ExpertiseSpecProps[]"
export const useProjects = (): ProjectProps[] | null => {
  const [projects, setExpertisePanel] = useState(null); 
  
  useEffect(() => {
    fetchData('projects', setExpertisePanel, `/api/projects`);
  }, []);
  return projects;
};

// Returns a database record of type "ExpertiseSpecProps[]"
export const useNavOptions = (): NavOptionProps[] | null => {
  const [navOptions, setNavOptions] = useState(null); 
  
  useEffect(() => {
    fetchData('navOptions', setNavOptions, `/api/navOptions`);
  }, []);
  return navOptions;
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



 