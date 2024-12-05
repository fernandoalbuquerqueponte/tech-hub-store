import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NEXT_AUTH_SECRET: z.string(),
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string(),
  STRIPE_SECRET_KEY: z.string(),
  STRIPE_WEBHOOK_SECRET_KEY: z.string(),
  APP_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variable",
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error("Invalid environment variable");
}

export const env = parsedEnv.data;
