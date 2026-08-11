import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useTranslation } from 'react-i18next';
import type { LoginCredentials } from '@/features/auth/interfaces/auth.types';
import { useLogin } from '@/features/auth/hooks/useLogin';

type LoginFormData = LoginCredentials;

export const LoginForm = () => {
  const { t, i18n } = useTranslation('auth');
  const currentLang = i18n.language;
  
  const { mutate: login, isPending, error } = useLogin();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, submitCount },
  } = useForm<LoginFormData>();

  useEffect(() => {
    if (submitCount > 0) {
      trigger();
    }
  }, [currentLang, trigger, submitCount]);

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <div key={currentLang} className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('LoginForm_Title')}</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 text-left" noValidate>
        <Input
          id="email"
          label={t('LoginForm_Email')}
          type="email"
          placeholder="tu@correo.com"
          error={errors.email}
          {...register('email', {
            required: t('LoginForm_Email_Required'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('LoginForm_Email_Invalid'),
            },
          })}
        />

        <Input
          id="password"
          label={t('LoginForm_Password')}
          type="password"
          placeholder="••••••••"
          error={errors.password}
          {...register('password', {
            required: t('LoginForm_Password_Required'),
            minLength: {
              value: 6,
              message: t('LoginForm_Password_MinLength'),
            },
          })}
        />

        <div className="pt-2">
          <Button type="submit" isLoading={isPending} className="cursor-pointer">
            {t('LoginForm_Submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;