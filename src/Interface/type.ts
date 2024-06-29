import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(3),
    price: z.number().min(0),
    image: z.string().url(),
    description: z.string().min(3),
})