// Back-end API RESTful
// localhost:3333/hobits
// localhost

import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

const app = Fastify()
const prisma = new PrismaClient()

/* 
  metodo http
*/

app.get('/', () => {
  const habits = prisma.habit.findMany({
    where:
    {
      title: {
        startsWith: "Beber"
      }
    }
  })

  return habits
})

app.listen({
  port: 3333
}).then(() => {

  console.log("HTTP server listening on port 3333")
})