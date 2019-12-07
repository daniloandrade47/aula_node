import Hapi from '@hapi/hapi';
import HapiSequelize from 'hapi-sequelizejs';
import HapiRouter from 'hapi-router';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite:blog.sqlite');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.register([
    {
      plugin: HapiSequelize,
      options: [
        {
          name: 'blog',
          models: [
            'src/api/**/**.models.js'
          ],
          sequelize,
          sync: true
        }
      ]
    },
    {
      plugin: HapiRouter,
      options: {
        routes: 'src/api/**/**.routes.js'
      }
    }
  ]);

  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      return 'Hello hapi';
    }
  });

  await server.start();

  console.log('\n\nServer running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
})

init();
