import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1120px;
  margin: 0 auto;
`

export const WrapperImageProfile = styled.img`
  border-radius: 50%;
  border: 3px solid #ebe8eb;
  width: 256px;
  margin: 16px;
`

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 256px;
  margin-left: 8px;
  color: #ebe8eb;
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 0.8rem;
  }
`

export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #ebe8eb;
    font-weight: 700;
  }
  margin-bottom: 8px;
`

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;

    h4 {
      margin-bottom: 8px;
    }
  }
`
