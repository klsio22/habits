// Back-end API RESTful
// localhost:3333
// localhost

import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from "./routes";

const app = Fastify()

app.register(cors)
app.register(appRoutes)

/* app.get('/', () => {
  const habits = prisma.habit.findMany()
  return habits
}) */

app.listen({
  port: 3333
}).then(() => {
  console.log("HTTP server listening on localhost:3333")
})