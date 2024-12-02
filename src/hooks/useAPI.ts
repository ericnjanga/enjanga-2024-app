
import { useCallback, useEffect, useState } from "react";
// import { HostContext } from "../utils/contexts";
// import { useParams } from "react-router-dom";
import { HeroProps } from "../models";
import { logErrorMessage } from "../utils/functions";




 
/*

 * The custom hook will return an object of type HeroProps
*/
export const useHero = (): HeroProps | null => {
  const [hero, setHero] = useState(null); 
  const query = `/api/hero/1`;

  const fetchData = useCallback(async() => {
    console.log('**** hero>>>', hero);
    try {
      const response = await fetch(query);

      // Handle HTTP Errors (500, 400, ...)
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      }

      // Parse data to JSON
      const data = await response.json();

      // Handle invalid data structure
      if (!data && !data.hero) {
        throw new Error('Invalid data structure');
      }

      // Save data
      setHero(data.hero);
    }
    catch(error) {
      // Handle all errors
      logErrorMessage(error); 
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return hero;
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



 