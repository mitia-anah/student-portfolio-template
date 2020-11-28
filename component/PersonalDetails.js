import React from 'react'
import styled from 'styled-components'
import Rosny from '../assets/Rosny.jpg'


const HeaderStyle = styled.header`
max-width: 80%;
background: #ffffff;
margin: auto;
border-radius: 12px
`;
const Figure = styled.img`
max-width: 100%;
min-width: 100%;
border-radius: 12px
`;
const HeaderContent = styled.div`
padding: 1rem;
margin: 1rem
`;

function PersonalDetails() {
    return (
        <HeaderStyle>
            <HeaderContent>
                <h1>
                    <Figure src={Rosny} />
                </h1>
                <div className="work-and-job">
                    <h2 className="name">Rosny Ratsianompo</h2>
                    <p className="job">Front-end developer</p>
                </div>
                <div className="contact">
                    <p className="email">
                        <i className="ri-mail-fill"></i>
                        <span>rosny.rat@onja.org</span>
                    </p>
                    <p className="phone">
                        <i className="ri-phone-fill"></i>
                        <span>(+261)34 64 651 57</span>
                    </p>
                </div>
                <div className="description">
                    <p className="text">willing to be a coder.......</p>
                </div>
            </HeaderContent>
        </HeaderStyle>
    )
}

export default PersonalDetails
