import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '../services/userService';
import type { CreateUserPayload } from '../types/user.types';
import { userKeys } from './userKeys';

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateUserPayload) => UserService.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
}