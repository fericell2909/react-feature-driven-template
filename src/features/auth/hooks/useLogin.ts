import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import type { LoginCredentials, User, AuthResponseDto } from '../interfaces/auth.types';
import { useAuth } from '@/app/hooks/useAuth';
import PATHS from '@/routes/paths';

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (response: AuthResponseDto & Record<string, unknown>) => {


      const { ...userData } = response;

      login(userData as unknown as User, response?.accessToken, response?.refreshToken);

      navigate(PATHS.dashboard.dashboard, { replace: true });
    },
    onError: (error: Error) => {
      console.error('[Login Mutation Error]:', error.message);
    },
  });
};