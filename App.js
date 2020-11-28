import React from 'react'
import styled from 'styled-components'
import PersonalDetails from './component/PersonalDetails'
import Project from './component/Project'
import Skill from './component/Skill'


const Wrapper = styled.div`

`;

function App() {
    return (
        <Wrapper className="wrapper">
            <PersonalDetails className='personalDetails' />
            <Project className="project" />
            <Skill className='skill' />
        </Wrapper>
    )
}

export default App