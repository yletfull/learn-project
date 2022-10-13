import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';

function NotFoundPage() {
  const { t } = useTranslation('notFound');

  return (
    <div className={cls.NotFound}>
      {t('Страница не найдена')}
    </div>
  );
}

export default NotFoundPage;
