
export const mockContactForm = {
  initValues: {
    name: "",
    email: "",
    category: "",
    details: "",
  },
  /**
   * Third-party form submission:
   * https://formspree.io/forms/movvqplj/submissions
   */
  submissionEndpoint: 'https://formspree.io/f/movvqplj',
  submissionDefault: {
    title: {
      en: '',
      fr: ''
    },
    description: {
      en: '',
      fr: ''
    }
  },
  submissionSuccess: { 
    title: {
      en: `Form submitted successfully!`,
      fr: `Formulaire soumis avec succès !`
    },
    description: {
      en: `Your message has been received, and I'll get back to you shortly. Feel free to explore more on my site in the meantime.`,
      fr: `Votre message a été reçu et je vous répondrai sous peu. N'hésitez pas à en explorer davantage sur mon site en attendant.`
    },
  },
  submissionFailure: { 
    title: {
      en: `Failed to submit the form.`,
      fr: `Failed to submit the form.`
    },
    description: {
      en: `Something went wrong during submission, but I'm not sure what. Oh boy, this must be frustrating! Please try again later and thank you for your patience.`,
      fr: `Something went wrong during submission, but I'm not sure what. Oh boy, this must be frustrating! Please try again later and thank you for your patience.`
    },
  },
  submissionError: { 
    title: {
      en: `Error submitting form.`,
      fr: `Error submitting form.`
    },
    description: {
      en: `Something went wrong during submission, but I'm not sure what: `,
      fr: `Something went wrong during submission, but I'm not sure what: `
    },
  },

};


// export const mockNavOptions = [
//   {
//     id: '1',
//     name: 'Nav item 1', 
//     url: '#nav-item-1',
//     description: '....', 
//   }, {
//     id: '2',
//     name: 'Nav item 2', 
//     url: '#nav-item-2',
//     description: '....', 
//   }, {
//     id: '3',
//     name: 'Nav item 3', 
//     url: '#nav-item-3',
//     description: '....', 
//   }
// ];

// export const mockInformationCard1DataArray = [
//   {
//     id: '2', 
//     parentId: '2',
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   },{
//     id: '3', 
//     parentId: '2',
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   },{
//     id: '4', 
//     parentId: '2',
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   },{
//     id: '5', 
//     parentId: '2',
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   },{
//     id: '6', 
//     parentId: '6',
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   }
// ];

// export const mockProjectThumbDataArray = [
//   {
//     id: '1',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     image: 'images/project-1.png',
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//   },{
//     id: '2',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     image: 'images/project-2.png',
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//   },{
//     id: '3',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     image: 'images/project-3.png',
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//   },{
//     id: '4',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     blurb: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//     image: 'images/project-4.png',
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },
//   }
// ];
 

// export const mockModalContext = {
//   isOpen: false,             
//   childComponent: '',
//   modalData : {
//     ...mockInformationCard1DataArray[0]
//   },
//   openModal: ({ 
//     dataType, 
//     dataId 
//   } : {  
//       dataType: string, 
//       dataId: string 
//   }) => {
//     console.log(`Modal opened with dataType ${dataType} | dataId ${dataId} | .`);
//   },
//   closeModal: () => {
//     console.log(`Modal closed`);
//   },
//   submitModalForm: () => {}
// };


// export const mockPageSectionsProps = [
//   {
//     id: '1',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },  
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   }, { // Expertise specification 1
//     id: '2',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },  
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },  
//   }, { // Portfolio
//     id: '3',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },  
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   }, { // Expertise specification 1
//     id: '4',
//     title: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     },  
//     description: {
//       en: `Translating visual designs into responsive and interactive User Interfaces.`,
//       fr: `Translating visual designs into responsive and interactive User Interfaces.`
//     }, 
//   }
// ];


  