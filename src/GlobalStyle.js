import { findByLabelText } from '@testing-library/react'
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    body {
        margin: 0;
        text-align: center;
        font-family: sans-serif;
        color: #fff;
        background: #0F2027;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    .App {
        width: 100%;
        max-width: 450px;
        margin: auto;
        height: 100vh;
        display: grid;
        grid-template-rows: auto auto 1fr;
    }
    h1 {
        margin: 15px;
        font-size: 1.6rem;
        font-weight: lighter;
        color: #df860b;

    }
    input {
    display: block;
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
    }
    button {
        padding: 10px 15px;
        margin: 10px;
        margin-bottom: 20px;
        
        font-size: 1rem;
        background-color: #ce3800;
        border-radius: 4px;
        color: #fff;
        outline: none;
        border: none;
         &:active {
            transform: scale(1.1)
        }
    }
`