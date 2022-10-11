import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {FC, useState} from "react";
import ThemeSwitcher from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
  className?: string,
}

const Sidebar:FC<SidebarProps> = (props) => {
  const {
    className,
    ...otherProps
  } = props;

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed(prev => !prev)

  const {t} = useTranslation();

  return (
    <div
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
      {...otherProps}
    >
      <button onClick={handleToggle} className={cls.switchButton}>
        {collapsed ? t('Свернуть') : t('Развернуть')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
