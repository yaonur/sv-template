import { z } from "zod";

export const schema = z.object({
	password: z.string(),
	email: z.string().email()
  });