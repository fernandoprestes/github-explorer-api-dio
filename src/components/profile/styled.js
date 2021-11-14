import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const WrapperImageProfile = styled.img`
  border-radius: 50%;
  width: 256px;
  margin: 16px;
`

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 256px;
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
  h3 {
    margin-right: 8px;
  }

  a{
    color: #121212;
    font-weight: 700;
  }
`

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`
