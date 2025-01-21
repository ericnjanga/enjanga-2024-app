// import { createServer } from 'miragejs';
import { createServer, Model, Request, Server } from "miragejs";
import { AppRegistry } from "./../models"; // Import schema and types
import { 
  NavOptionProps, 
  ExpertiseSpecProps,
  ProjectProps
} from "./../models";
import { getCurrentLanguage } from "../utils/functions";


function makeMirageServer() {
  return createServer({
    models: {
      pageSection: Model, // Define a hero model
      expertiseSpec: Model,
      project: Model,
      navOption: Model,
    },

    seeds(server: Server) {
      // Nav Options
      server.create("navOption", {
        id: "1",
        name: {
          en: "Scope of Expertise",
          fr: "Sommaire des compétances",
        },
        url: "#scope-of-expertise",
        description: {
          en: "...",
          fr: "...",
        },
      });
      server.create("navOption", {
        id: "2",
        name: {
          en: "Some work",
          fr: "Récents travaux",
        },
        url: "#some-work",
        description: {
          en: "...",
          fr: "...",
        },
      });
      server.create("navOption", {
        id: "3",
        name: {
          en: "About me",
          fr: "À propos",
        },
        url: "#about",
        description: {
          en: "...",
          fr: "...",
        },
      });

      // Projects ...
      server.create("project", {
        id: "1",
        title: {
          en: `A WordPress theme designed and custom-coded to fit business rules`,
          fr: `A WordPress theme designed and custom-coded to fit business rules`,
        },
        blurb: {
          en: `Design and UI Development of a comprehensive Design System for a government website`,
          fr: `Design and UI Development of a comprehensive Design System for a government website`,
        },
        image: "images/project-1.png",
        description: {
          en: `<h3> (Project 1)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
          fr: `<h3> (Project 1)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        },
      });
      server.create("project", {
        id: "2",
        title: {
          en: `A UI kit designed and developed for a CMS-based enterprise website`,
          fr: `A UI kit designed and developed for a CMS-based enterprise website`
        },
        blurb: {
          en: `Design and UI Development of a comprehensive Design System for a government website`,
          fr: `Design and UI Development of a comprehensive Design System for a government website`
        },
        image: "images/project-2.png",
        description: {
          en: `<h3> (Project 2)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `<h3> (Project 2)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("project", {
        id: "3",
        title: {
          en: `Using engineering knowledge to inform Design decisions`,
          fr: `Using engineering knowledge to inform Design decisions`
        },
        blurb: {
          en: `Design and UI Development of a comprehensive Design System for a government website`,
          fr: `Design and UI Development of a comprehensive Design System for a government website`
        },
        image: "images/project-3.png",
        description: {
          en: `<h3> (Project 3)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `<h3> (Project 3)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("project", {
        id: "4",
        title: {
          en: `Bridging the gap between Design Systems and Agile Development`,
          fr: `Combler le fossé entre les systèmes de Design et le développement Agile`
        },
        blurb: {
          en: `Design Prototypes for improving Government services delivery
         --- Design and UI Development of a comprehensive Design 
         System for a government website`,
         fr: `Design Prototypes for improving Government services delivery
         --- Design and UI Development of a comprehensive Design 
         System for a government website`
        },
        image: "images/project-4.png",
        description: {
          en: `<h3> (Project 4)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `<h3> (Project 4)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });

      // Page Sections ...
      server.create("pageSection", {
        // Hero
        id: "1",
        title: {
          en: "Software Design & Engineering",
          fr: "Conception du logiciel web"
        },
        description: {
          en: `I excel at creating custom software for web applications, and have a 
          taste for visual aesthetics and user-friendliness.`,
          fr: `J'excelle dans la création de logiciel pour applications web, et j'ai un goût 
          pour l'esthétique visuelle et convivialité.`,
        },
      });
      server.create("pageSection", {
        // Expertise specification 1
        id: "2",
        title: {
          en: "Writing custom code",
          fr: "[****** fr] Writing custom code"
        },
        description: {
          en: `<p>I write custom code in various <a href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page.</p>
        <p>My coding expertise includes, but is not limited to:</p>
        `,
        fr: `<p>[****** fr] I write custom code in various <a href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page.</p>
        <p>My coding expertise includes, but is not limited to:</p>
        `
        },
        className: "theme1",
      });
      server.create("pageSection", {
        // Expertise specification 1
        id: "8",
        title: {
          en: "Designing User Interfaces",
          fr: "Designing User Interfaces"
        },
        description: {
          en: `<p>I excel at using my engineering knowledge to help multi-disciplinary teams make well-informed design decisions.
        I combine <a href="#">Usability</a> and <a href="#">Accessibility</a> skills to ensure design solutions fulfill users agenda and comply to WCAG and AODA regulations. </p>
        <p>My design expertise includes, but is not limited to:</p>`,
        fr: `<p>I excel at using my engineering knowledge to help multi-disciplinary teams make well-informed design decisions.
        I combine <a href="#">Usability</a> and <a href="#">Accessibility</a> skills to ensure design solutions fulfill users agenda and comply to WCAG and AODA regulations. </p>
        <p>My design expertise includes, but is not limited to:</p>`
        },
        className: "theme1",
      });
      server.create("pageSection", {
        // Expertise specification 1
        id: "9",
        title: {
          en: "Consulting, Vision, and Culture",
          fr: "Consulting, Vision, and Culture"
        },
        description: {
          en: `<p>I am a team player, and believe in purposeful collective effort. I thrive in cross-functional teams and agile environments. I have excellent stakeholders communication skills and can show leadership when necessary.</p>
        <p>My soft skills includes, but is not limited to:</p>
        `,
        fr: `<p>I am a team player, and believe in purposeful collective effort. I thrive in cross-functional teams and agile environments. I have excellent stakeholders communication skills and can show leadership when necessary.</p>
        <p>My soft skills includes, but is not limited to:</p>
        `
        },
        className: "theme1",
      });
      server.create("pageSection", {
        // Portfolio
        id: "3",
        title: {
          en: "Some of my work",
          fr: "Some of my work"
        },
        description: {
          en: `
        <p>I’ve contributed to every aspect of a software lifecycle, from business requirements gathering, visual design, and codign to deployment. 
          Below is some of my work:</p>
        `,
        fr: `
        <p>I’ve contributed to every aspect of a software lifecycle, from business requirements gathering, visual design, and codign to deployment. 
          Below is some of my work:</p>
        `
        },
      });
      server.create("pageSection", {
        // About
        id: "4",
        title: {
          en: "A little bit about me :)",
          fr: "A little bit about me :)"
        },
        description: {
          en: `
          <p>I am a software engineer, and specialize in User Interfaces. These days, I work as web technology expert and assist in the design, coding, and management of large enterprise applications.</p>
          <p>I am also a complete UX Designer as I master the design of wireframes and prototypes. But over time, my interest has shifted to UX Research as I was captivated with finding out what truly motivates users. These days, I focus my attention on <a href="#">Usability</a> and <a href="#">Accessibility</a>, ensuring web applications can be successfully operated by the largest possible number of users.</p>
          <p>On my spare time, I advise small businesses and entrepreneurs, helping them make informed decisions on technical matters.</p>
        `,
        fr: `
          <p>I am a software engineer, and specialize in User Interfaces. These days, I work as web technology expert and assist in the design, coding, and management of large enterprise applications.</p>
          <p>I am also a complete UX Designer as I master the design of wireframes and prototypes. But over time, my interest has shifted to UX Research as I was captivated with finding out what truly motivates users. These days, I focus my attention on <a href="#">Usability</a> and <a href="#">Accessibility</a>, ensuring web applications can be successfully operated by the largest possible number of users.</p>
          <p>On my spare time, I advise small businesses and entrepreneurs, helping them make informed decisions on technical matters.</p>
        `
        },
      });
      server.create("pageSection", {
        // Footer
        id: "5",
        title: {
          en: "Eric Njanga",
          fr: "Eric Njanga"
        },
        description: {
          en: `
        <p className="title mb-0">Software Engineer &amp; Designer</p>
        <address className="location mb-0">Toronto, Canada</address>
        `,
        fr: `
        <p className="title mb-0">Software Engineer &amp; Designer</p>
        <address className="location mb-0">Toronto, Canada</address>
        `
        },
      });
      server.create("pageSection", {
        // Expertise specification 2
        id: "6",
        title: {
          en: "Expertise 2",
          fr: "Expertise 2"
        },
        description: {
          en: "<p>...</p>",
          fr: "<p>...</p>"
        },
      });
      server.create("pageSection", {
        // Contact
        id: "7",
        title: {
          en: "(Contact title) ...",
          fr: "(Contact title) ..."
        },
        description: {
          en: `<p>(Contact introduction) Lorem ipsum dolor sit amet consectetur. Ut nisi 
          risus duis a eget a velit. Sem sed at eu diam.</p>`,
          fr: `<p>(Contact introduction) Lorem ipsum dolor sit amet consectetur. Ut nisi 
          risus duis a eget a velit. Sem sed at eu diam.</p>`
        },
      });

      // Expertise Specification ...
      // parentId: '2' ...
      server.create("expertiseSpec", {
        id: "1",
        parentId: "2",
        blurb: {
          en: `Writing production code with a focus on user's experience,
         performance, and easy maintenance.`,
         fr: `Writing production code with a focus on user's experience,
         performance, and easy maintenance.`
        },
        title: {
          en: "High performance web apps",
          fr: "High performance web apps"
        },
        description: {
          en: ` 
          <p><b>Description 2 ...</b></p>
          <p>Writing production code with a focus on user's experience, crafting interaction patterns 
          that are reusable and inclusive. Ensuring the code is easy maintainable, and optimized 
          for high-traffic and performance.</p>
        `,
        fr: ` 
          <p><b>Description 2 ...</b></p>
          <p>Writing production code with a focus on user's experience, crafting interaction patterns 
          that are reusable and inclusive. Ensuring the code is easy maintainable, and optimized 
          for high-traffic and performance.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "2",
        parentId: "2",
        blurb: {
          en: `Optimizing the code for WCAG and AODA Accessibility compliance.`,
          fr: `Optimizing the code for WCAG and AODA Accessibility compliance.`
        },
        title: {
          en: "Accessibility Compliance",
          fr: "Accessibility Compliance"
        },
        description: {
          en: ` 
          <p><b>Optimizing the code structure for optimal (WCAG and AODA) ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Optimizing the code structure for optimal (WCAG and AODA) ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "3",
        parentId: "2",
        blurb: {
          en: `Using analytial and problem soving skills to address 
        complex and unusual coding problems.`,
        fr: `Using analytial and problem soving skills to address 
        complex and unusual coding problems.`
        },
        title: {
          en: "Expertise 3",
          fr: "Expertise 3"
        },
        description: {
          en: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "4",
        parentId: "2",
        blurb: {
          en: `Translating visual designs into responsive and interactive User Interfaces.`,
          fr: `Translating visual designs into responsive and interactive User Interfaces.`
        },
        title: {
          en: "Coding visual designs",
          fr: "Coding visual designs"
        },
        description: {
          en: ` 
          <p><b>Description 4 ...</b></p>
          <p>Implementing the visual design aesthetic design system, and front-end processes and app architecture.</p>
        `,
        fr: ` 
          <p><b>Description 4 ...</b></p>
          <p>Implementing the visual design aesthetic design system, and front-end processes and app architecture.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "5",
        parentId: "2",
        blurb: {
          en: `Translating business/technical specifications into working, tested applications.`,
          fr: `Translating business/technical specifications into working, tested applications.`
        },
        title: {
          en: "Expertise 5",
          fr: "Expertise 5"
        },
        description: {
          en: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      // parentId: '8' ...
      server.create("expertiseSpec", {
        id: "6",
        parentId: "8",
        blurb: {
          en: `Using my engineering knowledge to support Design Thinking
         processes and make well-informed design decisions.`,
         fr: `Using my engineering knowledge to support Design Thinking
         processes and make well-informed design decisions.`
        },
        title: {
          en: "Expertise 6",
          fr: "Expertise 6"
        },
        description: {
          en: `
          <p><b>Description 1 a ***</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `
          <p><b>Description 1 a ***</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "7",
        parentId: "8",
        blurb: {
          en: `Expertise specification 2 - blurb 2`,
          fr: `Expertise specification 2 - blurb 2`
        },
        title: {
          en: "Expertise 7",
          fr: "Expertise 7"
        },
        description: {
          en: ` 
          <p><b>Description 2 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 2 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "8",
        parentId: "8",
        blurb: {
          en: `Expertise specification 2 - blurb 3`,
          fr: `Expertise specification 2 - blurb 3`
        },
        title: {
          en: "Expertise 8",
          fr: "Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "9",
        parentId: "8",
        blurb: {
          en: `Being actively involved in all aspects pf the research, 
        prototyping and implementation of user interfaces 
        that solve users/customers problems.`,
        fr: `Being actively involved in all aspects pf the research, 
        prototyping and implementation of user interfaces 
        that solve users/customers problems.`
        },
        title: {
          en: "Expertise 8",
          fr: "Expertise 8"
        },
        description:{
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      // parentId: '9' ...
      server.create("expertiseSpec", {
        id: "10",
        parentId: "9",
        blurb: `Developing and presenting new ideas and conceptualizing new approaches and solutions.`,
        title: {
          en: "Expertise 8",
          fr: "Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "11",
        parentId: "9",
        blurb: {
          en: `Mentoring other developers as a subject matter expert in 
        Front-end technologies and general best practices.`,
        fr: `Mentoring other developers as a subject matter expert in 
        Front-end technologies and general best practices.`
        },
        
        title: {
          en: "Expertise 8",
          fr: "Expertise 8"
        },
        description:{
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "12",
        parentId: "9",
        blurb: {
          en: `Supporting my organiation's growth by contributung to the culture.`,
          fr: `Supporting my organiation's growth by contributung to the culture.`
        },
        title: {
          en: "A culture of collaboration",
          fr: "A culture of collaboration"
        },
        description: {
          en: ` 
          <p><b>Socializing, and helping around for the good of the organization.</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Socializing, and helping around for the good of the organization.</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "13",
        parentId: "9",
        blurb: {
          en: `Contributing to research and development by helping bridge the 
        gap between UX Design and Agile Development.`,
        fr: `Contributing to research and development by helping bridge the 
        gap between UX Design and Agile Development.`
        },
        title: {
          en: "Expertise 8",
          fr: "Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "14",
        parentId: "9",
        blurb: {
          en: `Effective communication with stakeholders.`,
          fr: `Effective communication with stakeholders.`
        },
        title: {
          en: "Expertise 8",
          fr: "Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
    },

    routes() {
      this.passthrough("https://formspree.io/**"); // Allow requests to Formspree

      this.namespace = "api";

      // navOptions ...
      this.get("/navOptions", (schema: AppRegistry, request: Request) => {
        return {
          navOptions: this.schema.navOptions.all().models.map((data: NavOptionProps) => ({
            id: data.id,
            name: data.name,
            description: data.description,
          }))
        };
      });


      // PageSection ...
      this.get("/pageSections/:id", (schema: AppRegistry, request: Request) => { 
        const data = this.schema.pageSections.find(request.params.id);

        return {
          pageSection: {
            title: data.title,
            description: data.description
          }
        };
      });


      // Expertise Specification ...
      this.get("/expertiseSpecs", (schema: AppRegistry, request: Request) => {  
        return {
          expertiseSpecs: this.schema.expertiseSpecs.all().models.map((data: ExpertiseSpecProps) => ({
            id: data.id,
            parentId: data.parentId,
            blurb: data.blurb,
            title: data.title,
            description: data.description 
          })) 
        };
      });


      this.get("/expertiseSpecsByParent/:id", (schema: AppRegistry, request: Request) => { 
        const data = this.schema.expertiseSpecs.where({
          parentId: request.params.id,
        });

        return {
          expertiseSpecs: data.models.map((data: ExpertiseSpecProps) => ({
            id: data.id,
            parentId: data.parentId,
            blurb: data.blurb,
            title: data.title,
            description: data.description 
          })) 
        };
      });


      this.get( "/expertiseSpecs/:id", (schema: AppRegistry, request: Request) => { 
        const data = this.schema.expertiseSpecs.find(request.params.id);

        return {
          expertiseSpecs: {
            id: data.id,
            parentId: data.parentId,
            blurb: data.blurb,
            title: data.title,
            description: data.description 
          }
        };
      });


      // Projects ...
      this.get("/projects", (schema: AppRegistry, request: Request) => { 
        return {
          projects: this.schema.projects.all().models.map((data: ProjectProps) => ({
            id: data.id,
            title: data.title,
            image: data.image,
            className: data.className,
            blurb: data.blurb,
            description: data.description
          }))
        }; 
      });


      this.get("/projects/:id", (schema: AppRegistry, request: Request) => { 
        const data = this.schema.projects.find(request.params.id);

        return {
          projects: {
            id: data.id,
            title: data.title,
            image: data.image,
            className: data.className,
            blurb: data.blurb,
            description: data.description
          }
        };
      });
    },
  });
}

export default makeMirageServer;
