import { useEffect } from "react"
import { Grid } from "./Effect"
import imagesLoaded from 'imagesloaded'
import { BlogItem } from "./Blog2"

const apps = [
	{
		title:"AIDINI SHOP", 
		image:location.origin+"/img/1.png",
		description:"Web App shoping",
		author:"Daniel Assani",
		date:"2020-01-17 18:01:34",
	},
	{
		title:"GPT CLONE", 
		image:location.origin+"/img/2.png",
		description:"AI WEB APP clone of  chatgpt with gemini ",
		author:"Daniel Assani",
		date:"2020-01-17 18:01:34",
	},
	{
		title:"CHAT GPT CLONE", 
		image:location.origin+"/img/3.png",
		description:"Web App For AI texte generation",
		author:"Daniel Assani",
		date:"2020-01-17 18:01:34",
	},
	{
		title:"Learn With GEMINI", 
		image:location.origin+"/img/4.png",
		description:"Web App for studing by using gemini ai",
		author:"Daniel Assani",
		date:"2020-01-17 18:01:34",
	},
	{
		title:"Learn With GEMINI", 
		image:location.origin+"/img/5.png",
		description:"Web App for studing by using gemini ai",
		author:"Daniel Assani",
		date:"2020-01-17 18:01:34",
	},
	{
		title:"ONLINE DIGITAL LAB", 
		image:location.origin+"/img/6.png",
		description:"Web App for studing by using gemini ai",
		author:"Daniel Assani",
		date:"2020-01-17 18:01:34",
	},
]

