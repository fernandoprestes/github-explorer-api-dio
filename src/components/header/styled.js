import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    padding: 4px;
  
  }
  button {
    background: #ccc;
    text-align: center;
    padding: 4px;
    width: 128px;
    border-radius: 0 4px 4px 0;
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
