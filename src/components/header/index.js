import React, { useState } from 'react'
import { useGithub } from '../../hooks/github-hooks'
import * as S from './styled'

export const Header = () => {
  const { getUser } = useGithub()
  const [usernameForSearch, setUsernameForSearch] = useState('')

  const handleSubmit = () => {
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="username"
          onChange={event => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </S.Wrapper>
    </header>
  )
}
