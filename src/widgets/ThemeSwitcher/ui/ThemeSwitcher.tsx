import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string,
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ThemeButton.Clear}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon /> }
    </Button>
  );
}

export default ThemeSwitcher;
