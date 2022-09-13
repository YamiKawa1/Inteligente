import styled from 'styled-components'
import unknown from '../../assets/img/unknown.png'

// export const Image = styled.img`
// border-radius: ${props => props.circle ? 50%}
// `

export const HeaderImage = styled.div`
background-image: url(${props=> props.image});
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
border: 1px solid white;
`

export const GeneralButton = styled.button`
background-color: ${props => props.active ? '#692FB3': 'transparent'};
color: ${props => props.active ? 'white' : '#232323'};
height: ${props => props.height};
font-size: 12px;
padding: 0.2em 1em;
margin: 0.4em 0.2em 0 0.2em;
border-radius: 4%;
border: none;
box-shadow: ${props => props.active ? '0 1px 1px 0 rgba(0, 0, 0, 0.2)': 'none'};

`