import fs from "fs";
import OpenAI from "openai";
import {
  buildDocsSystemPrompt,
  buildSystemPrompt,
  buildUserPrompt,
} from "./prompt.js";
import type { DietPlanRequest } from "./types.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
  timeout: 2 * 60 * 1000,
});

export async function* generateDietPlan(input: DietPlanRequest) {
  const diretrizes = fs.readFileSync("knowledge/diretrizes.md", "utf-8");

  const data = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Você é um assistente de nutrição." },
      { role: "user", content: "Quem é você?" },
    ],
    temperature: 0.6,
    stream: false,
  });

  console.log(data.choices[0]?.message.content);
  return "ok";
}

// Chama a função para testar
generateDietPlan({} as DietPlanRequest).next().then(() => {
  console.log("Finalizado");
});