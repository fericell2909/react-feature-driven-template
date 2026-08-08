
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  
  const { t } = useTranslation('auth');

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('loginTitle')}</h2>
        </div>
    </div>
  );
};

export default LoginPage;
