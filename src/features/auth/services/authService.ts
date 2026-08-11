import { api } from '@/services/apiClient';
import type { AuthResponseDto, LoginCredentials, RegisterPayload } from '../interfaces/auth.types';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponseDto> => {
    const preformattedCredentials = {
      ...credentials,
      "username": "emilys",
      password: 'emilyspass'
    }

    return api.post<AuthResponseDto>('/auth/login', preformattedCredentials);
  },

  register: async (payload: RegisterPayload): Promise<AuthResponseDto> => {
    return api.post<AuthResponseDto>('/auth/register', payload);
  },

};