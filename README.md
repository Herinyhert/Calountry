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

#### Herramientas

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


<a href="https://calountry-backend-production.up.railway.app/api" target="_blank">Back-End</a>
