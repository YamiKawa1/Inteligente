import styled from 'styled-components'
import LS1 from '../../assets/img/LS1.jpg'
import unknown from '../../assets/img/unknown.png'

// export const Image = styled.img`
// border-radius: ${props => props.circle ? 50%}
// `

export const HeaderImage = styled.div`
background-image: url(${LS1});
width: inherit;
height: 35vh;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
border-radius: 1% 1% 0 0;
`

export const Picture = styled.div`
background-image: url(${props=> props.image || unknown});
width: ${props=> props.width};
height: ${props=> props.height};
border-radius: ${props=> props.shape === 'circle' ? '50%': '3px'};
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`

export const GeneralButton = styled.button`
background-color: ${props => props.active ? '#9c9ee2': 'transparent'};
color: ${props => props.active ? 'white' : '#232323'};
height: ${props => props.height};
font-size: 12px;
padding: 0.2em 0.8em;
margin: 0 0.2em;
border-radius: 3%;
border: none;
box-shadow: ${props => props.active ? '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.19)': 'none'};

&hover: {
    
}
`