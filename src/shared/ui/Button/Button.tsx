import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

interface ButtonProps extends MUIButtonProps {
  className?: string,
}

const Button:FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props;

  return (
    <MUIButton
      className={classNames(className)}
      {...otherProps}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
