import React from 'react'
import InteriorDs from '../assets/Interior-ds.png'
import styled from 'styled-components'

const ProjectContent = styled.div`
max-width: 80%;
background: #ffffff;
margin: auto;
border-radius: 12px
`;

const ContextWrapper = styled.div`
padding: 1rem;
margin: 1rem;
`;

const Ul = styled.ul`
display: flex;
flex-direction: row;
padding-inline-start: 0;
`;
const Image = styled.img`
    max-width: 100%;
    min-width: 100%;
    border-radius: 12px;
`;

const DemoButton = styled.button`
background: #5C94E1;
border-radius: 12px;
padding: 1rem;
color: #ffffff;
width: 100px;
border-style: none
`;
const CodeButton = styled.button`
border: 1px solid #5C94E1;
box-sizing: border-box;
padding: 1rem;
border-radius: 12px;
width: 100px;
`;
function Project() {
    return (
        <ProjectContent>
            <ContextWrapper>
                <div>
                    <picture>
                        <Image src={InteriorDs} width='500px' />
                    </picture>
                    <Ul>
                        <li className="project-list"># html</li>
                        <li className="project-list"># css</li>
                        <li className="project-list"># Responsive</li>
                    </Ul>
                </div>
                <div>
                    <h2 className="my-gallery">
                        My Gallery
                    </h2>
                    <p className="project-paragraph">In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io</p>
                    <ul className='buttons'>
                        <DemoButton>
                            <a href="https://interior-consultant-rosny.netlify.app/">Demo</a></DemoButton>
                        <CodeButton>Code</CodeButton>
                    </ul>
                </div>

            </ContextWrapper>
        </ProjectContent>
    )
}

export default Project
