import { useQuery } from '@tanstack/react-query';
import { UserService } from '../services/userService';
import { userKeys } from './userKeys';

export function useUserDetailQuery(id: number) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => UserService.getById(id),
    enabled: id > 0,
  });
}