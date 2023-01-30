import { TextField } from '@mui/material'
import React from 'react'
import { StyledButton } from '../../../styles/button'
import { StyledForm } from '../../../styles/form'

const LoginForm = () => {
  return (
    <StyledForm>
        <TextField label="Nome" />
        <TextField label="Senha" type="password" />
        <StyledButton $buttonSize='default' $buttonStyle='green'>Logar</StyledButton>
    </StyledForm>    
  )
}

export default LoginForm