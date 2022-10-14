import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './ErorPage.module.scss';

interface ErrorPageProps {
  className?: string,
}

const ErrorPage:FC<ErrorPageProps> = (props) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  // eslint-disable-next-line no-restricted-globals
  const handlePageReload = () => location.reload();

  return (
    <div
      className={classNames(cls.ErrorPage, {}, [className])}
    >
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={handlePageReload}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};

export default ErrorPage;
