import { z } from 'zod';

const VariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const InventoryValidationSchema = z.object({
  quantity: z.number().positive(),
  inStock: z.boolean(),
});

export const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantValidationSchema),
  inventory: InventoryValidationSchema,
});
