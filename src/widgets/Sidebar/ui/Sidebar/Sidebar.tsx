import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string,
}

const Sidebar:FC<SidebarProps> = (props) => {
  const {
    className,
    ...otherProps
  } = props;

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed((prev) => !prev);

  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      data-testid="sidebar"
      {...otherProps}
    >
      <Button
        theme={ThemeButton.Clear}
        data-testid="sidebarToggleButton"
        onClick={handleToggle}
        className={cls.switchButton}
      >
        {collapsed ? t('Свернуть') : t('Развернуть')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
