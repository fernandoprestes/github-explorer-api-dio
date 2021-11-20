import React, { useState } from 'react'
import { useGithub } from '../../hooks/github-hooks'
import * as S from './styled'

export const Header = () => {
  const { getUser } = useGithub()
  const [usernameForSearch, setUsernameForSearch] = useState('')

  const handleSubmit = () => {
    //se não for digitado usuario
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }

  return (
    <S.Header>
      <S.WrapperInput
        type="text"
        placeholder="username"
        onChange={event => setUsernameForSearch(event.target.value)}
      />
      <S.WrapperButton type="submit" onClick={handleSubmit}>
        Buscar
      </S.WrapperButton>
    </S.Header>
  )
}
