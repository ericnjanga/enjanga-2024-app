// import { createServer } from 'miragejs';
import { createServer, Model, Request, Server } from "miragejs";
import { AppRegistry } from "./../models"; // Import schema and types

function makeMirageServer() {

  return createServer({
    models: {
      hero: Model, // Define a hero model
    },

    seeds(server: Server) {

      server.create('hero', {
        id: '1',
        title: 'Software Design & Engineering', 
        description: 'I excel at creating custom software for web applications, and web platforms. I have a taste for visual aesthetics and user-friendliness, and enjoy designing as much as coding.', 
      });
    },







    routes() {
      this.namespace = 'api';

      this.get("/hero/:id", (schema: AppRegistry, request: Request) => { 
        return this.schema.heros.find(request.params.id);
      });
    },
  });
}


export default makeMirageServer;
