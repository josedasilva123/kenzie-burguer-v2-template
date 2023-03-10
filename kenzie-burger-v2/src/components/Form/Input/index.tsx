import React from 'react'
import { StyledTextField } from '../../../styles/form'
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps{
    label: string;
    type?: string;
    error?: string;
}

const Input = ({label, type, error}: IInputProps) => {
  return (
    <fieldset>
        <StyledTextField label={label} type={type} /> 
        {error && <StyledParagraph fontColor='red'>{error}</StyledParagraph>}
    </fieldset>
  )
}

export default Input