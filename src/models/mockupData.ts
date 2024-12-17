
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
    description: `<h3> (Expertise 1)</h3>
      <p><b>Description 2 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '3', 
    parentId: '2',
    blurb: `Creating Responsive and interactive User Interfaces.`,
    description: `<h3> (Expertise 1)</h3>
      <p><b>Description 3 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '4', 
    parentId: '2',
    blurb: `Ensuring Accessibility compliance ...`,
    description: `<h3> (Expertise 1)</h3>
      <p><b>Description 4 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `,  
  },{
    id: '5', 
    parentId: '2',
    blurb: `Solving complex and unusual coding problems and communication effectively with stakeholders`,
    description: `<h3> (Expertise 1)</h3>
      <p><b>Description 5 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  },{
    id: '6', 
    parentId: '6',
    blurb: `Expertise specification 2 - blurb 1`,
    description: `<h3> (Expertise 2)</h3>
      <p><b>Description 1 ...</b></p>
      <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
    `, 
  }
];
 

export const mockModalContext = {
  isOpen: false,              
  renderingType: 'data', 
  modalData : {
    ...mockInformationCard1DataArray[0]
  },
  openModal: ({ 
    renderingType, 
    dataType, 
    dataId }: { 
      renderingType: string, 
      dataType: string, 
      dataId: string 
  }) => {
    console.log(`Modal opened with renderingType ${renderingType} | dataType ${dataType} | dataId ${dataId} | .`);
  },
  closeModal: () => {
    console.log(`Modal closed`);
  }
};


export const mockPageSectionProps = { // Expertise specification 1
  id: '2',
  title: 'Writing custom code', 
  description: '<p>I write custom code in various <a href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page. My expertise includes, but is not limited to:</p>', 
};