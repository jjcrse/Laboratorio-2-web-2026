<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).




Preguntas del lab

Respuestas

1. Porque no tiene que ir a buscar nada a la base de datos porque este servicio ya le llega el pedido completo (alguien más lo buscó antes) y su único trabajo es mirar ese pedido y decidir qué tan urgente es con esas reglas que le puse es simple de comparar números y estados. No necesita conectarse a nada pa hacer eso
2. Es como el intermediario. Primero busca el pedido en la base de datos (y si no existe, avisa con el error 404). Luego le pasa ese pedido a OrderPriorityService pa que diga qué prioridad tiene. Y al final junta toda esa información en una sola respuesta ordenada para entregarla
3. totalPending es cuántos pedidos pendientes hay en total, aunque sean 50. showing es cuántos se están mostrando en ese momento en la respuesta que como máximo son 5 si hay 3 pedidos pendientes los dos números son iguales pero si hay 20, totalPending dice 20 pero showing solo dice 5
4. Porque las pruebas no necesitan datos reales guardados en ninguna base de datos. Simplemente se inventa un pedido de mentiras directo en el código (por ejemplo "pendiente con 3 unidades") y se le pregunta al servicio qué prioridad le pondría Como el servicio no se conecta a nada externo, no hace falta tener la base de datos prendida para probarlo
5. El controller se llenaría de lógica que no le corresponde además de recibir la petición y responder también tendría que saber las reglas de negocio (qué cantidad es prioridad alta, media, etc) Eso hace el código más difícil de entender de probar y de reutilizar en otra parte del proyecto si algún día se necesita la misma regla en otro lugar



Utilizacion de la IA:


Herramienta consultada:Chat GPT
1. Para que sirve Promise.all en el codigo?,osea no entiendo bien el concepto de Promise.all

Respuesta:
¿Por qué Promise.all?
Normalmente, si pides dos cosas a la base de datos, se hace una y luego la otra (una espera a que termine la primera para empezar la segunda). Promise.all es un concepto de JavaScript que permite decir "lanza estas dos peticiones al mismo tiempo, y avísame cuando ambas hayan terminado". Es más eficiente porque no hay que esperar en fila.

Decisión:
la utilize para que no se demore tanto poorque pense que a la hora de testear se iba a demorar y queria que hiciera las dos funciones al mismo tiempo entonces por eso utilice proimise all

Herramienta consultada: VidaAI
2. No entiendo bien qué es una prueba unitaria ni
para qué sirve la función buildOrder en mi archivo de tests, ¿me lo explicas?

Respuesta:
Se explicó que una prueba
unitaria comprueba automáticamente si una parte del código (en este
caso classify()) devuelve el resultado esperado ante distintas
entradas, y que buildOrder es solo una función de ayuda para no repetir
código al crear pedidos de prueba en cada caso.


Decisión:
Entendí la lógica de mis propias pruebas para
poder explicarlas si me preguntan, sin modificar el código que ya
tenía escrito.

Herramienta consultada: Claude

3. ¿Qué diferencia hay entre usar count() y
countBy() en TypeORM? Los vi los dos en clase y no tengo claro cuándo usar cada uno.

Respuesta:Se explicó que ambos cuentan
registros que cumplen una condición, pero se escriben distinto:
count() recibe un objeto con where, mientras que countBy() recibe
directamente la condición sin necesidad de envolverla en where. Hacen lo mismo, es solo una forma más corta de escribirlo.

Decision:Entendí que son intercambiables y revisé mi
propio código para asegurarme de que la consulta esté completa segúnlo que pide el taller.
