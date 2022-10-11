import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {FC, useState} from "react";
import ThemeSwitcher from "widgets/ThemeSwitcher";

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

  return (
    <div
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
      {...otherProps}
    >
      <button onClick={handleToggle} className={cls.switchButton}>
        {collapsed ? 'Свернуть' : 'Развернуть'}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
