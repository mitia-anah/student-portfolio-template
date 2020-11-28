import React from 'react'
import styled from 'styled-components'
import PersonalDetails from './component/PersonalDetails'
import Skill from './component/Skill'

const Wrapper = styled.div`

`;

function App() {
    return (
        <Wrapper>
            <PersonalDetails />
            <Skill />
        </Wrapper>
    )
}

export default App