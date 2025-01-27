// import { createServer } from 'miragejs';
import { createServer, Model, Request, Server } from "miragejs";
import { AppRegistry } from "./../models"; // Import schema and types
import { 
  NavOptionProps, 
  ExpertiseSpecProps,
  ProjectProps
} from "./../models";


function makeMirageServer() {
  return createServer({
    models: {
      pageSection: Model, // Define a hero model
      expertiseSpec: Model,
      project: Model,
      navOption: Model,
      conceptDef: Model,
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
          fr: `[****** fr] A WordPress theme designed and custom-coded to fit business rules`,
        },
        blurb: {
          en: `Design and UI Development of a comprehensive Design System for a government website`,
          fr: `[****** fr] Design and UI Development of a comprehensive Design System for a government website`,
        },
        image: "images/project-1.png",
        description: {
          en: `<h3> (Project 1)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
          fr: `<h3> [****** fr] (Project 1)</h3>
          <p><b>[****** fr] Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        },
      });
      server.create("project", {
        id: "2",
        title: {
          en: `A UI kit designed and developed for a CMS-based enterprise website`,
          fr: `[****** fr] A UI kit designed and developed for a CMS-based enterprise website`
        },
        blurb: {
          en: `Design and UI Development of a comprehensive Design System for a government website`,
          fr: `[****** fr] Design and UI Development of a comprehensive Design System for a government website`
        },
        image: "images/project-2.png",
        description: {
          en: `<h3> (Project 2)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `<h3> [****** fr] (Project 2)</h3>
          <p><b>[****** fr] Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("project", {
        id: "3",
        title: {
          en: `Using engineering knowledge to inform Design decisions`,
          fr: `[****** fr] Using engineering knowledge to inform Design decisions`
        },
        blurb: {
          en: `Design and UI Development of a comprehensive Design System for a government website`,
          fr: `[****** fr] Design and UI Development of a comprehensive Design System for a government website`
        },
        image: "images/project-3.png",
        description: {
          en: `<h3> (Project 3)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `<h3> [****** fr] (Project 3)</h3>
          <p><b>[****** fr] Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("project", {
        id: "4",
        title: {
          en: `Bridging the gap between Design Systems and Agile Development`,
          fr: `[****** fr] Combler le fossé entre les systèmes de Design et le développement Agile`
        },
        blurb: {
          en: `Design Prototypes for improving Government services delivery
         --- Design and UI Development of a comprehensive Design 
         System for a government website`,
         fr: `[****** fr] Design Prototypes for improving Government services delivery
         --- Design and UI Development of a comprehensive Design 
         System for a government website`
        },
        image: "images/project-4.png",
        description: {
          en: `<h3> (Project 4)</h3>
          <p><b>Description ..</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `<h3> [****** fr] (Project 4)</h3>
          <p><b>[****** fr] Description ..</b></p>
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
          fr: "Écriture personnalisée du code"
        },
        description: {
          en: `<p>I write custom code in various <a id="0" class="open-modal" href="#">web technologies</a> to shape the solution in the desired form. For example, I use a <a id="1" class="open-modal" href="#">library called React</a> to create web applications that render complex information fast, without having to reload the page.</p>
        <p>My coding expertise includes, but is not limited to:</p>
        `,
        fr: `<p>J'écris du code personnalisé dans diverses <a id="0" class="open-modal" href="#">technologies Web</a> pour façonner la solution sous la forme souhaitée. Par exemple, j'utilise une <a id="1" class="open-modal" href="#">bibliothèque appelée React</a> pour créer des applications Web qui restituent rapidement des informations complexes, sans avoir à recharger la page.</p>
        <p>Mon expertise en matière de codage comprend, sans s'y limiter :</p>
        `
        },
        className: "theme1",
      });
      server.create("pageSection", {
        // Expertise specification 1
        id: "8",
        title: {
          en: "Designing User Interfaces",
          fr: "[****** fr] Designing User Interfaces"
        },
        description: {
          en: `<p>I excel at using my engineering knowledge to help multi-disciplinary teams make well-informed design decisions.
        I combine <a class="open-modal" href="#">Usability</a> and <a class="open-modal" href="#">Accessibility</a> skills to ensure design solutions fulfill users agenda and comply to WCAG and AODA regulations. </p>
        <p>My design expertise includes, but is not limited to:</p>`,
        fr: `<p>[****** fr] I excel at using my engineering knowledge to help multi-disciplinary teams make well-informed design decisions.
        I combine <a class="open-modal" href="#">Usability</a> and <a class="open-modal" href="#">Accessibility</a> skills to ensure design solutions fulfill users agenda and comply to WCAG and AODA regulations. </p>
        <p>My design expertise includes, but is not limited to:</p>`
        },
        className: "theme1",
      });
      server.create("pageSection", {
        // Expertise specification 1
        id: "9",
        title: {
          en: "Consulting, Vision, and Culture",
          fr: "[****** fr] Consulting, Vision, and Culture"
        },
        description: {
          en: `<p>I am a team player, and believe in purposeful collective effort. I thrive in cross-functional teams and agile environments. I have excellent stakeholders communication skills and can show leadership when necessary.</p>
        <p>My soft skills includes, but is not limited to:</p>
        `,
        fr: `<p>[****** fr] I am a team player, and believe in purposeful collective effort. I thrive in cross-functional teams and agile environments. I have excellent stakeholders communication skills and can show leadership when necessary.</p>
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
          fr: "[****** fr] Some of my work"
        },
        description: {
          en: `
        <p>I’ve contributed to every aspect of a software lifecycle, from business requirements gathering, visual design, and codign to deployment. 
          Below is some of my work:</p>
        `,
        fr: `
        <p>[****** fr] I’ve contributed to every aspect of a software lifecycle, from business requirements gathering, visual design, and codign to deployment. 
          Below is some of my work:</p>
        `
        },
      });
      server.create("pageSection", {
        // About
        id: "4",
        title: {
          en: "A little bit about me :)",
          fr: "[****** fr] A little bit about me :)"
        },
        description: {
          en: `
          <p>I am a software engineer, and specialize in User Interfaces. These days, I work as web technology expert and assist in the design, coding, and management of large enterprise applications.</p>
          <p>I am also a complete UX Designer as I master the design of wireframes and prototypes. But over time, my interest has shifted to UX Research as I was captivated with finding out what truly motivates users. These days, I focus my attention on <a class="open-modal" href="#">Usability</a> and <a class="open-modal" href="#">Accessibility</a>, ensuring web applications can be successfully operated by the largest possible number of users.</p>
          <p>On my spare time, I advise small businesses and entrepreneurs, helping them make informed decisions on technical matters.</p>
        `,
        fr: `
        [****** fr] 
          <p>I am a software engineer, and specialize in User Interfaces. These days, I work as web technology expert and assist in the design, coding, and management of large enterprise applications.</p>
          <p>I am also a complete UX Designer as I master the design of wireframes and prototypes. But over time, my interest has shifted to UX Research as I was captivated with finding out what truly motivates users. These days, I focus my attention on <a class="open-modal" href="#">Usability</a> and <a class="open-modal" href="#">Accessibility</a>, ensuring web applications can be successfully operated by the largest possible number of users.</p>
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
        <p class="title">Software Engineer &amp; Designer</p>
        <address class="location">Toronto, Canada</address>
        `,
        fr: `
        <p class="title">Ingénieur &amp; Designer de logiciel</p>
        <address class="location">Toronto, Canada</address>
        `
        },
      });
      server.create("pageSection", {
        // Expertise specification 2
        id: "6",
        title: {
          en: "Expertise 2",
          fr: "[****** fr] Expertise 2"
        },
        description: {
          en: "<p>...</p>",
          fr: "<p>[****** fr] ...</p>"
        },
      });
      server.create("pageSection", {
        // Contact
        id: "7",
        title: {
          en: "How can I help?",
          fr: "Que puis-je faire pour vous?"
        },
        description: {
          en: `<p>I'm always excited about new challenges. 
          Please take a moment to fill out the form below, and tell me 
          how I can contribute to your organization's success.</p>`,
          fr: `<p>J'aime les défis! Veuillez me dire, s'il 
          vous plaît, en remplissant le formulaire ci-dessous, comment 
          je peux contribuer au succès de votre organisation.</p>`
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
         fr: `Écrire du code de production en mettant l'accent sur l'expérience utilisateur,
         performances et un entretien facile.`
        },
        title: {
          en: "Production code for better UX",
          fr: "Code de production pour une meilleure UX"
        },
        description: {
          en: ` 
          <p>I write production code with a strong focus on delivering 
          exceptional user experiences. I prioritize performance, ensuring
           fast and efficient interactions, while also structuring code for 
           ease of maintenance. Clean, scalable solutions are key 
           to delivering long-term value.</p>
        `,
        fr: ` 
          <p>J'écris du code de production en mettant fortement l'accent sur 
          la fourniture d'expériences utilisateur exceptionnelles. Je donne 
          la priorité à la performance, en garantissant des interactions 
          rapides et efficaces, tout en structurant le code pour faciliter 
          la maintenance. Des solutions propres et évolutives sont 
          essentielles pour générer de la valeur à long terme.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "2",
        parentId: "2",
        blurb: {
          en: `Optimizing the code for WCAG and AODA Accessibility compliance.`,
          fr: `Optimisation du code pour la conformité aux WCAG et AODA en matière d'accessibilité.`
        },
        title: {
          en: "Accessibility Compliance with WCAG and AODA",
          fr: "Conformité en matière d'accessibilité aux WCAG et à l'AODA"
        },
        description: {
          en: ` 
          <p>I ensure that the code structure adheres to WCAG and AODA by writing 
          semantic HTML for accessibility, using ARIA roles where necessary, and 
          maintaining the hierarchy of titles.</p> 
          <p>I also optimize color contrast, keyboard navigation, and the focus state 
          of form elements or interactive elements. I perform testing for assistive 
          technologies and implement scalable and maintainable solutions code that 
          ensures accessibility compliance while improving the user experience for everyone.</p>
        `,
        fr: ` 
          <p>Je m'assure que la structure du code adhère aux WCAG et AODA en écrivant 
          du HTML sémantique pour l'accessibilité, en utilisant les rôles ARIA si 
          nécessaire et en maintenant la hiérarchie des titres.</p> 
          <p>J'optimise également le contraste des couleurs, la navigation au clavier 
          et l'état de focus des éléments de formulaire ou des éléments interactifs.
          J'effectue des tests pour les technologies d'assistance et mets en œuvre 
          des solutions évolutives et maintenables code qui garantit la conformité 
          en matière d'accessibilité tout en améliorant l'expérience utilisateur pour tous.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "3",
        parentId: "2",
        blurb: {
          en: `Using analytial and problem soving skills to address 
        complex and unusual coding problems.`,
        fr: `[****** fr] Using analytial and problem soving skills to address 
        complex and unusual coding problems.`
        },
        title: {
          en: "Expertise 3",
          fr: "[****** fr] Expertise 3"
        },
        description: {
          en: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "4",
        parentId: "2",
        blurb: {
          en: `Translating visual designs into responsive and interactive User Interfaces.`,
          fr: `Conversion des Designs visuels en interfaces utilisateur réactives et interactives.`
        },
        title: {
          en: "Visual designs translation",
          fr: "Conversion des Designs visuels"
        },
        description: {
          en: ` 
          <p>I excel at translating mockups from tools like Figma into HTML, CSS, and 
          JavaScript. I ensure pixel-perfect layouts, responsiveness, and interactivity 
          by using frameworks like React. This process is crucial for maintaining 
          design consistency, user experience, and performance across different 
          devices and screen sizes.</p>
        `,
        fr: ` 
          <p>J'excelle dans la traduction de maquettes à partir d'outils comme Figma en HTML, CSS et 
          JavaScript. J'assure des mises en page au pixel près, une réactivité et une interactivité 
          en utilisant des frameworks comme React. Ce processus est crucial pour maintenir 
          cohérence de la conception, de l'expérience utilisateur et des performances dans différents 
          appareils et tailles d'écran.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "5",
        parentId: "2",
        blurb: {
          en: `Translating business/technical specifications into working, tested applications.`,
          fr: `[****** fr] Translating business/technical specifications into working, tested applications.`
        },
        title: {
          en: "Expertise 5",
          fr: "[****** fr] Expertise 5"
        },
        description: {
          en: ` 
          <p><b>Description 5 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 5 ...</b></p>
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
         fr: `[****** fr] Using my engineering knowledge to support Design Thinking
         processes and make well-informed design decisions.`
        },
        title: {
          en: "Expertise 6",
          fr: "[****** fr] Expertise 6"
        },
        description: {
          en: `
          <p><b>Description 1 a ***</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: `
          <p><b>[****** fr] Description 1 a ***</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "7",
        parentId: "8",
        blurb: {
          en: `Expertise specification 2 - blurb 2`,
          fr: `[****** fr] Expertise specification 2 - blurb 2`
        },
        title: {
          en: "Expertise 7",
          fr: "[****** fr] Expertise 7"
        },
        description: {
          en: ` 
          <p><b>Description 2 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 2 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "8",
        parentId: "8",
        blurb: {
          en: `Expertise specification 2 - blurb 3`,
          fr: `[****** fr] Expertise specification 2 - blurb 3`
        },
        title: {
          en: "Expertise 8",
          fr: "[****** fr] Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 3 ...</b></p>
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
        fr: `[****** fr] Being actively involved in all aspects pf the research, 
        prototyping and implementation of user interfaces 
        that solve users/customers problems.`
        },
        title: {
          en: "Expertise 8",
          fr: "[****** fr] Expertise 8"
        },
        description:{
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      // parentId: '9' ...
      server.create("expertiseSpec", {
        id: "10",
        parentId: "9",
        blurb: {
          en: `Developing and presenting new ideas and conceptualizing new approaches and solutions.`,
          fr: `[****** fr] Developing and presenting new ideas and conceptualizing new approaches and solutions.`
        },
        title: {
          en: "Expertise 8",
          fr: "[****** fr] Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 3 ...</b></p>
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
        fr: `[****** fr] Mentoring other developers as a subject matter expert in 
        Front-end technologies and general best practices.`
        },
        
        title: {
          en: "Expertise 8",
          fr: "[****** fr] Expertise 8"
        },
        description:{
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "12",
        parentId: "9",
        blurb: {
          en: `Supporting my organiation's growth by contributung to the culture.`,
          fr: `[****** fr] Supporting my organiation's growth by contributung to the culture.`
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
          <p><b>[****** fr] Socializing, and helping around for the good of the organization.</b></p>
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
        fr: `[****** fr] Contributing to research and development by helping bridge the 
        gap between UX Design and Agile Development.`
        },
        title: {
          en: "Expertise 8",
          fr: "[****** fr] Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });
      server.create("expertiseSpec", {
        id: "14",
        parentId: "9",
        blurb: {
          en: `Effective communication with stakeholders.`,
          fr: `[****** fr] Effective communication with stakeholders.`
        },
        title: {
          en: "Expertise 8",
          fr: "[****** fr] Expertise 8"
        },
        description: {
          en: ` 
          <p><b>Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `,
        fr: ` 
          <p><b>[****** fr] Description 3 ...</b></p>
          <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
        `
        },
      });

      // Concept Definition ...
      server.create("conceptDef", {
        id: "0",
        title: {
          en: "Web Technologies",
          fr: "Technologies du web"
        },
        description: {
          en: ` 
          <p>Web technologies go beyond writing coding. It's about the deep understanding 
          of how the entire ecosystem works, user experience optimizing, and keeping up 
          with innovation's fast pace.</p> 
          <p>Here's a breakdown of some key areas where web technologies play a crucial role:</p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript/TypeScript</li>
            <li>Modern Frameworks and Libraries (like React)</li>
            <li>Build Tools & Automation</li>
            <li>Version Control and Collaboration</li>
            <li>Performance Optimization</li>
            <li>Cross-Browser Compatibility & Mobile-First Design</li>
            <li>Testing</li>
            <li>APIs and Data Fetching</li>
            <li>Cloud & Deployment</li>
            <li>Security Best Practices</li> 
          </ul>
        `,
        fr: ` 
          <p>Les technologies Web vont au-delà de l'écriture de code. Il s'agit d'une compréhension profonde 
          du fonctionnement de l'ensemble de l'écosystème, de l'optimisation de l'expérience utilisateur et du suivi 
          avec le rythme rapide de l'innovation.</p> 
          <p>Voici quelques domaines clés dans lesquels les technologies Web jouent un rôle crucial :</p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript/TypeScript</li>
            <li>Frameworks et bibliothèques modernes (comme React)</li>
            <li>Outils de création et automatisation</li>
            <li>Contrôle des versions et collaboration</li>
            <li>Optimisation des performances</li>
            <li>Compatibilité multi-navigateurs et conception axée sur les mobiles</li>
            <li>Tests</li>
            <li>API et récupération de données</li>
            <li>Cloud et déploiement</li>
            <li>Bonnes pratiques de sécurité</li> 
          </ul>
        `
        },
      });
      server.create("conceptDef", {
        id: "1",
        title: {
          en: "React UI library",
          fr: "La librairie UI React"
        },
        description: {
          en: ` 
          <p>React is a tool used to build websites and apps. It helps developers 
          create interactive and dynamic user interfaces, like buttons or forms, 
          by organizing them into reusable components. React makes it easier and 
          faster to update websites, improving performance and user experience, 
          which is crucial for modern web apps.</p> 
        `,
        fr: ` 
          <p>React est un outil utilisé pour créer des sites Web et des applications. Cela aide les développeurs 
          créer des interfaces utilisateur interactives et dynamiques, comme des boutons ou des formulaires, 
          en les organisant en composants réutilisables. React rend les choses plus faciles et 
          plus rapide pour mettre à jour les sites Web, améliorant ainsi les performances et l'expérience utilisateur, 
          ce qui est crucial pour les applications Web modernes.</p>
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

      // Concept Definition ... 
      this.get("/conceptDefs/:id", (schema: AppRegistry, request: Request) => { 
        const data = this.schema.conceptDefs.find(request.params.id);

        return {
          conceptDefs: {
            title: data.title,
            description: data.description
          }
        };
      });
    },
  });
}

export default makeMirageServer;
