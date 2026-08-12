import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  image: z.string().url().optional(),
}).passthrough();

export const UserListResponseSchema = z.object({
  users: z.array(UserSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
}).passthrough();

export type UserDTO = z.infer<typeof UserSchema>;
export type UserListResponseDTO = z.infer<typeof UserListResponseSchema>;