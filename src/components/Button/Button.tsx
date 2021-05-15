import React from 'react';
import { StyledButton } from './Button.styles';

export type ButtonProps = {
    onClick: () => void; 
    className?: string; 
    label: string; 
}

export const Button = (props: ButtonProps) => {
  const {
    onClick, 
    className = '', 
    label
  } = props;

  // It's actually important to put the button inside a div
  // And then the button width to 100%, as buttons don't actual work like block elements, even if they are display block 
  return <StyledButton className ={className} >
    <button onClick = {onClick}><span>{label}</span></button>
  </StyledButton>;
};
