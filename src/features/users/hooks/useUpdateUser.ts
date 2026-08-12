import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '../services/userService';
import type { UpdateUserPayload } from '../types/user.types';
import { userKeys } from './userKeys';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateUserPayload) => UserService.update(payload),
    onSuccess: (updatedUser) => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      queryClient.invalidateQueries({ queryKey: userKeys.detail(updatedUser.id) });
    },
  });
}