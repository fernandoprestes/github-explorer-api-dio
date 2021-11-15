import React from 'react'
import * as S from './styled'

export const RepositoryItem = ({ name, linkTo, fullname }) => {
  return (
    <S.Wrapper>
      <h2>{name}</h2>
      <h4>{fullname}</h4>
      <a href={linkTo} target="_blank" rel="noreferrer">
        github/{fullname}
      </a>
    </S.Wrapper>
  )
}
