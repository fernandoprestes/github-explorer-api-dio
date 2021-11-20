import React from 'react'
import * as S from './styled'
import octocatErro from '../../assets/images/octocat-error.svg'

export const NoSearch = () => {
  return (
    <S.Wrapper>
      <S.WrapperMessage>
        <S.MessageTittle>404</S.MessageTittle>
        <p>Nenhum usuário encontrado</p>
      </S.WrapperMessage>
      <S.WrapperImgOctcat src={octocatErro} alt="" />
    </S.Wrapper>
  )
}
