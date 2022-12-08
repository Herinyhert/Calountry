# C8-39-T-Vue

<p align="center">
  <a href="https://commons.wikimedia.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="200" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">Project carried out with <a href="https://v2.vuejs.org/" target="_blank">Vue2.js</a> and <a href="https://nestjs.com/" target="_blank">Nest.js</a> for support and organization of schedules in week zero of No-Country.</p>


# Front-end Doc:

## Frameworks

- Vue 2
- Vuetify 2

#### Tools

- Vuex
- VueRoute

## Vuex

- Modules

  - auth
  - modals

- Add a module

  - Create file `name.module.js` inside the folder `store/modules.js`

## Helpers:

     formatDate

## Filters:

     date

Use the formatDate helper to create a global filter to format the displayed dates.

```html
<p>{{this.date.date | date}}</p>
```

# Services

- requests Http-

# Run

- npm i
- npm run serve

# Back-end Doc:

## swagger API documentation: <a href="https://calountry-backend-production.up.railway.app/api" target="_blank">Back-End</a>

## Frameworks

- <a href="https://nestjs.com/" target="_blank">Nest.js</a>

### <a href="https://nodejs.org/es/" target="_blank">Node.js</a> package manager:

- <a href="https://www.npmjs.com/" target="_blank">npm</a>

### ORM:

- <a href="https://typeorm.io/" target="_blank">TypeORM</a>

### RDBMS:

- <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>

### Optional tools:

- <a href="https://www.docker.com/" target="_blank">Docker</a>
- <a href="https://tableplus.com/" target="_blank">TablePlus</a>
- <a href="https://www.postman.com/" target="_blank">Postman</a>

# Instructions:

1. Clone the project

2. For installation of global and local packages use ```npm```

3. Clone the file ```.env.template``` and rename it to ```.env```

4. Change environment variables

5. The ORM configured in the project is ```TypeOrm```, the database configured in the ```docker-compose.yaml``` es ```PostgreSQL``` and the GUI is ```TablePlus```

6. Install packages and dependencies ```npm i```

7. Raise the database
```
docker-compose up -d
```

8. Raise the server in development mode:
 ```
 npm run start:dev
 ```
