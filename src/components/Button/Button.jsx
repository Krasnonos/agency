import { Btn } from './Button.styled';

export const Button = ({ children, type = 'button', disabled = false }) => {
  return (
    <Btn type={type} disabled={disabled}>
      {children}
    </Btn>
  );
};
