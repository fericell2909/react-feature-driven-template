import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import PATHS from '@/routes/paths';

const LoginPage = () => {
  const { t } = useTranslation('auth');

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md text-center">
        <LoginForm />

        <div className="mt-6 text-sm text-gray-600">
          {t('LoginPage_NoAccount')}{' '}
          <Link
            to={PATHS.auth.register}
            className="font-medium text-blue-600 hover:underline"
          >
            {t('LoginPage_RegisterLink')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;