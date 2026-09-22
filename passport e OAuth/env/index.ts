import z from "zod";
import "dotenv/config";

const envSchema = z.object({
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);
if (!_env.success) {
  throw new Error("Erro na validação das variáveis de ambiente!");
}

export const env = _env.data;
