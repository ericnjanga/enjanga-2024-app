// "Fetching a specific section by id" (GraphQL query)
export const queryData = {
  pageSection: `
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
  `,
  projectsCollection: `
    query getProjectCollection($locale1: String!, $locale2: String!) {
      en: projectCollection(locale: $locale1) { 
        items {
          title
          blurb
          description {
            json
          }
        } 
      }
      fr: projectCollection(locale: $locale2) { 
        items {
          title
          blurb
          description {
            json
          }
        } 
      }
    }
  `,
};




// projectsCollection: `
// query getProjectCollection($locale1: String!, $locale2: String!) {
//   en: projectCollection(locale: $locale1) { 
//     items {
//       title
//       blurb
//       description {
//         json
//       }
//     } 
//   }
//   fr: projectCollection(locale: $locale2) { 
//     items {
//       title
//       blurb
//       description {
//         json
//       }
//     } 
//   }
// }
// `,