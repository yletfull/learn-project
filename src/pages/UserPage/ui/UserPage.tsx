import React from 'react';
import { useTranslation } from 'react-i18next';

function UserPage() {
  const { t } = useTranslation('user');

  return (
    <div>
      {`${t('Пользователь')} TestUser`}
    </div>
  );
}

export default UserPage;
