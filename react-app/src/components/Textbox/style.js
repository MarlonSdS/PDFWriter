import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`

export const Title = styled.input`
    width: 50%;
    min-width: 950px;
    height: 20px;
    border-radius: 5px;
    font-size: 16px;
    color: #969696;
`

export const Mainbox = styled.div`
    margin-top: 10px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 3fr 1fr;
`

export const Sendbutton = styled.button`
    background-color: #6FCAFD;
    height: 70px;
    border-radius: 10px;
    font-size: 42px;
    font-family: sans-serif;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`