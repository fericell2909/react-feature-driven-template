import { useQuery } from '@tanstack/react-query';
import { UserService } from '../services/userService';
import { userKeys } from './userKeys';

export function useUsersQuery(limit: number = 10, skip: number = 0) {
  return useQuery({
    queryKey: userKeys.list(limit, skip),
    queryFn: () => UserService.getAll(limit, skip),
    placeholderData: (previousData) => previousData,
  });
}