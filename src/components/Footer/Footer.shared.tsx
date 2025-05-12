
export const sectionId = 'GkIieHIVVZhhKa2EZHM3D';
export const queryKeyData = `pageSection-${sectionId}`;

// "Fetching a specific section by id" (GraphQL query)
export const queryData = `
  query getPageSectionEntryQuery($sectionId: String!, $locale1: String!, $locale2: String!) {
    en: pageSection(id: $sectionId, locale: $locale1) {  
      title
      description {
        json
      } 
    }
    fr: pageSection(id: $sectionId, locale: $locale2) {  
      title
      description {
        json
      } 
    }
  }
`;