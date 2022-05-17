# ImagesSelect

# Angular - Exercise 11

## Utilizzare questa API: <https://shibe.online/>

- Creare un modulo form, con un componente al suo interno che verrà caricato per primo
- In questo componente sarà presente un semplice form, nel quale l'utente potrà inserire:
  - Attraverso una select che animale vuole visualizzare: `Cats, Birds, Shibes`
  - Attraverso un `input number` quante foto vuole visualizzare
- Una volta inseriti questi dati e cliccherà sul pulsante `Invia` l'utente verrà reindirizzato su un altro path `/gallery` che corrisponderà al componente `gallery-component` del modulo, **caricato in lazy-loading**,  `gallery-module`
- Nel componente `gallery-component` l'utente visualizzerà una lista di immagini recuperate dalla chiamata api.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
