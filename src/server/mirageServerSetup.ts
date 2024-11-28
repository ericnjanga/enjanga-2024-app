import { createServer } from 'miragejs';

function makeMirageServer() {
  return createServer({
    routes() {
      this.namespace = 'api';

      this.get('/users', () => {
        return [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Doe' },
        ];
      });
    },
  });
}


export default makeMirageServer;
