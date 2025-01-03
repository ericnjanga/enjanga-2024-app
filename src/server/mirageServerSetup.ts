// import { createServer } from 'miragejs';
import { createServer, Model, Request, Server } from "miragejs";
import { AppRegistry } from "./../models"; // Import schema and types

function makeMirageServer() {

  return createServer({
    models: {
      pageSection: Model, // Define a hero model
      expertiseSpec: Model,
      project: Model,
      navOption: Model
    },

    seeds(server: Server) { 
      // Nav Options
      server.create('navOption', {
        id: '1',
        name: 'Scope of Expertise', 
        url: '#scope-of-expertise',
        description: '....', 
      });
      server.create('navOption', {
        id: '2',
        name: 'Some work', 
        url: '#some-work',
        description: '....', 
      });
      server.create('navOption', {
        id: '3',
        name: 'About me', 
        url: '#about',
        description: '....', 
      });

      // Projects ...
      server.create('project', {
        id: '1',
        title: 'Design and UI Development of a comprehensive De ...', 
        blurb: `Design and UI Development of a comprehensive Design System for a government website`,
        image: 'images/project-1.png',
        description: `<h3> (Project 1)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('project', {
        id: '2',
        title: `Front-end Dev and prototyping for a large website's design system`, 
        blurb: `Design and UI Development of a comprehensive Design System for a government website`,
        image: 'images/project-2.png',
        description: `<h3> (Project 2)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('project', {
        id: '3',
        title: `Front-end Dev, research, and prototyping for a website rebranding`, 
        blurb: `Design and UI Development of a comprehensive Design System for a government website`,
        image: 'images/project-3.png',
        description: `<h3> (Project 3)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('project', {
        id: '4',
        title: `Design Prototypes for improving Government services delivery`, 
        blurb: `Design and UI Development of a comprehensive Design System for a government website`,
        image: 'images/project-4.png',
        description: `<h3> (Project 4)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });

      // Page Sections ...
      server.create('pageSection', { // Hero
        id: '1',
        title: 'Software Design & Engineering', 
        description: 'I excel at creating custom software for web applications, and have a taste for visual aesthetics and user-friendliness.', 
      }); 
      server.create('pageSection', { // Expertise specification 1
        id: '2',
        title: 'Writing custom code', 
        description: '<p>I write custom code in various <a href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page. My expertise includes, but is not limited to:</p>',
        className: 'theme1' 
      });
      server.create('pageSection', { // Expertise specification 1
        id: '8',
        title: 'Designing User Interfaces', 
        description: '<p>I write custom code in various <a href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page. My expertise includes, but is not limited to:</p>',
        className: 'theme1' 
      });
      server.create('pageSection', { // Expertise specification 1
        id: '9',
        title: 'Consulting, Vision, structure, and planning', 
        description: '<p>I write custom code in various <a href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page. My expertise includes, but is not limited to:</p>',
        className: 'theme1' 
      });
      server.create('pageSection', { // Portfolio
        id: '3',
        title: 'Some of my work', 
        description: 'I’ve wrote code for hundreds of web applications over my 15+ years of experience. Below is some of my work.', 
      });
      server.create('pageSection', { // About
        id: '4',
        title: 'A little bit about me :)', 
        description: `
          <p>I am a software engineer, and specialize in User Interfaces. These days, I work as web technology expert and assist in the design, coding, and management of large enterprise applications.</p>
          <p>I am also a self-thought Design Thinker and User Experience specialist. I focus my attention on <a href="#">Usability</a> and <a href="#">Accessibility</a>, ensuring web applications can be successfully operated by the largest possible number of users.</p>
          <p>On my spare time, I advise small businesses and entrepreneurs, helping them make informed decisions on technical matters.</p>
        `, 
      });
      server.create('pageSection', { // Footer
        id: '5',
        title: 'Eric Njanga', 
        description: `
        <p className="title mb-0">Software Engineer &amp; Designer</p>
        <address className="location mb-0">Toronto, Canada</address>
        `, 
      }); 
      server.create('pageSection', { // Expertise specification 2
        id: '6',
        title: 'Expertise 2', 
        description: '<p>...</p>', 
      });
      server.create('pageSection', { // Contact
        id: '7',
        title: '(Contact title) ...', 
        description: '<p>(Contact introduction) Lorem ipsum dolor sit amet consectetur. Ut nisi risus duis a eget a velit. Sem sed at eu diam.</p>', 
      });
      
      

      // Expertise Specification ...
      // parentId: '2' ...
      server.create('expertiseSpec', {
        id: '1', 
        parentId: '2',
        blurb: `Creating single page applications that are optimized for performance, high traffic, and optimal User Experience.`,
        title: 'High performance web apps',
        description: ` 
          <p><b>Description 2 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '2', 
        parentId: '2',
        blurb: `WCAG and AODA Accessibility compliance.`,
        title: 'Accessibility Compliance',
        description: ` 
          <p><b>Optimizing the code structure for optimal (WCAG and AODA) ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,  
      });
      server.create('expertiseSpec', {
        id: '3', 
        parentId: '2', 
        blurb: `***Solving complex and unusual coding problems and communication effectively with stakeholders`,
        title: 'Expertise 3',
        description: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '4', 
        parentId: '2',
        blurb: `Translating visual designs into responsive and interactive User Interfaces.`,
        title: 'Coding visual designs',
        description: ` 
          <p><b>Description 4 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,  
      });
      server.create('expertiseSpec', {
        id: '5', 
        parentId: '2',
        blurb: `Solving complex and unusual coding problems and communication effectively with stakeholders`,
        title: 'Expertise 5',
        description: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      // parentId: '8' ...
      server.create('expertiseSpec', {
        id: '6', 
        parentId: '8',
        blurb: `Expertise specification 2 - blurb 1`,
        title: 'Expertise 6',
        description: `
          <p><b>Description 1 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '7', 
        parentId: '8',
        blurb: `Expertise specification 2 - blurb 2`,
        title: 'Expertise 7',
        description: ` 
          <p><b>Description 2 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '8', 
        parentId: '8',
        blurb: `Expertise specification 2 - blurb 3`,
        title: 'Expertise 8',
        description: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '9', 
        parentId: '8',
        blurb: `Expertise specification 2 - blurb 3`,
        title: 'Expertise 8',
        description: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      // parentId: '9' ...
      server.create('expertiseSpec', {
        id: '10', 
        parentId: '9',
        blurb: `Expertise specification 2 - blurb 1`,
        title: 'Expertise 6',
        description: `
          <p><b>Description 1 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '11', 
        parentId: '9',
        blurb: `Expertise specification 2 - blurb 2`,
        title: 'Expertise 7',
        description: ` 
          <p><b>Description 2 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '12', 
        parentId: '9',
        blurb: `Expertise specification 2 - blurb 3`,
        title: 'Expertise 8',
        description: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
      server.create('expertiseSpec', {
        id: '13', 
        parentId: '9',
        blurb: `Expertise specification 2 - blurb 3`,
        title: 'Expertise 8',
        description: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `, 
      });
    },







    routes() {
      this.passthrough("https://formspree.io/**"); // Allow requests to Formspree
      
      this.namespace = 'api';

      // navOptions ...
      this.get("/navOptions", () => { 
        return this.schema.navOptions.all();
      });

      // PageSection ...
      this.get("/pageSections/:id", (schema: AppRegistry, request: Request) => { 
        return this.schema.pageSections.find(request.params.id);
      });
 

      // Expertise Specification ...
      this.get("/expertiseSpecs", () => { 
        return this.schema.expertiseSpecs.all();
      }); 
      this.get("/expertiseSpecsByParent/:id", (schema: AppRegistry, request: Request) => { 
        return this.schema.expertiseSpecs.where({ parentId: request.params.id });
      });  
      this.get("/expertiseSpecs/:id", (schema: AppRegistry, request: Request) => { 
        return this.schema.expertiseSpecs.find(request.params.id);
      });
 

      // Projects ...
      this.get("/projects", () => { 
        return this.schema.projects.all();
      }); 
      this.get("/projects/:id", (schema: AppRegistry, request: Request) => { 
        return this.schema.projects.find(request.params.id);
      });


    },
  });
}


export default makeMirageServer;
