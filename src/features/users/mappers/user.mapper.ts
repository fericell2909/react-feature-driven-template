import type { UserDTO, UserListResponseDTO } from '../schemas/user.schema';
import type { User, PaginatedResponse } from '../types/user.types';

export function mapUserToDomain(dto: UserDTO): User {
  return {
    id: dto.id,
    fullName: `${dto.firstName} ${dto.lastName}`.trim(),
    email: dto.email,
    avatar: dto.image,
  };
}

export function mapUserListToDomain(dto: UserListResponseDTO): PaginatedResponse<User> {
  return {
    data: dto.users.map(mapUserToDomain),
    total: dto.total,
    skip: dto.skip,
    limit: dto.limit,
  };
}