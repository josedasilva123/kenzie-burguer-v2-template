import { StyledButton } from '../../../styles/button'
import { StyledForm, StyledTextField } from '../../../styles/form'
import Input from '../Input'

const LoginForm = () => {
  return (
    <StyledForm>
        <Input label="E-mail" type="email" />
        <Input label="Senha" type="password"  />
        <StyledButton $buttonSize='default' $buttonStyle='green'>Cadastrar</StyledButton>
    </StyledForm>    
  )
}

export default LoginForm