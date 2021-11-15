import React from 'react'
import { useGithub } from '../../hooks/github-hooks'
import { Header } from '../header'
import * as S from './styled'

export const Layout = ({ children }) => {
  const { githubState } = useGithub()

  return (
    <S.WrapperLayout>
      <Header />
      {githubState.loading ? <p>loading</p> : <>{children}</>}
    </S.WrapperLayout>
  )
}