export default function GridLayout(){

    useEffect(()=>{
        
new Grid(document.querySelector('.customgrid') as HTMLElement);

// Preload all the images in the page..
imagesLoaded(document.querySelectorAll('.box__img'), () => document.body.classList.remove('loading'));
    }, [])


    return <>
    <style>
        {`
       



body {
	--color-text: #000;
	--color-bg: #ececec;
	--color-link: #000;
	--color-link-hover: #000;
	--color-info: #000;
	font-family: 'Buenard', serif;
	min-height: 100vh;
	color: #57585c;
	color: var(--color-text);
	background-color: #fff;
	background-color: var(--color-bg);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.preview-open {
	overflow: hidden;
}

/* Page Loader */
.js .loading::before {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	pointer-events: none;
	border-radius: 50%;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}



.hidden-custom {
	position: absolute;
	overflow: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
}

/* Icons */
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
}

main {
	position: relative;
}

.content {
	position: relative;
}



.info {
	margin: 0 0 0 1.25em;
	color: var(--color-info);
}


.customgrid {
	width: 100vw;
	background: #0ff;
	margin: 0px;
	padding:0px;
	padding-bottom: 10rem;
}

.grid__item {
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 0 0 0 0;
	cursor: pointer;
	
}

.box {
	position: relative;
	
}

.box__title {
	margin: 0;
	line-height: 1;
	position: absolute;
	z-index: 100;
}

.box__title-inner {
	display: block;
	position: relative;
	font-weight: normal;
	text-transform: uppercase;
	font-size: 4.15rem;
	letter-spacing: 0.15rem;
	line-height: 1.25;
	font-family: 'Anton', sans-serif;
}

.box__title-inner[data-hover] {
	-webkit-text-stroke: 2px #000;
	text-stroke: 2px #000;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	color: transparent;
}

.box__title-inner::before {
	content: attr(data-hover);
	position: absolute;
	top: 0;
	left: 0;
	height: 0;
	overflow: hidden;
	white-space: nowrap;
	-webkit-text-stroke: 0;
	text-stroke: 0;
	-webkit-text-fill-color: #000;
	text-fill-color: #000;
	color: #000;
	transition: all 0.3s;
}

.grid__item:hover .box__title-inner::before {
	height: 100%;
	width: 100%;
}

.box__text {
	margin: 0;
	position: absolute;
	top: -6rem;
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 0.15rem;
	font-size: 1.75rem;
	margin: 0.5rem 1rem;
	font-family: 'Anton', sans-serif;
}

.box__text-inner {
	position: relative;
	display: block;
	border: 6px solid var(--color-text);
	padding: 0.25rem 1.25rem;
}

.box__text-inner--reverse {
	background: var(--color-text);
	color: var(--color-bg);
}

.box__img {
	display: block;
	flex: none;
	margin: 0 auto;
	max-width: 100%;
	filter: grayscale(1);
	transition: filter 0.3s;
	pointer-events: none;
}

.grid__item:hover .box__img:not(.box__img--original) {
	filter: grayscale(0);
}

.box__shadow {
	position: absolute;
	width: 100%;
	height: 100%;
	top: -1rem;
	left: -1rem;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==);
}

.box__deco {
	font-size: 6rem;
	line-height: 1;
	font-weight: bold;
	position: absolute;
	bottom: -4rem;
	right: -4rem;
	display: none;
}

.box__content {
	position: absolute;
	max-width: 195px;
	font-size: 0.9rem;
	text-align: right;
	display: none;
}

.box__content strong {
	white-space: nowrap;
}

.overlay {
	pointer-events: none;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	overflow: hidden;
}

.overlay--open {
	pointer-events: auto;
}

.overlay__reveal {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: #000;
	position: absolute;
	z-index: 100;
	transform: translate3d(100%,0,0);
}

.overlay__item {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: #ececec;
	opacity: 0;
	display: flex;
	flex-direction: column;
    align-items: center;
    padding: 5rem 5vw;
    justify-content: center;
}

.overlay__item .box {
	max-width: 600px;
	max-height: 100%;
	margin: 0;
}

.overlay__item .box__title {
	bottom: 0;
}

.box__img--original {
	max-height: calc(100vh - 10rem);
	filter: none;
}

.overlay__close {
	position: absolute;
	top: 0;
	right: 0;
	background: none;
	border: 0;
	margin: 1rem;
	padding: 1rem;
	opacity: 0;
}

.overlay__close:focus {
	outline: none;
}

.overlay__content {
	font-size: 1rem;
	line-height: 1.5;
	max-width: 25rem;
	margin: 1rem 0 0 10vw;
}

@media screen and (min-width: 55em) {
	.customgrid {
		display: grid;
		align-items: center;
		padding: 3rem 3rem 5rem 3rem;
		grid-row-gap: 1rem;
		grid-template-columns: repeat(2,calc(100% / 5));
	}
	.grid__item {
		margin: 0;
	}
	.box {
		margin: 4rem;
	}
	.box__title {
		top: -4rem;
		right: -4.5rem;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
	}
	.box__title--straight {
		-webkit-writing-mode: horizontal-tb;
		writing-mode: horizontal-tb;
	}
	.box__title--straight .box__title-inner::before {
		width: 0;
		height: auto;
	}
	.box__title--bottom {
		bottom: -5rem;
		top: auto;
	}
	.box__title--left {
		left: -2rem;
		right: auto;
	}
	.box__text--topcloser {
		top: -5rem;
	}
	.box__text--bottom {
		bottom: -5rem;
		top: auto;
	}
	.box__text--bottomcloser {
		bottom: -5rem;
		top: auto;
	}
	.box__text--right {
		right: 0;
		left: auto;
	}
	.box__text-inner--rotated1 {
		transform: rotate(4deg);
	}
	.box__text-inner--rotated2 {
		transform: rotate(-3deg);
	}
	.box__text-inner--rotated3 {
		transform: rotate(-15deg);
	}
	.box__deco {
		display: block;
	}
	.box__deco--left {
		right: auto;
		left: -3rem;
	}
	.box__deco--top {
		top: 0;
		bottom: auto;
	}
	.overlay__item {
		flex-direction: row;
	}
	.overlay__content {
		font-size: 2.25rem;
		margin-top: 0;
	}
	.overlay__item .box__title--bottom {
		bottom: 0;
	}
}

@media screen and (min-width: 80em) {
	.customgrid {
		grid-template-columns: repeat(3,30%);
	}

	.box {
		margin: 6rem 4.5rem;
	}
	.box__content {
		display: block;
	}
}

@media screen and (max-width: 55em) {
	.content {
		flex-direction: column;
		height: auto;
		min-height: 0;
	}
	.content--fixed {
		position: relative;
		z-index: 1000;
		display: block;
		padding: 0.85em;
	}

}
`}
    </style>
    

		<main>
			
			<div className="content">
				<div className="customgrid">
					{apps.map((app, index)=>(
						<a key={index} className="grid__item" href={`#preview-${index+1}`}>
						<div className="box">
                           
                            <BlogItem key={index} blog={{
								image: app.image,
								title: app.title,
								description: app.description,
								author: app.author,
								date:app.date
							}} />
							
						</div>
					</a>
					))}
				
				</div>
			</div>
			<div className="overlay">
				<div className="overlay__reveal"></div>
				{apps.map((app, index)=>(
					<div key={`preview${index}`} className="overlay__item" id={`preview-${index+1}`}>
					<div className="box">
						<div className="box__shadow"></div>
						<img className="box__img box__img--original" src={app.image} alt="Some image"/>
						<h3 className="box__title"><span className="box__title-inner">{app.title}</span></h3>
						<h4 className="box__text"><span className="box__text-inner">ASDDANIEL</span></h4>
						
					</div>
					<p className="overlay__content">{app.description}</p>
				</div>
				))}
			
				<button className="overlay__close"> <span className="opacity-0">Close</span>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m4 23 5 5 7-7 7 7 5-5-7-7 7-7-5-5-7 7-7-7-5 5 7 7z"/></svg>
                </button>
			</div>
		</main>

    </>
}