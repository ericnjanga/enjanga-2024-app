
export const mockNavOptions = [
  {
    id: '1',
    name: 'Nav item 1', 
    url: '#nav-item-1',
    description: '....', 
  }, {
    id: '2',
    name: 'Nav item 2', 
    url: '#nav-item-2',
    description: '....', 
  }, {
    id: '3',
    name: 'Nav item 3', 
    url: '#nav-item-3',
    description: '....', 
  }
];

export const mockInformationCard1DataArray = [
  {
    id: '2', 
    parentId: '2',
    blurb: `Translating visual designs into responsive and interactive User Interfaces.`,
    title: 'Expertise 1',
    description: ` 
      <p><b>Description 1 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '3', 
    parentId: '2',
    blurb: `Creating Responsive and interactive User Interfaces.`,
    title: 'Expertise 2',
    description: `
      <p><b>Description 2 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '4', 
    parentId: '2',
    blurb: `Ensuring Accessibility compliance ...`,
    title: 'Expertise 3',
    description: ` 
      <p><b>Description 4 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `,  
  },{
    id: '5', 
    parentId: '2',
    blurb: `Solving complex and unusual coding problems and communication effectively with stakeholders`,
    title: 'Expertise 4',
    description: ` 
      <p><b>Description 5 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '6', 
    parentId: '6',
    blurb: `Expertise specification 2 - blurb 1`,
    title: 'Expertise 5',
    description: `
      <p><b>Description 1 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  }
];

export const mockProjectThumbDataArray = [
  {
    id: '1',
    title: 'Design and UI Development of a comprehensive De ...', 
    blurb: `Design and UI Development of a comprehensive Design System for a government website`,
    image: 'images/project-1.png',
    description: `<h3> (Project 1)</h3>
      <p><b>Description ..</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '2',
    title: `Front-end Dev and prototyping for a large website's design system`, 
    blurb: `Design and UI Development of a comprehensive Design System for a government website`,
    image: 'images/project-2.png',
    description: `<h3> (Project 2)</h3>
      <p><b>Description ..</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '3',
    title: `Front-end Dev, research, and prototyping for a website rebranding`, 
    blurb: `Design and UI Development of a comprehensive Design System for a government website`,
    image: 'images/project-3.png',
    description: `<h3> (Project 3)</h3>
      <p><b>Description ..</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '4',
    title: `Design Prototypes for improving Government services delivery`, 
    blurb: `Design and UI Development of a comprehensive Design System for a government website`,
    image: 'images/project-4.png',
    description: `<h3> (Project 4)</h3>
      <p><b>Description ..</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  }
];
 

export const mockModalContext = {
  isOpen: false,             
  childComponent: '',
  modalData : {
    ...mockInformationCard1DataArray[0]
  },
  openModal: ({ 
    dataType, 
    dataId 
  } : {  
      dataType: string, 
      dataId: string 
  }) => {
    console.log(`Modal opened with dataType ${dataType} | dataId ${dataId} | .`);
  },
  closeModal: () => {
    console.log(`Modal closed`);
  },
  submitModalForm: () => {}
};


export const mockPageSectionsProps = [
  {
    id: '1',
    title: 'Software Design & Engineering', 
    description: 'I excel at creating custom software for web applications, and have a taste for visual aesthetics and user-friendliness.', 
  }, { // Expertise specification 1
    id: '2',
    title: 'Writing custom code', 
    description: '<p>I write custom code in various <a href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page. My expertise includes, but is not limited to:</p>', 
  }, { // Portfolio
    id: '3',
    title: 'Some of my work', 
    description: 'I’ve wrote code for hundreds of web applications over my 15+ years of experience. Below is some of my work.', 
  }, { // Expertise specification 1
    id: '4',
    title: 'A little bit about me :)', 
    description: `
      <p>I am a software engineer, and specialize in User Interfaces. These days, I work as web technology expert and assist in the design, coding, and management of large enterprise applications.</p>
      <p>Rhoncus vulputate et nisl etiam faucibus dui. Interdum mollis sit quam sodales posuere lorem purus ipsum. Fermentum urna ullamcorper fermentum semper vel convallis ac orci. Viverra vitae dignissim cum erat facilisis sit massa ornare.</p>
      <ul>
        <li>15+ years in the tech industry</li>
        <li>Computer science Bachelor degree</li>
        <li>Have a keep eye for aesthetics</li>
      </ul>
    `, 
  }
];

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
    title: '',
    description: ''
  },
  submissionSuccess: { 
    title: `Form submitted successfully!`,
    description: `Thank you for reaching out! Your message has been received, and I'll get back to you shortly. Feel free to explore more on my site in the meantime.`,
  },
  submissionFailure: { 
    title: `Failed to submit the form.`,
    description: `Something went wrong during submission, but I'm not sure what. Oh boy, this must be frustrating! Please try again later and thank you for your patience.`,
  },
  submissionError: { 
    title: `Error submitting form.`,
    description: `Something went wrong during submission, but I'm not sure what: `,
  },

};

  