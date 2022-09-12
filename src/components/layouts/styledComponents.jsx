import styled from "styled-components";

export const PostImage = styled.div`
 background-image: url(${props => props.image});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 width: auto;
 height: 250px;
 border-radius: 1%;
`