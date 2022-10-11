import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import React from "react";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string,

}

const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={'/'}
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.SECONDARY}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
