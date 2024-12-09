

// We define a mock context value to inject into the story
export const mockInformationCard1Data = {
  id: '2', 
  parentId: '2',
  blurb: `Translating visual designs into responsive and interactive User Interfaces.`,
  description: `<h3> (Expertise 1)</h3>
    <p><b>Description 2 ...</b></p>
    <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
  `, 
};

export const mockModalContext = {
  isOpen: false,              
  renderingType: 'data', 
  modalData : {
    ...mockInformationCard1Data
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