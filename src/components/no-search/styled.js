import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: calc(100vh - 90px);

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`

export const WrapperMessage = styled.div`
  background: #ebe8eb;
  padding: 64px;
  border-radius: 4px;
`

export const MessageTittle = styled.h1`
  font-size: 32px;
`

export const WrapperImgOctcat = styled.img`
  width: 50%;
  height: 100%;
`
