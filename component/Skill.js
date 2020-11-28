import React from 'react'
import styled from 'styled-components'

const SkillContent = styled.div`
max-width: 80%;
background: #ffffff;
margin: auto;
border-radius: 12px;
`;
const ListWrapp = styled.ul`
padding-inline-start: 0;
`;
const List = styled.li`
display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap
`;
const Paragraph = styled.p`
flex-basis: 20%
`;
const Progress = styled.progress`
flex-basis: 60%
`;
function Skill() {
    return (
        <SkillContent>
            <div className="skill-content">
                <h2>Front End</h2>
                <ListWrapp>
                    <List>
                        <Paragraph className='skill__paragraph'>React</Paragraph>
                        <Progress max="100" value="80"></Progress>
                    </List>
                    <List>
                        <Paragraph className='skill__paragraph'>Javascript</Paragraph>
                        <Progress max="100" value="60"></Progress>
                    </List>
                    <List>
                        <Paragraph className='skill__paragraph'>Css</Paragraph>
                        <Progress max="100" value="90"></Progress>
                    </List>
                    <List>
                        <Paragraph className='skill__paragraph'>Vue</Paragraph>
                        <Progress max="100" value="50"></Progress>
                    </List>
                    <List>
                        <Paragraph className='skill__paragraph'>Redux</Paragraph>
                        <Progress max="100" value="60"></Progress>
                    </List>
                    <List>
                        <Paragraph className='skill__paragraph'>React Native</Paragraph>
                        <Progress max="100" value="60"></Progress>
                    </List>
                </ListWrapp>
            </div>
        </SkillContent>
    )
}

export default Skill
