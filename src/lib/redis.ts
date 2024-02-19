import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://usw1-above-colt-34099.upstash.io",
  token: process.env.REDIS_KEY!,
});
