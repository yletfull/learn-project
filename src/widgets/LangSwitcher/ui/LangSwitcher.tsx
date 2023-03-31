import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string,
}

const LangSwitcher:FC<ThemeSwitcherProps> = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggle}
      variant="contained"
      fullWidth
    >
      {t('Язык')}
    </Button>
  );
};

export default LangSwitcher;
