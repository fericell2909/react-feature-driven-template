import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const { t } = useTranslation('auth');

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md text-center">
        <RegisterForm />
        <div className="mt-6 text-sm text-gray-600">
          {t('RegisterPage_HasAccount')}{' '}
          <Link
            to="/auth/login"
            className="font-medium text-blue-600 hover:underline"
          >
            {t('RegisterPage_LoginLink')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;