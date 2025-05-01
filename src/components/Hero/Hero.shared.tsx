
export const sectionId = '2IESwjrb2JUTQG0S8PZ65S';
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
  // const collectionQuery = `
  // query GetPageSectionCollection($sectionId: String, $locale1: String!, $locale2: String!) {
  //   pageSectionCollection(id: $sectionId, locale: $locale) { 
  //     items {
  //       title
  //       description {
  //         json
  //       }
  //     } 
  //   }
  // }
  // `;