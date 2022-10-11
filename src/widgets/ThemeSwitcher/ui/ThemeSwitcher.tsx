import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string,
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.Clear}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon /> }
    </Button>
  );
};

export default ThemeSwitcher;
