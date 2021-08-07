import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import "./database"
import { router } from "./routes";

// npm install @types/express
const app = express();


app.use(express.json());
//middleware
app.use(router);
//middleware de erro sempre passa 4 paramêtros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

app.listen(3001, () => console.log("Rodando na porta 3001"));

/**
* GET    => Buscar um informação
* POST   => Inserir (Criar) uma informação
* PUT    => Alterar uma informação
* DELETE => Remover um dado
* PATCH  => Alterar uma infromação especifica
*/

/**
 * Tipos de parâmetros
 * Routes Params => http://localhost:3000/produtos/6548975618
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom&
 *
 * Body Params => {
 *  "name" = "teclado",
 *  "description" = "teclado bom"
 * }
 */

  // app.get("/teste", (request, response) => {
  //   // Request => Entrando
  //   // Resonse => Saindo
  //   return response.send("Hello World!");
  // });

// app.post("/test-post", (request, response) => {
//   return response.send("Hello Post");
// })
