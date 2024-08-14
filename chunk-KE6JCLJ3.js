import{a as m}from"./chunk-RORGBKOM.js";import{$ as s,Rb as c,Va as e,Wa as t,Xa as o,fb as n,nb as l}from"./chunk-WFKPIHTV.js";var f=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=s({type:i,selectors:[["app-home"]],standalone:!0,features:[l],decls:122,vars:0,consts:[[1,"intro-section"],[1,"background"],["src","https://logosandtypes.com/wp-content/uploads/2024/01/angular.svg","alt","Background Image",1,"background-image"],[1,"intro-content"],[1,"intro-headline"],[1,"intro-description"],[1,"content-section"],[1,"section-title"],[1,"section-description"],[1,"subsection-title"],[1,"subsection-description"],[1,"subsection-list"]],template:function(r,p){r&1&&(e(0,"div",0)(1,"div",1),o(2,"span")(3,"span")(4,"span")(5,"span")(6,"span")(7,"span")(8,"span")(9,"span")(10,"span")(11,"span"),t(),o(12,"img",2),e(13,"div",3)(14,"h1",4),n(15,"Bridging the Gap with Technology"),t(),e(16,"p",5),n(17,"Developing scalable applications"),t()()(),e(18,"section",6)(19,"h2",7),n(20,"Understanding Core Angular Constructs"),t(),e(21,"div",8)(22,"h3",9),n(23,"Components:"),t(),e(24,"p",10),n(25," The visual building blocks of Angular applications. Each component encapsulates a portion of the user interface (UI) and its associated logic. Composed of two primary parts: "),t(),e(26,"ul",11)(27,"li"),n(28,"Template: Defines the HTML structure of the component's view."),t(),e(29,"li"),n(30," Class: Contains the component's TypeScript logic, handling data, events, and interactions with other parts of the application. "),t()(),e(31,"p",10),n(32," Components are hierarchical, creating a tree-like structure that reflects the UI's composition. "),t(),e(33,"h3",9),n(34,"Key concepts:"),t(),e(35,"ul",11)(36,"li"),n(37," Selectors: Used to identify and insert components into other components' templates. "),t(),e(38,"li"),n(39," Inputs and Outputs: Mechanisms for data communication between parent and child components. "),t(),e(40,"li"),n(41," Lifecycle hooks: Methods invoked at specific stages of a component's lifecycle (e.g., creation, update, destruction). "),t()(),e(42,"h3",9),n(43,"Pipes:"),t(),e(44,"p",10),n(45," Transform data before displaying it in the template. Pure and impure pipes are available: "),t(),e(46,"ul",11)(47,"li"),n(48," Pure pipes are deterministic and cache results, recalculating only when input values change. "),t(),e(49,"li"),n(50," Impure pipes are not cached and re-execute on every change detection cycle. "),t()(),e(51,"p",10),n(52," Built-in pipes: uppercase, lowercase, date, currency, number, and more. Custom pipes can be created to perform specific data transformations. "),t(),e(53,"h3",9),n(54,"Services:"),t(),e(55,"p",10),n(56," Reusable logic containers shared across components. Ideal for handling data fetching, API interactions, state management, and other shared functionalities. Injected into components using dependency injection. "),t(),e(57,"h3",9),n(58,"Directives:"),t(),e(59,"p",10),n(60," Modify the appearance or behavior of DOM elements. Two types: "),t(),e(61,"ul",11)(62,"li"),n(63,"Component directives: Create new custom elements."),t(),e(64,"li"),n(65,"Attribute directives: Change the behavior of existing elements."),t(),e(66,"li"),n(67," Structural directives: Modify the DOM structure by adding, removing, or manipulating elements. "),t()(),e(68,"p",10),n(69," Built-in directives: ngIf, ngFor, ngStyle, ngClass, and more. Custom directives can be created to implement custom behaviors. "),t(),e(70,"h3",9),n(71,"API Integration for Dynamic Applications"),t(),e(72,"p",10),n(73," Angular applications often require real-world data to deliver a rich user experience. API integration connects the application to external data sources. The HttpClient module is Angular's primary tool for making HTTP requests. "),t(),e(74,"h3",9),n(75,"Best practices:"),t(),e(76,"ul",11)(77,"li"),n(78,"Design clear API contracts."),t(),e(79,"li"),n(80,"Implement proper error handling and retry mechanisms."),t(),e(81,"li"),n(82,"Optimize performance through caching and lazy loading."),t(),e(83,"li"),n(84,"Secure API communication."),t()(),e(85,"h3",9),n(86," Combining Core Constructs and API Integration "),t(),e(87,"p",10),n(88," By effectively utilizing components, pipes, services, and directives, along with seamless API integration, developers can create robust and scalable Angular applications. "),t(),e(89,"p",10),n(90," Components structure the UI, displaying data fetched from APIs using pipes. Services handle API interactions, providing data to components. Directives enhance the UI's behavior and appearance based on data and user interactions. "),t(),e(91,"p",10),n(92," Together, these elements create a cohesive and dynamic user experience. "),t(),e(93,"h3",9),n(94,"Example: Building a News App"),t(),e(95,"p",10),n(96,"Components:"),t(),e(97,"ul",11)(98,"li"),n(99,"NewsComponent: Displays a list of news articles."),t(),e(100,"li"),n(101,"ArticleComponent: Renders individual news articles."),t()(),e(102,"p",10),n(103,"Service:"),t(),e(104,"ul",11)(105,"li"),n(106,"NewsService: Fetches news articles from a news API."),t()(),e(107,"p",10),n(108,"Pipe:"),t(),e(109,"ul",11)(110,"li"),n(111,"DatePipe: Formats article publication dates."),t()(),e(112,"p",10),n(113,"Directives:"),t(),e(114,"ul",11)(115,"li"),n(116," LoadingIndicatorDirective: Displays a loading indicator while fetching data. "),t()(),e(117,"p",10),n(118," This example demonstrates how the core Angular building blocks work together to create a functional news application. "),t(),e(119,"p",10),n(120," By mastering these fundamental concepts and their interplay, developers can build complex and engaging Angular applications that meet the demands of modern web development. "),t()()(),o(121,"app-footer"))},dependencies:[c,m],styles:["@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.intro-section[_ngcontent-%COMP%]{position:relative;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:0 2%}.background-image[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;height:50%;width:50%;max-width:50%;max-height:50%;object-fit:contain;filter:brightness(30%);transform:translate(-50%,-50%);transition:transform .5s ease-in-out}.intro-content[_ngcontent-%COMP%]{position:relative;z-index:2;text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#00000080;border-radius:10px;padding:20px}.intro-headline[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:10px;background:linear-gradient(to right,#f0f,#0ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:2px 2px 4px rgba(0,0,0,.7);animation:fadeIn 1s ease-in-out}.intro-description[_ngcontent-%COMP%]{font-size:1.5rem;color:#fff;text-shadow:1px 1px 3px rgba(0,0,0,.7);animation:fadeIn 1.5s ease-in-out}@media (max-width: 768px){.intro-headline[_ngcontent-%COMP%]{font-size:2.5rem}.intro-description[_ngcontent-%COMP%]{font-size:1.25rem}}@media (max-width: 480px){.intro-headline[_ngcontent-%COMP%]{font-size:2rem}.intro-description[_ngcontent-%COMP%]{font-size:1rem}}@keyframes _ngcontent-%COMP%_move{to{transform:translateZ(1px) rotate(360deg)}}.background[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;background:#000;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);overflow:hidden;z-index:0}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:20vmin;height:20vmin;border-radius:20vmin;backface-visibility:hidden;position:absolute;animation:_ngcontent-%COMP%_move;animation-duration:3;animation-timing-function:linear;animation-iteration-count:infinite}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(0){color:#5a088c;top:64%;left:78%;animation-duration:131s;animation-delay:-110s;transform-origin:8vw 6vh;box-shadow:40vmin 0 5.8001447864vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){color:#410745;top:21%;left:90%;animation-duration:297s;animation-delay:-69s;transform-origin:-22vw 10vh;box-shadow:-40vmin 0 5.4613110777vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){color:#410745;top:65%;left:18%;animation-duration:423s;animation-delay:-117s;transform-origin:8vw 24vh;box-shadow:40vmin 0 5.2902190788vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){color:#b90d82;top:12%;left:12%;animation-duration:146s;animation-delay:-254s;transform-origin:12vw 2vh;box-shadow:40vmin 0 5.4042312301vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){color:#b90d82;top:36%;left:57%;animation-duration:244s;animation-delay:-117s;transform-origin:-22vw 11vh;box-shadow:-40vmin 0 5.0133211298vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5){color:#b90d82;top:73%;left:52%;animation-duration:200s;animation-delay:-302s;transform-origin:24vw 19vh;box-shadow:40vmin 0 5.6634121609vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){color:#410745;top:19%;left:35%;animation-duration:226s;animation-delay:-333s;transform-origin:12vw 11vh;box-shadow:40vmin 0 5.4468343829vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7){color:#410745;top:98%;left:68%;animation-duration:32s;animation-delay:-380s;transform-origin:18vw 9vh;box-shadow:-40vmin 0 5.1688991032vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8){color:#b90d82;top:69%;left:34%;animation-duration:336s;animation-delay:-57s;transform-origin:3vw 25vh;box-shadow:40vmin 0 5.2807581685vmin currentColor}.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(9){color:#5a088c;top:73%;left:29%;animation-duration:260s;animation-delay:-377s;transform-origin:3vw -17vh;box-shadow:40vmin 0 5.3361983269vmin currentColor}.content-section[_ngcontent-%COMP%]{background-color:#f0f0f0;font-family:Arial,sans-serif;padding:20px;margin:20px;margin-bottom:3rem;border-radius:8px}.section-title[_ngcontent-%COMP%]{font-weight:700;text-align:center;margin-bottom:20px}.subsection-title[_ngcontent-%COMP%]{font-weight:700;margin-top:20px}.subsection-description[_ngcontent-%COMP%]{margin-bottom:10px}.subsection-list[_ngcontent-%COMP%]{color:#666;margin-left:20px}@media (max-width: 480px){.content-section[_ngcontent-%COMP%]{padding:10px;margin:10px}.section-title[_ngcontent-%COMP%]{font-size:18px}.subsection-title[_ngcontent-%COMP%]{font-size:16px}.subsection-description[_ngcontent-%COMP%]{font-size:14px}}@media (min-width: 481px) and (max-width: 768px){.content-section[_ngcontent-%COMP%]{padding:15px;margin:15px}.section-title[_ngcontent-%COMP%]{font-size:20px}.subsection-title[_ngcontent-%COMP%]{font-size:18px}.subsection-description[_ngcontent-%COMP%]{font-size:16px}}@media (min-width: 769px){.content-section[_ngcontent-%COMP%]{padding:20px;margin:20px}.section-title[_ngcontent-%COMP%]{font-size:24px}.subsection-title[_ngcontent-%COMP%]{font-size:20px}.subsection-description[_ngcontent-%COMP%]{font-size:18px}}"]});let a=i;return a})();export{f as HomeComponent};
