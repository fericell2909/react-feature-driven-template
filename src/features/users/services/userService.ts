import { api } from '@/services/apiClient';
import { UserSchema, UserListResponseSchema } from '../schemas/user.schema';
import { mapUserToDomain, mapUserListToDomain } from '../mappers/user.mapper';
import type { User, PaginatedResponse, CreateUserPayload, UpdateUserPayload } from '../types/user.types';

export const UserService = {
  async getAll(limit: number = 10, skip: number = 0): Promise<PaginatedResponse<User>> {
    const rawData = await api.get('/users', { params: { limit, skip } });
    
    const validation = UserListResponseSchema.safeParse(rawData);
    if (!validation.success) {
      console.error('[UserService] Paginated Validation Error:', validation.error.format());
      throw new Error('Estructura de paginación inválida del servidor.');
    }

    return mapUserListToDomain(validation.data);
  },

  async getById(id: number): Promise<User> {
    const rawData = await api.get(`/users/${id}`);
    
    const validation = UserSchema.safeParse(rawData);
    if (!validation.success) {
      console.error('[UserService] User Validation Error:', validation.error.format());
      throw new Error('Estructura de usuario inválida.');
    }

    return mapUserToDomain(validation.data);
  },

  async create(payload: CreateUserPayload): Promise<User> {
    const rawData = await api.post('/users/add', payload);
    
    const validation = UserSchema.safeParse(rawData);
    if (!validation.success) {
      console.error('[UserService] Create Validation Error:', validation.error.format());
      throw new Error('Respuesta de creación inválida.');
    }

    return mapUserToDomain(validation.data);
  },

  async update({ id, ...payload }: UpdateUserPayload): Promise<User> {
    const rawData = await api.put(`/users/${id}`, payload);
    
    const validation = UserSchema.safeParse(rawData);
    if (!validation.success) {
      console.error('[UserService] Update Validation Error:', validation.error.format());
      throw new Error('Respuesta de actualización inválida.');
    }

    return mapUserToDomain(validation.data);
  },

};