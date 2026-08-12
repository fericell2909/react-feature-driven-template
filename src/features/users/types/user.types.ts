export interface User {
  readonly id: number;
  readonly fullName: string;
  readonly email: string;
  readonly avatar?: string;
}

export interface PaginatedResponse<T> {
  readonly data: readonly T[];
  readonly total: number;
  readonly skip: number;
  readonly limit: number;
}

export interface CreateUserPayload {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
}

export interface UpdateUserPayload {
  readonly id: number;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
}