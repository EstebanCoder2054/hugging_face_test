import { InferenceClient } from "@huggingface/inference";
const client = new InferenceClient(process.env.HF_TOKEN);

export async function chatCompletion() {
  const response = await client.chatCompletion({
  messages: [
        {
          role: "system",
          content: "Respond like you are William Shakespeare",
        },
        {
          role: "user",
          content: "Tell me a fun fact about the internet",
        },
    ],
    model: "katanemo/Arch-Router-1.5B:hf-inference",
  });

  const finalText = response.choices[0].message.content;
  return finalText;
  
}