import{o as s,c as a,a as e,t as h,F as g,r as f,b as y,d as w,e as j,n as _,f as i,g as l,h as q}from"./index-Xd2bpcQW.js";const C={class:"bg-zinc-700 p-4 flex flex-col justify-center gap-4 rounded-lg"},A=["src","alt"],P={class:"flex items-center justify-center"},F={class:"font-semibold text-zinc-400"},c={__name:"ImagesContainer",props:["image"],emits:["onClickImage"],setup(x,{emit:r}){const o=x,d=r;return(p,t)=>(s(),a("div",C,[e("img",{onClick:t[0]||(t[0]=b=>d("onClickImage",o.image.path,o.image.alt)),class:"rounded-lg hover:cursor-pointer",src:"/mougammadaly-but-portfolio/"+o.image.path,alt:o.image.alt},null,8,A),e("div",P,[e("p",F,h(o.image.caption),1)])]))}},G={class:"text-left"},z={__name:"PrettyTable",props:["headers","rows"],setup(x){const r=x;return(o,d)=>(s(),a("table",G,[e("tr",null,[(s(!0),a(g,null,f(r.headers,(p,t)=>(s(),a("td",{class:"bg-black text-wrap px-2 border-zinc-500 border-2",key:t},h(p.value),1))),128))]),(s(!0),a(g,null,f(r.rows,(p,t)=>(s(),a("tr",{key:t},[(s(!0),a(g,null,f(r.headers,(b,m)=>(s(),a("td",{class:"p-2 border-zinc-500 border-2",key:m},h(p[b.label]),1))),128))]))),128))]))}},k={class:"relative flex flex-col items-center justify-center gap-4 bg-zinc-900"},I=e("div",{class:"flex flex-col justify-center items-center w-[90%] rounded-lg"},[e("img",{class:"w-[90%] rounded-lg",id:"modal-image",src:"",alt:""}),e("span",{class:"text-white font-semibold"},"Cliquer n'importe où pour sortir de cette affichage")],-1),S=[I],O={class:"relative flex flex-col items-center justify-center my-auto h-screen gap-10"},L=e("h1",{class:"flex flex-col items-center justify-center m-0 text-zinc-300"},[e("span",{class:"text-8xl font-bold m-0 text-cyan-500"},"Portfolio"),e("span",{class:"text-3xl font-bold m-0"},"Stage BUT2 Informatique"),e("span",{class:"text-2xl font-semibold text-zinc-500 m-0"},"par Jessy MOUGAMMADALY")],-1),E={class:"flex flex-row items-center justify-center gap-2"},M=["href"],T={class:"flex flex-row items-center justify-center gap-2"},B=["href"],D={class:"flex flex-col gap-24 lg:px-96 md:px-24 px-16 text-justify text-zinc-300 text-lg"},J=e("div",{class:"flex flex-col gap-4"},[e("h2",{class:"text-4xl font-bold w-full bg-cyan-600 text-white h-16 rounded-lg flex items-center px-4",id:"presentation-stage"}," Présentation du stage "),e("p",null,[l(" Durant la deuxième année de Bachelor Universitaire de Technologie (BUT), nous avons l'opportunité de réaliser un stage d'une durée pouvant variée de 8 à 12 semaines. Le but de ce stage est de mettre en pratique les connaissances acquises durant les 2 premières années du BUT dans le monde du travail, mais aussi et surtout de pouvoir gagner en expérience dans des domaines qui nous sont peut-être inédits."),e("br"),e("br"),l(" J'ai pour ma part décider d'effectuer mon stage à l'ESTA et plus spécifiquement au Digital Lab de l'ESTA. Durant ce stage, la mission qui m'a été confiée était de continuer le développement d'une application permettant d'analyser des pages web suivant différents critères regroupés en trois familles pour l'instant : l'Éco-conception, la Culturalization et le Search Engine Optimization (SEO). L'objectif de l'application est simple, il consiste à parcourir une liste définie de site web et d'analyser les critères voulus, permettant à l'utilisateur de récupèrer les valeurs des différents critères et de pouvoir les exploiter."),e("br"),e("br"),l(" Durant les premières semaines du stage, j'ai pu faire un constat assez alarmant, beaucoup de fonctionnalités de l'application actuelle n'étaient pas fiables et pouvaient aboutir à un échec complet de l'analyse des sites web. Après discussion avec mon tuteur de stage, il a été décidé de reprendre l'application depuis le début pour la restructurer, la fiabiliser et l'améliorer que ce soit dans l'expérience utilisateur que dans ses performances globales. ")])],-1),U={class:"flex flex-col gap-4"},V=e("h2",{class:"text-4xl font-bold w-full bg-cyan-600 text-white h-16 rounded-lg flex items-center px-4",id:"presentation-competences"}," Présentation des compétences ",-1),N=e("p",null,[l(" Dans le cadre du BUT, diverses compétences doivent être acquises chaque année par les étudiants de cette formation. Dans la suite de ce portfolio, nous allons aborder deux de ces compétences et les développer à travers ce qui a été effectué en stage."),e("br"),l(` Les compétences abordées seront la compétence 1, "Réaliser un développement d'application" et la compétence 2, "Optimiser des applications". Je vais rapidement résumer les attendus et les apprentissages critiques pour chacune de ces compétences. `)],-1),$=e("h3",{class:"text-2xl font-bold w-full bg-cyan-500 text-white h-12 rounded-lg flex items-center px-4"}," Réaliser un développement d'application ",-1),H=e("p",null,[l(" Cette compétence encadre la création d'une solution information pour un client en respectant l'ensemble de ses exigences. Il est nécessaire de faire les choix appropriés que ce soit technologiquement ou que ce soit dans la conception même de l'application(application de principes algorithmiques), mais il est aussi important d'assurer le bon fonctionnement de la solution et sa maintenabilité en fournissant une base de code qui peut évoluer, mais qui est aussi suffisamment documentée pour pouvoir être reprise par quelqu'un d'autre."),e("br"),e("br"),l("Voici un tableau récapitulant les apprentissages critiques (AC) de cette compétence. ")],-1),W=e("h3",{class:"text-2xl font-bold w-full bg-cyan-500 text-white h-12 rounded-lg flex items-center px-4"}," Optimiser des applications ",-1),Y=e("p",null,[l(" Cette compétence encadre l'optimisation des applications en fonction de critères spécifiques tels que le temps d'exécution, la précision, et la consommation de ressources,etc. Il devient nécessaire de formaliser des situations complexes et d'utiliser des structures de données et algorithmes usuels, mais il est aussi important de justifier et de valider les différentes solutions utilisées."),e("br"),e("br"),l("Voici un tableau récapitulant les apprentissages critiques (AC) de cette compétence. ")],-1),R={class:"flex flex-col gap-4"},X=e("h2",{class:"text-4xl font-bold w-full bg-cyan-600 text-white h-16 rounded-lg flex items-center px-4",id:"competence1"}," Compétence 1 ",-1),Q=e("p",null," Dans cette section, je vais aborder le travail réalisé et les éléments relatifs au développement d'une application. Tout d'abord avant de parler de ce que j'ai réalisé, je vais rapidement vous présenter l'état de l'application quand j'ai débuté le stage. ",-1),K=e("h3",{class:"text-2xl font-bold w-full bg-cyan-500 text-white h-12 rounded-lg flex items-center px-4"}," Projet FuzzyGreen ",-1),Z=e("p",null,[l(" Quand je suis arrivé sur ce projet, il m'a d'abord été demandé d'effectuer un état des lieux du code, pour voir ce qui a été réalisé mais aussi de corriger les problèmes actuels du code notamment ce qui concernait l'export en fichier XLSX. Le premier constat que j'ai pu faire concernait la structure du projet, le dossier était mal ordonné, des éléments ne situaient pas aux bons endroits, mais ce n'était pas forcément quelque chose de problématique et qui ne nécessitait pas forcément de consacrer beaucoup de temps à corriger ce problème. Le véritable problème ne situait pas dans la structure du projet mais dans la structure même du code."),e("br"),e("br"),l(" Le projet FuzzyGreen consistait au début à l’analyse des critères d’éco-conception de différents sites web. Il était possible d’injecter une liste définie de sites webs et d’avoir un tableau comportant les valeurs des différents critères calculées pour chacun des sites. A partir des valeurs acquises, l’application appliquait de la logique floue quand c’était possible pour pouvoir comparer les différents sites entre eux en définissant des seuils permettant de savoir si pour chaque critère où la logique floue s’applique, la valeur est “Excellente”, “Bonne”, “Moyenne”, “Mauvaise”. ")],-1),ee={class:"flex flex-row gap-4"},te=e("br",null,null,-1),se={class:"flex flex-row gap-4"},ae=q('<p> Par la suite, il a été décidé lors du stage suivant d’ajouter les fonctionnalités liées à l’analyse de la culturalization, mais aussi à l’analyse du Search Engine Optimization (SEO) qui provenaient d’un projet précédent appelé CAWIS qui a servi à la thèse de M. SAGOT (mon tuteur de stage). Un premier problème est apparu à ce moment-là,le projet CAWIS a été réalisé avec Java et Swing, mais FuzzyGreen quant à lui a été réalisé en JavaScript avec NodeJS et Express, ce qui a mené à des erreurs implémentations et des “code smell”. L’ensemble du projet n’étant pas vraiment maintenable, avec une structure à revoir complètement et souffrant d’une mise à jour de l’ensemble de ses dépendances, j’ai décidé de reprendre le projet du début et de tout réimplémenter au fur et à mesure pour garder une structure de projet simple et efficace, permettant une plus grand maintenabilité et une modularité accrue (dans l’ancienne version, l’ajout d’un critère pouvait mener à casser l’application dans son entièreté.<br><br> On peut se pose la question de “Pourquoi est-ce que le projet FuzzyGreen a été réalisé en JS et NodeJS ?”, mais la raison est assez simple en soit, il était question du plus grand accessibilité de l’application auprès des différents utilisateurs (chercheurs, entreprises, etc.), et de pouvoir avoir une application web hébergée sur un serveur sans avoir à installer le programme sur les machines des utilisateurs.<br><br></p><h3 class="text-2xl font-bold w-full bg-cyan-500 text-white h-12 rounded-lg flex items-center px-4"> Projet HolisticAnalytica </h3><p> Pour la reprise du projet, j’ai décidé de respecter le choix des technologies de base pour garder cette volonté de faire une application web tout en gardant aussi en tête le futur et notamment les stagiaires qui me succéderont. J’ai donc commencé un nouveau projet structuré comme suit: un backend avec <a class="text-cyan-500 underline" href="https://nodejs.org/en">NodeJS</a> + <a class="text-cyan-500 underline" href="https://expressjs.com/fr/">Express</a> suivant la composition vue en cours (routers, controllers, middlewares,services) et un frontend avec NodeJS + <a class="text-cyan-500 underline" href="https://vuejs.org/">Vue3 (Vite)</a> + <a class="text-cyan-500 underline" href="https://tailwindcss.com/">TailwindCSS</a>.<br><br> La première étape à laquelle je me suis attelée a été de faire un meilleur découpage des processus de l’application pour pouvoir faire individuellement les différentes familles de critères, puis l’étape d’après a été de réimplémenter l’ensemble des critères présent dans l’ancienne version si cela était possible ce qui n’était pas le cas de plusieurs critères qui ont été écartés soit par manque de pertinence soit par problème dans la définition du critère et son calcul (dans ce cas, les critères seront ajoutés quand une solution sera trouvée).<br><br> Dans cette section nous allons plus nous centrer sur le fonctionnement de l’application avec la partie frontend et backend et montrer les différences de conception avec la précédente version. Le projet a aussi connu un changement de nom passant de FuzzyGreen à HolisticAnalytica pour moins se centrer sur l’aspect éco-conception et plus sur l’aspect analyse dans son ensemble.<br><br> Pour la conception de l’interface utilisateur, j’ai réalisé différents wireframes qui ont été validés par mon tuteur de stage et l’entreprise avec laquelle nous collaborons sur ce projet. </p>',3),ne={class:"flex flex-row gap-4"},ie=e("br",null,null,-1),le={class:"flex flex-row gap-4"},re=q('<div class="flex flex-col gap-4"><h2 class="text-4xl font-bold w-full bg-cyan-600 text-white h-16 rounded-lg flex items-center px-4" id="competence2"> Compétence 2 </h2></div><div class="flex flex-col gap-4"><h2 class="text-4xl font-bold w-full bg-cyan-600 text-white h-16 rounded-lg flex items-center px-4" id="problemes-solutions"> Problèmes rencontrèes et solutions apportées </h2></div><div class="flex flex-col gap-4"><h2 class="text-4xl font-bold w-full bg-cyan-600 text-white h-16 rounded-lg flex items-center px-4" id="evolution"> Perspectives d&#39;évolution </h2></div>',3),oe=e("div",null,[e("footer",{class:"flex justify-center items-center h-16 text-lg font-semibold text-zinc-300"}," Jessy MOUGAMMADALY © 2024 ")],-1),ue={__name:"PortfolioView",setup(x){const r=y(!1),o=y(!1),d=y([]);function p(){window.scrollY>=window.screen.height-document.getElementById("navbar").offsetHeight?r.value=!0:r.value=!1}function t(m,u){o.value=!0,console.log(m,u);const n=document.getElementById("modal-image");console.log(n),n.src=m,n.alt=u}function b(){o.value=!1}return w(()=>{window.addEventListener("scroll",p);const m=document.querySelectorAll("h2");for(const u of m){const n={id:u.id,text:u.innerText};d.value.push(n)}console.log(d.value)}),j(()=>{window.removeEventListener("scroll",p)}),(m,u)=>(s(),a("div",k,[e("div",{onClick:u[0]||(u[0]=n=>b()),class:_(o.value?"sticky bg-zinc-950 bg-opacity-70 top-0 z-10 flex justify-center items-center h-screen cursor-pointer":"hidden")},S,2),e("div",O,[L,e("div",{id:"navbar",class:_(r.value?"invisible":"sticky flex flex-row items-center justify-center top-0 h-16 w-full bg-zinc-900 overflow-hidden flex-wrap")},[e("div",E,[(s(!0),a(g,null,f(d.value,(n,v)=>(s(),a("a",{key:v,href:"#"+n.id,class:"text-lg font-semibold hover:text-zinc-400 hover:bg-zinc-700 rounded-lg p-2 text-zinc-500"},h(n.text),9,M))),128))])],2)]),e("div",{class:_(r.value?"sticky flex flex-row items-center justify-center top-0 h-16 w-full gap-2 bg-zinc-900 overflow-hidden flex-wrap":"invisible")},[e("div",T,[(s(!0),a(g,null,f(d.value,(n,v)=>(s(),a("a",{key:v,href:"#"+n.id,class:"text-xl font-semibold hover:text-zinc-400 hover:bg-zinc-700 rounded-lg p-2 text-zinc-500"},h(n.text),9,B))),128))])],2),e("div",D,[J,e("div",U,[V,N,$,H,i(z,{headers:[{label:"ac",value:"AC"},{label:"group1",value:"Développer des applications informatiques simples"},{label:"group2",value:"Partir des exigences et aller jusqu’à une application complète"},{label:"group3",value:"Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)"}],rows:[{ac:"AC1",group1:"Implémenter des conceptions simples",group2:"Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",group3:"Choisir et implémenter les architectures adaptées"},{ac:"AC2",group1:"Élaborer des conceptions simples",group2:"Appliquer des principes d’accessibilité et d’ergonomie",group3:"Faire évoluer une application existante"},{ac:"AC3",group1:"Faire des essais et évaluer leurs résultats en regard des spécifications",group2:"Adopter de bonnes pratiques de conception et de programmation",group3:"Intégrer des solutions dans un environnement de production"},{ac:"AC4",group1:"Développer des interfaces utilisateurs",group2:"Vérifier et valider la qualité de l’application par les tests",group3:"-"}]}),W,Y,i(z,{headers:[{label:"ac",value:"AC"},{label:"group1",value:"Appréhender et construire des algorithmes"},{label:"group2",value:"Sélectionner les algorithmes adéquats pour répondre à un problème donné"},{label:"group3",value:"Analyser et optimiser des applications"}],rows:[{ac:"AC1",group1:"Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données…)",group2:"Choisir des structures de données complexes adaptées au problème",group3:"Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire…)"},{ac:"AC2",group1:"Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…)",group2:"Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle…)",group3:"Profiler, analyser et justifier le comportement d’un code existant"},{ac:"AC3",group1:"Formaliser et mettre en œuvre des outils mathématiques pour l’informatique",group2:"Comprendre les enjeux et moyens de sécurisation des données et du code",group3:"Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel…)"},{ac:"AC4",group1:"-",group2:"Évaluer l’impact environnemental et sociétal des solutions proposées",group3:"-"}]})]),e("div",R,[X,Q,K,Z,e("div",ee,[i(c,{onOnClickImage:t,image:{path:"/fg_home1.png",alt:"Page d'accueil de FuzzyGreen",caption:"Page d'accueil de FuzzyGreen avec l'ensemble des familles de critères"}}),i(c,{onOnClickImage:t,image:{path:"/fg_home2.png",alt:"Page d'accueil de FuzzyGreen étendue",caption:"Page d'accueil de FuzzyGreen avec l'ensemble des familles de critères déroulées"}})]),te,e("div",se,[i(c,{onOnClickImage:t,image:{path:"/fg_result1.png",alt:"Page d'analyse 1 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Haut de page"}}),i(c,{onOnClickImage:t,image:{path:"/fg_result2.png",alt:"Page d'analyse 2 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Milieu de page"}}),i(c,{onOnClickImage:t,image:{path:"/fg_result3.png",alt:"Page d'analyse 2 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Bas de page"}})]),ae,e("div",ne,[i(c,{onOnClickImage:t,image:{path:"/wf1.jpg",alt:"Page d'accueil de FuzzyGreen",caption:"Page d'accueil de FuzzyGreen avec l'ensemble des familles de critères"}}),i(c,{onOnClickImage:t,image:{path:"/wf2.jpg",alt:"Page d'accueil de FuzzyGreen étendue",caption:"Page d'accueil de FuzzyGreen avec l'ensemble des familles de critères déroulées"}})]),ie,e("div",le,[i(c,{onOnClickImage:t,image:{path:"/wf3.jpg",alt:"Page d'analyse 1 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Haut de page"}}),i(c,{onOnClickImage:t,image:{path:"/wf4.jpg",alt:"Page d'analyse 2 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Milieu de page"}}),i(c,{onOnClickImage:t,image:{path:"/wf5.jpg",alt:"Page d'analyse 2 de FuzzyGreen",caption:"Page d'analyse de FuzzyGreen - Bas de page"}})])]),re]),oe]))}};export{ue as default};
