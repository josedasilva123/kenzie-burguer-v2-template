import { StyledButton } from "../../../styles/button"
import { StyledForm, StyledTextField } from "../../../styles/form"
import Input from "../Input"

const RegisterForm = () => {
  return (
    <StyledForm>
        <Input label="Nome" />
        <Input label="E-mail" />
        <Input label="Senha" type="password" error="Ocorreu um erro" />
        <Input label="Confirmar a senha" type="password" />
        <StyledButton $buttonSize='default' $buttonStyle='gray'>Cadastrar</StyledButton>
    </StyledForm>   
  )
}

export default RegisterForm