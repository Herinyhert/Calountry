<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  
# Description

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

### Herramientas opcionales:

- <a href="https://www.docker.com/" target="_blank">Docker</a>
- <a href="https://tableplus.com/" target="_blank">TablePlus</a>
- <a href="https://www.postman.com/" target="_blank">Postman</a>

# Instructions:

1. Clone the project

2. For installation of global and local packages use ```npm```

3. Clone the file ```.env.template``` and rename it to ```.env```

4. Change environment variables

5. The ORM configured in the project is ```TypeOrm```, the database configured in the ```docker-compose.yaml``` es ```PstgreSQL``` and the GUI is ```TablePlus```

6. Install packages and dependencies ```npm i```

7. Levantar la base de datos
```
docker-compose up -d
```

8. Levantar el servidor en modo desarrollo:
 ```
 npm run start:dev
 ```
