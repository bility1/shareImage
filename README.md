# ShareImage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

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
##### Mon resumé 
En résumé
On déclare les propriétés d'un component en haut de sa classe, et on les initialise dans la méthode  ngOnInit()

La méthode  ngOnInit()  est appelée une fois par instance de component au moment de la création de cette instance.

La string interpolation avec les doubles accolades  {{ }}  permet d'insérer la valeur d'une propriété TypeScript dans le template.

L'attribute binding permet de lier la valeur d'une propriété TypeScript à un attribut HTML, en mettant l'attribut entre crochets  []  et en passant le nom de la propriété.

En Angular, il y a deux façons principales d'exploiter une donnée venant du TypeScript dans le template : 
la string interpolation et la liaison par attribut, 
ou attribute binding. Mais pour afficher des données, il faut d'abord des données !

Pour lier une méthode à un événement d'un élément du template, mettez l'événement entre parenthèses  () 
et passez la méthode en argument ; ex. : (click)="onClickButton()"
Question 2
Qu'est-ce que la string interpolation ?


La string interpolation permet d'afficher la valeur d'une variable dans le DOM.
Quelle syntaxe utilise-t-on pour la string interpolation ?

Les doubles accolades  {{ }}
Qu'est-ce que la liaison par attribut, ou attribute binding ?
Elle permet de lier la valeur d'une variable à un attribut d'un élément du DOM
Que met-on autour de l'attribut dans le HTML pour la liaison par attribut, ou attribute binding ?
Les crochets  []
Question 6
Qu'est-ce que la liaison par événement, ou event binding ?

Elle permet de lier une méthode TypeScript à un événement du DOM.
Que met-on autour du nom de l'événement dans le HTML pour la liaison par événement, ou event binding ?
Les parenthèses  ()
Une directive est une classe qui vient ajouter du comportement à l'élément sur lequel elle est posée. 
L'astérisque au début du nom  *ngIf  nous montre qu'il s'agit d'une directive structurelle, 
qui viendra donc toucher à la structure du document.
