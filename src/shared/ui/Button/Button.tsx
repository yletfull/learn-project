import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
  Clear = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ThemeButton,
}

const Button:FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeButton.Clear,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
