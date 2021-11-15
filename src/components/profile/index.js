import React from 'react'
import { useGithub } from '../../hooks/github-hooks'
import * as S from './styled'

export const Profile = () => {
  const { githubState } = useGithub()

  return (
    <S.Wrapper>
      <S.WrapperImageProfile
        src={githubState.user.avatar_url}
        alt="avatar user"
      />
      <S.WrapperUserInfo>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserName>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              @{githubState.user.login}
            </a>
          </S.WrapperUserName>
          <p>company</p>
          <p>location</p>
          <p>blog</p>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers: </h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings: </h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists: </h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos: </h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperUserInfo>
    </S.Wrapper>
  )
}
