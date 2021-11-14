import React from 'react'
import * as S from './styled'

export const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImageProfile
        src="https://avatars.githubusercontent.com/u/28740596?v=4"
        alt="avatar user"
      />
      <S.WrapperUserInfo>
        <div>
          <h1>Nome</h1>
          <S.WrapperUserName>
            <h3>Username:</h3>
            <a href="https://github.com/fernandoprestes" target="_blank" rel="noreferrer">User name</a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers: </h4>
            <span>5</span>
          </div>
          <div>
            <h4>Stared: </h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings: </h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperUserInfo>
    </S.Wrapper>
  )
}
