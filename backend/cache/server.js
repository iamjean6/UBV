import { createClient } from "redis";
import dotenv from "dotenv";
const redisURL = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

const client = createClient({ url: redisURL })

client.on("connect", () => console.log("Redis client connecting"));
client.on("ready", () => console.log("Redis client ready"));
client.on("error", (err) => console.error("Redis client error", err));
client.on("end", () => console.log("Redis client disconnected"));
client.on("reconnecting", () => console.log("Redis client reconnecting"));



async function connect() {
    try {
        await client.connect();
    } catch (err) {
        console.error("Error connecting to Redis:", err);
        setTimeout(connect, 5000)
    }
}
connect()

process.on("SIGINT", async () => {
    await client.disconnect()
})

export default client;