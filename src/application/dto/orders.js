import { z } from 'zod';
import { Types } from 'mongoose';

const orderItemDto = z.object({
  product: z.string(),
  quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }),
});

export const createOrderDto = z.object({
  userId: z.string(),
  orderProducts: z.array(orderItemDto).min(1, { message: 'Order must contain at least one item' }),
  total: z.number().positive({ message: 'Total must be a positive number' }),
});