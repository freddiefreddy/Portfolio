import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react';
import styled from 'styled-components';
import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

import "./Navbar.css";


const ButtonGroup = styled.div`display: flex;`;
const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const types = ['Android', 'Flutter', 'Vue JS', 'Laravel', 'Python', 'Django'];
function Projects() {
    const [activeIndex, setActiveIndex] = useState(1);
    const checkActive  = (index, className) => activeIndex === index ? className : "";
    const handleClick = (index) => setActiveIndex(index);
  
    return(
        <section id="projects">
            <div className='container px-5 py-10 mx-auto text-center lg:px-10'>
            {/* <div className="flex flex-col w-full mb-20"> */}
          
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Apps I've Built
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Below is  tabulated list of applications have worked on
                </p>
        {/* </div> */}
            {/* <ButtonGoup>
                {
                    types.map(type =>(
                        <Tab 
                            key={type}
                            active={activeIndex === type}
                            onClick={() => setActiveIndex(type)}
                            className={`tab ${types[activeIndex]} `}
                        >
                       {type}
                        </Tab>
                    ))
                    
                }
            </ButtonGoup> */}

            <ButtonGroup>
                <button  className={`tab ${checkActive(1, "active")}`} onClick={() => handleClick(1)}>
                    Python                    
                </button>

                <button  className={`tab ${checkActive(2, "active")}`} onClick={() => handleClick(2)}>
                    Laravel                    
                </button>

                <button  className={`tab ${checkActive(3, "active")}`} onClick={() => handleClick(3)}>
                    Android                    
                </button>

                <button  className={`tab ${checkActive(4, "active")}`} onClick={() => handleClick(4)}>
                    Flutter                    
                </button>

                <button  className={`tab ${checkActive(5, "active")}`} onClick={() => handleClick(5)}>
                    Django                 
                </button>

                <button  className={`tab ${checkActive(6, "active")}`} onClick={() => handleClick(6)}>
                    Vue-JS                    
                </button>


            </ButtonGroup>
            
            <div className="panels bg-transparentbg-transparent">
                <div className={`panel ${checkActive(1, "active")}`}>
                   { projects.map((project, index) => (
                    <div className="flex flex-wrap -m-4">
                        
                            {
                            project.Python.map((p, i) => (
                                <a
                                href={p.link}
                                key={p.image}
                                className="sm:w-1/2 w-100 p-4">
                                    <div className="flex relative">
                                        <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={p.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {p.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {p.title}
                                        </h1>
                                        <p className="leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        
                        </div>
                    ))}
                </div>

                <div className={`panel ${checkActive(2, "active")}`}>
                   { projects.map((project, index) => (
                    <div className="flex flex-wrap -m-4">
                        
                            {
                            project.Laravel.map((p, i) => (
                                <a
                                href={p.link}
                                key={p.image}
                                className="sm:w-1/2 w-100 p-4">
                                    <div className="flex relative">
                                        <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={p.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {p.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {p.title}
                                        </h1>
                                        <p className="leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        
                        </div>
                    ))}                                       
                </div>
                <div className={`panel ${checkActive(3, "active")}`}>
                { projects.map((project, index) => (
                    <div className="flex flex-wrap -m-4">
                        
                            {
                            project.Android.map((p, i) => (
                                <a
                                href={p.link}
                                key={p.image}
                                className="sm:w-1/2 w-100 p-4">
                                    <div className="flex relative">
                                        <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={p.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {p.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {p.title}
                                        </h1>
                                        <p className="leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        
                        </div>
                    ))}                    
                </div>

                <div className={`panel ${checkActive(4, "active")}`}>
                { projects.map((project, index) => (
                    <div className="flex flex-wrap -m-4">
                        
                            {
                            project.Flutter.map((p, i) => (
                                <a
                                href={p.link}
                                key={p.image}
                                className="sm:w-1/2 w-100 p-4">
                                    <div className="flex relative">
                                        <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={p.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {p.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {p.title}
                                        </h1>
                                        <p className="leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        
                        </div>
                    ))}                    
                </div>

                <div className={`panel ${checkActive(5, "active")}`}>
                    { projects.map((project, index) => (
                        <div className="flex flex-wrap -m-4">
                        
                            {
                            project.Django.map((p, i) => (
                                <a
                                href={p.link}
                                key={p.image}
                                className="sm:w-1/2 w-100 p-4">
                                    <div className="flex relative">
                                        <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={p.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {p.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {p.title}
                                        </h1>
                                        <p className="leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        
                        </div>
                    ))}
                </div>

                <div className={`panel ${checkActive(6, "active")}`}>
                    { projects.map((project, index) => (
                        <div className="flex flex-wrap -m-4">
                        
                            {
                            project.Vue.map((p, i) => (
                                <a
                                href={p.link}
                                key={p.image}
                                className="sm:w-1/2 w-100 p-4">
                                    <div className="flex relative">
                                        <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={p.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {p.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {p.title}
                                        </h1>
                                        <p className="leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        
                        </div>
                    ))}                 
                </div>

            </div>
            
        </div>  
        </section>

    );
    
}

export default Projects;
