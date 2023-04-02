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

Ajout optionnel 
Vous pouvez ajouter des propriétés optionnelles à une classe en y ajoutant un point d'interrogation  ?

Ajouter la directive  *ngIf  à un élément (qui peut aussi être un component) dit à Angular d'ajouter ou non cet élément au DOM selon la condition que vous lui passez,
par exemple  <p *ngIf="size === 'large'">

La directive  *ngFor  vous permet d'insérer un élément dans le DOM pour chaque élément dans un tableau.

La syntaxe  let element of array  vous donne accès à l'élément 
de chaque itération, vous permettant 
de l'injecter dans un component, par exemple.

La directive  [ngClass]  permet d'ajouter dynamiquement des classes à des éléments HTML.

[ngClass]  prend un objet en argument où les clés sont des noms de classe CSS, et les valeurs sont les conditions 
selon lesquelles les classes doivent être appliquées.

*ngIf  pour ajouter un élément ou non au DOM selon une condition donnée ;

*ngFor  pour ajouter autant d'éléments au DOM qu'il y a d'éléments dans un tableau.

Vous avez utilisé des directives par attribut pour gérer dynamiquement les styles :

[ngStyle]  pour paramétrer des styles selon des valeurs venant du TypeScript ;

[ngClass]  pour ajouter et retirer des classes CSS selon une condition donnée.

Un pipe permet de formater l'affichage d'une donnée sans modifier la donnée sous-jacente.

DecimalPipe – facilite l'affichage de nombres avec des chiffres après la virgule (qui met une virgule plutôt qu'un point, par exemple).

PercentPipe – formate les chiffres en pourcentage.

CurrencyPipe – permet d'afficher des nombres sous forme de monnaie très facilement.


les servives permettent de centraliser les données et la logique pour les différents domaines 
pour créer un service @Injectable() à une classe
dans le constructeur private userService: userService