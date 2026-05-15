/* 

2 tipos de prompts:
system prompt = intruções para a IA sobre o comportamento esperado, regras, etc
user prompt = informações específicas do usuário, como dados de entrada, preferências, etc
docs system prompt = informações sobre a base de conhecimento, como formato dos dados, etc

*/
 
import type { DietPlanRequest } from "./types";


export function buildSystemPrompt() {
  return [
    'Você é Nutri-AI, um agente de nutrição que cria planos semanais.',
    'Regras fixas:',
    '-- Sempre responda em texto markdown legível para humanos',
    '-- Use # para títulos e - para itens de lista.',
    '-- A dieta deve conter exatamente 7 dias.',
    '-- Cada dia deve ter 4 refeições fixas: café_da_manhã, almoço, lanche, jantar.',
    '-- SEMPRE inclua ingredientes comuns no Brasil.',
    '-- NUNCA inclua calorias e macros de cada refeição, apenas as refeições.',
    '-- Evite alimentos ultraprocessados.',
    '-- Não responda em JSON ou outro formato, apenas texto markdown legível para humanos.',
    '-- Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais personalizado.'
  ].join("\n");
}


export function buildUserPrompt(input: DietPlanRequest) {
  return [
    "Gere um plano alimentar personalizado com base nos dados:",
    `- Nome: ${input.nome}`,
    `- Idade: ${input.idade} anos`,
    `- Peso em kg: ${input.peso_kg}`,
    `- Altura em cm: ${input.altura_cm}`,
    `- Sexo: ${input.sexo}`,
    `- Nível de Atividade: ${input.nivel_atividade}`,
    `- Objetivo: ${input.objetivo}`,
  ].join("\n");
}

export function buildDocsSystemPrompt(docs: string) {
    return `documento técnico para ajudar na geração de dietas:${docs}`;
}