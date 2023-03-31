import React from 'react';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          {t('О сайте')}
        </AppLink>
        <AppLink
          to="/user"
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Мой профиль')}
        </AppLink>
      </div>
    </div>
  );
}

export default Navbar;
