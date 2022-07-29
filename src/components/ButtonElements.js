import styled from 'styled-components'
// import {Link} from 'react-scroll'



export const Button = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#78546D' : '#004643')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#BDEFBF': '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#345995' : '#345995')}
    }
    `