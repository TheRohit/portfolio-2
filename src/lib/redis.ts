import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://usw1-cool-halibut-34470.upstash.io",
  token: process.env.REDIS_KEY!,
});
