import styled from "styled-components";

const Text = styled.p`
    font-weight: 400;
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 0;
    text-align: center;
    background-color: blueviolet;
    color: ${ props => props.color || 'whitesmoke'};

    &::after {
        content: '◀';
        margin: 0 10px;
    }
`

export { Text };