import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 1;
        padding: 1;
        font-family: 'poppins', 'sans-serif';
    }

    body {
        width: 98vw;
        height: 98vh;
        display: flex;
        justify-content: center;
        background: #642B73;  
        background: -webkit-linear-gradient(to right, #C6426E, #642B73);  
        background: linear-gradient(to right, #C6426E, #642B73); 
    }
`;

export default Global;
