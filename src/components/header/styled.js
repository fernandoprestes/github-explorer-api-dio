import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  max-width: 1120px;
  width: 100%;
  height: 90px;
  margin: 0 auto;
  padding: 4px;
`
export const WrapperButton = styled.button`
  background: #d9d3d9;
  text-align: center;
  padding: 8px;
  width: 128px;
  height: 36px;
  border-radius: 0 4px 4px 0;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`

export const WrapperInput = styled.input`
  border-radius: 4px 0 0 4px;
  padding: 8px;
  height: 36px;
  background: #ebe8eb;
`
