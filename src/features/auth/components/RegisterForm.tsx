import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useTranslation } from 'react-i18next';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const RegisterForm = () => {
  const { t, i18n } = useTranslation('auth');
  const currentLang = i18n.language;

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting, submitCount },
  } = useForm<RegisterFormData>();

  useEffect(() => {
    if (submitCount > 0) {
      trigger();
    }
  }, [currentLang, trigger, submitCount]);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log('Datos Enviados:', data);
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div key={currentLang} className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('RegisterPage_Title')}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 text-left" noValidate>
        <Input
          id="name"
          label={t('RegisterForm_Name')}
          type="text"
          placeholder={t('RegisterForm_Name_Placeholder')}
          error={errors.name}
          {...register('name', {
            required: t('RegisterForm_Name_Required'),
            minLength: {
              value: 2,
              message: t('RegisterForm_Name_MinLength'),
            },
          })}
        />

        <Input
          id="email"
          label={t('RegisterForm_Email')}
          type="email"
          placeholder="tu@correo.com"
          error={errors.email}
          {...register('email', {
            required: t('RegisterForm_Email_Required'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('RegisterForm_Email_Invalid'),
            },
          })}
        />

        <Input
          id="password"
          label={t('RegisterForm_Password')}
          type="password"
          placeholder="••••••••"
          error={errors.password}
          {...register('password', {
            required: t('RegisterForm_Password_Required'),
            minLength: {
              value: 6,
              message: t('RegisterForm_Password_MinLength'),
            },
          })}
        />

        <Input
          id="confirm_password"
          label={t('RegisterForm_ConfirmPassword')}
          type="password"
          placeholder="••••••••"
          error={errors.confirm_password}
          {...register('confirm_password', {
            required: t('RegisterForm_ConfirmPassword_Required'),
            validate: (value) =>
              value === getValues('password') ||
              t('RegisterForm_ConfirmPassword_Mismatch'),
          })}
        />

        <div className="pt-2">
          <Button type="submit" isLoading={isSubmitting} className="cursor-pointer">
            {t('RegisterForm_Submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;