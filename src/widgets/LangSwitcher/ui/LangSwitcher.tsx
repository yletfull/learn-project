import React from "react";
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string,
}

const LangSwitcher = ({className}: ThemeSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
        theme={ThemeButton.Clear}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
  )
};

export default LangSwitcher;
