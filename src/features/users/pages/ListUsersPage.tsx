import { useTranslation } from 'react-i18next';
import { ListUsers } from '@/features/users/components/ListUsers';

const ListUsersPage = () => {
  const { t } = useTranslation('users');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('ListUsersPage_Title', 'Gestión de Usuarios')}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            {t('ListUsersPage_Subtitle', 'Visualiza, administra y controla los usuarios del sistema.')}
          </p>
        </div>
        <ListUsers />
      </div>
    </div>
  );
};

export default ListUsersPage;