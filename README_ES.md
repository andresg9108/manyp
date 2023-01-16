# ManyP (En muchas páginas) #

## Contenido ##

1. Introducción.
2. Dependencias.
3. Empezando.
4. Plantillas HTML.
5. Uso de JavaScript.
6. Uso de widgets.
7. Usando SASS.
8. Copia de archivos.
9. Producción.

## Introducción ##

Este proyecto pretende ofrecer una alternativa a la creación de sitios web.


## Dependencias ##

* Node.js (https://nodejs.org).
  - Ejecuta "node --version" en la consola de su sistema operativo para ver si ya está instalado.
* CLI de Npm (https://docs.npmjs.com/cli).
  - En Windows viene con el instalador de Node.js, en los sistemas operativos basados en Linux deberá instalarlo.
  - Ejecuta "npm --version" en la consola de su sistema operativo para ver si ya está instalado.
* Python (https://www.python.org).
  - En Windows debe instalarlo y agregarlo a la ruta del sistema operativo.
  - En los sistemas operativos basados en Linux debe ejecutar el comando "sudo apt-get install python-is-python3".
  - Ejecuta "python --version" en la consola de su sistema operativo para ver si ya está instalado.
* Sass (https://sass-lang.com).
  - Ejecuta "npm i sass -g" en la consola de su sistema operativo para instalarlo.
  - Ejecuta "sass --version" en la consola de su sistema operativo para ver si ya está instalado.
* CLI de ManyP.
  - Ejecuta "npm i manyp-cli -g".
  - En sistemas operativos basados en Linux incluya "--unsafe-perm". El comando quedaría de la siguiente forma "npm i manyp-cli -g --unsafe-perm".
  - Ejecuta "manyp-cli --version" en la consola de su sistema operativo para ver si ya está instalado.

## Empezando ##

Usando la consola de nuestro sistema operativo accederemos al directorio que queramos para nuestro proyecto, luego ejecutaremos el siguiente comando que cargará todos los archivos del proyecto "manyp".

~~~
manyp-cli install
~~~

Ahora podemos ejecutar el siguiente comando que hace que nuestro proyecto esté al tanto de los cambios para ejecutar automáticamente los comandos correspondientes.

~~~
manyp-cli start
~~~

En la fase de desarrollo, el proyecto siempre debe estar atento a los cambios y para salir solo hay que usar Ctrl + C. Con esto podemos ingresar a la siguiente URL y ver nuestro proyecto por primera vez.

**http://localhost:8082/web**

También se recomienda agregar la extensión "Livereload" para "Google Chrome" o "Mozilla Firefox". Esto les indicará a estos navegadores que actualicen la página en el momento en que detecten un cambio, pero siempre recuerde ejecutar el comando "manyp-cli start", evitar que el navegador almacene en caché y habilitar "Livereload" en él.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

Para actualizar "manyp" y sus dependencias en nuestro proyecto, podemos usar el siguiente comando.

~~~
manyp-cli update
~~~

Con esto podemos hacer nuestra primera prueba modificando el archivo "./pages/body.html" agregándole un "Hola Mundo". La modificación de este archivo se vería así.

**Archivo: ./pages/body.html**

```html
<h1>¡Hello World!</h1>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Si todo va bien verá los cambios en el navegador. A continuación se explica cada uno de los archivos y carpetas más relevantes del proyecto con una breve descripción.

* “./grunt/": Contiene todas las rutas que usa Grunt para funcionar.
* “./pages/": Contiene todos los archivos y directorios que representan cada página del proyecto.
* “./pageTemplates/": Contiene todas las plantillas HTML del proyecto.
* “./src/": Contiene todos los recursos del proyecto.
  - “./src/css/": Contiene todos los archivos CSS que genera SASS.
  - “./src/js/": Aquí podemos administrar nuestros archivos JavaScript.
  - "./src/sass/": Aquí podemos administrar nuestros archivos SASS.
  - "./src/template/": Aquí podemos gestionar nuestros archivos de Handlebars.
* "./web/": Contiene los archivos y carpetas HTML de producción.
* "./Gruntfile.js": Almacena todas las configuraciones de Grunt.
* "./package.json": Almacena todas las configuraciones de Node.js.

## Plantillas HTML ##

Todas las plantillas HTML del proyecto se almacenan en el directorio "./pageTemplates". Comenzaremos abriendo el archivo "./pageTemplates/index.html" para echar un vistazo, vemos que son etiquetas HTML comunes a excepción de "\<\<ROOT-DIR\>\>", "\<!--headHTML--\>" y "\<!--bodyHTML--\>". Se explican a continuación.

"\<!--headHTML--\>": Puede usar esta declaración para que las etiquetas HTML únicas en el encabezado de la página aparezcan cuando se actualicen los archivos de producción.
"\<!--bodyHTML--\>": Puede usar esta declaración para que las etiquetas HTML únicas en el cuerpo de la página aparezcan cuando se actualicen los archivos de producción.
"\<\<ROOT-DIR\>\>": Puede usar esta declaración para que cuando se actualicen los archivos de producción aparezca la raíz del proyecto en su lugar. Entonces, si ponemos algo como "\<\<ROOT-DIR\>\>src/example/main.min.js", aparecerá algo como "../../src/example/main.min.js", según la ubicación en la carpeta raíz.

También podemos utilizar las siguientes declaraciones.

"\<\<DIR\>\>": Esta declaración hace lo mismo que la anterior pero coloca la ruta un nivel más abajo en la carpeta raíz. Es importante porque en el momento de sacar los archivos de producción las declaraciones “\<\<ROOT-DIR\>\>” serán reemplazadas por “\<\<DIR\>\>”. También nos sirve porque en ocasiones necesitamos saber la ruta actual en el navegador, sobre todo cuando estamos en fase desarrollo y entendiendo que permanecerá así incluso en los archivos de producción.

Ahora estamos a punto de crear nuestra primera plantilla HTML que contendrá las siguientes líneas y se llamará "temp2.html".

**Archivo: ./pageTemplates/temp2.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 ,user-scalable=no">

    <script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
    <script src="<<ROOT-DIR>>src/js/dist/main.min.js"></script>

    <!--headHTML-->
  </head>
  <body>
    <!--bodyHTML-->
  </body>
</html>
```

También crearemos una nueva página agregando una nueva carpeta dentro de "./pages" y llamándola "page2". Al crear una nueva página también debemos actualizar el archivo "./grunt/html/routes.js" de la siguiente manera.

**Archivo: ./grunt/html/routes.js**

```js
exports.a=[
'./pages/*',
'./pageTemplates/*',
'./pages/page2/*'
];
```

Ahora podemos modificar los siguientes archivos.

**Archivo: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
```

**Archivo: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>
```

Vea como la primera línea del archivo "head.html" muestra "\<!--Route: temp2.html--\>" que le dice a nuestra página que plantilla HTML usar.

**Advertencia: Se recomienda reiniciar los procesos en la consola usando Ctrl + C y nuevamente "manyp-cli start" para que reconozca los archivos nuevos. Si es necesario, hay que volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante mientras estamos en la fase de desarrollo, verificar que nuestro navegador no esté usando el caché.**

Si todo está bien deberíamos ver nuestra página nueva en la siguiente URL.

**http://localhost:8082/web/page2**

## Usando JavaScript ##

Ahora crearemos un archivo JavaScript para nuestra nueva página (page2) que servirá como su controlador. Lo haremos agregando un nuevo directorio llamado "page2" que contendrá nuestro archivo y estará en la ruta "./src/js/pages/", el archivo tendrá las siguientes instrucciones.

**Archivo: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');
});
```

Es importante actualizar los archivos "./grunt/js/routes.js" y "./grunt/js/files.js" para que el proyecto sepa donde está la nueva ruta. Lo haremos de la siguiente manera.

**File: ./grunt/js/routes.js**

```js
exports.a=[
'./src/js/*',
'./src/js/pages/index/*',
'./src/js/pages/page2/*',
'./src/js/widget/users/*'
];
```

**Archivo: ./grunt/js/files.js**

```js
exports.o={
'src/js/dist/main.min.js': ['src/js/*.js'],
'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
'src/js/dist/pages/page2.min.js': ['src/js/pages/page2/*.js'],
'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js']
};
```

**Advertencia: Se recomienda reiniciar los procesos en la consola usando Ctrl + C y nuevamente "manyp-cli start" para que reconozca los archivos nuevos. Si es necesario, hay que volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante mientras estamos en la fase de desarrollo, verificar que nuestro navegador no esté usando el caché.**

Si todo va bien puede verificar la ruta "./src/js/dist/pages/" que debe contener nuestro archivo en versión de producción, el cual agregaremos a nuestra página modificando el siguiente archivo.

**Archivo: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>
```

## Uso de widgets ##

Comenzaremos implementando el widget que se encuentra en "http://localhost:8082/web/" que carga una lista de usuarios de prueba. Lo haremos en la página "page2" previamente creada, la cual usa la plantilla "./pageTemplates/temp2.html" que debería tener la dependencia Handlebars de la siguiente manera.

**Archivo: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

Ahora modificaremos el siguiente archivo agregando las dependencias que este widget necesita para funcionar.

**Archivo: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>

<script src="<<ROOT-DIR>>src/template/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/users.min.js"></script>
```

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Finalmente cargaremos el widget en el contenedor modificando el siguiente archivo.

**Archivo: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');

  oUsersWidget.load();
});
```

Si todo va bien verás los cambios en el navegador.

Ahora vamos a crear nuestro primer widget y lo haremos en la página "page2". Es importante recordar que estos widgets están hechos usando Handlebars y por lo tanto su dependencia debe estar ahí. Si observamos la página "page2 ", veremos que usa la plantilla "./pageTemplates/temp2.html" y que esta plantilla contiene esta dependencia de la siguiente manera.

**Archivo: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

El widget que crearemos se llamará "albums" y comenzaremos creando un directorio con su nombre en las rutas "./src/template/widget/" y "./src/js/widget/" y luego crear los siguientes archivos.

**File: ./src/template/widget/albums/albums.hbs**

```hbs
<h1>Albums</h1>

<ul>
  {{#each albums}}
    <li>{{title}}</li>
  {{/each}}
<ul>
```

**Archivo: ./src/js/widget/albums/albums.js**

```js
"use strict";

var oAlbumsWidget = {};

/*
*/
oAlbumsWidget.load = function(){
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(function(oResponse){ return oResponse.json(); })
  .then(function(oResponse){
    console.log(oResponse);
    var oData = {
      'albums': oResponse
    };
    oAppMain.loadTemplate('widget/albums/albums', '#albums', oData);
  });
}
```

El archivo "albums.hbs" contiene la plantilla de nuestro widget con sintaxis handlebars. El archivo "albums.js" servirá como controlador de nuestro widget, este contiene la función "load" que se encargará de tomar los datos desde un servicio web y luego cargar la plantilla con estos.

Es importante actualizar los archivos "./grunt/hbs/routes.js" y "./grunt/hbs/files.js", esto para que el proyecto sepa dónde está la ruta de nuestra nueva plantilla. Lo haremos de la siguiente manera.

**Archivo: ./grunt/hbs/routes.js**

```js
exports.a=[
'./src/template/*',
'./src/template/widget/users/*',
'./src/template/widget/albums/*'
];
```

**Archivo: ./grunt/hbs/files.js**

```js
exports.o={
'src/template/dist/main.min.js': ['src/template/*.hbs'],
'src/template/dist/widget/users.min.js': ['src/template/widget/users/*.hbs'],
'src/template/dist/widget/albums.min.js': ['src/template/widget/albums/*.hbs']
};
```

Y también es importante actualizar los archivos "./grunt/js/routes.js" y "./grunt/js/files.js", esto para que el proyecto sepa donde está la ruta de nuestro archivo JavaScript. Lo haremos de la siguiente manera.

**Archivo: ./grunt/js/routes.js**

```js
exports.a=[
'./src/js/*',
'./src/js/pages/index/*',
'./src/js/widget/users/*',
'./src/js/widget/albums/*'
];
```

**Archivo: ./grunt/js/files.js**

```js
exports.o={
'src/js/dist/main.min.js': ['src/js/*.js'],
'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js'],
'src/js/dist/widget/albums.min.js': ['src/js/widget/albums/*.js']
};
```

**Advertencia: Se recomienda reiniciar los procesos en la consola usando Ctrl + C y nuevamente "manyp-cli start" para que reconozca los archivos nuevos. Si es necesario, hay que volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante mientras estamos en la fase de desarrollo, verificar que nuestro navegador no esté usando el caché.**

Si todo va bien puedes comprobar en la ruta "src/js/dist/widget" y "src/template/dist/widget" que deben contener los archivos de producción de nuestro nuevo widget y que añadimos a la página "page2" como se muestra a continuación.

**Archivo: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>

<script src="<<ROOT-DIR>>src/template/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/template/dist/widget/albums.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/albums.min.js"></script>
```

Ahora agregaremos el contenedor donde se cargará nuestro widget, esto lo haremos modificando el siguiente archivo.

**Archivo: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<section id="albums" data-template="true" data-styles="">
  loaded...
</section>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Finalmente cargaremos el widget en el contenedor modificando el siguiente archivo.

**Archivo: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');

  oUsersWidget.load();
  oAlbumsWidget.load();
});
```

Si todo va bien verá los cambios en la página "page2".

## Usando SASS ##

Puede usar algún marco como Bootstrap e incluirlo en las plantillas HTML que desee o también puede crear sus propios estilos usando SASS como se muestra en el siguiente ejemplo.

Comenzaremos haciendo una pequeña modificación a la página creada anteriormente "page2" y lo haremos modificando el siguiente archivo.

**Archivo: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<div>
  <h1>Styles test</h1>
</div>

<section id="albums" data-template="true" data-styles="">
  loaded...
</section>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Vea cómo se creó una nueva etiqueta "\<div\>" que nos servirá para nuestra prueba. Ahora agregaremos nuestras primeras líneas SASS modificando el siguiente archivo.

**Archivo: ./src/sass/main.sass**

```sass
// SASS
.test
  color: white
  background-color: black
```

Con esto creamos la clase ".test". El archivo de producción "./src/css/dist/main.min.css" se modificará automáticamente y lo agregaremos a la plantilla HTML que usa la página "page2" como se muestra a continuación.

**Archivo: ./pageTemplates/temp2.html**

```html
...
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0 ,user-scalable=no">

  <link rel="stylesheet" type="text/css" href="<<ROOT-DIR>>src/css/dist/main.min.css" />

  <script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
  <script src="<<ROOT-DIR>>src/js/dist/main.min.js"></script>

  <!--headHTML-->
</head>
...
```

Ahora añadiremos la nueva clase haciendo la siguiente modificación.

**Archivo: ./pages/page2/body.html**

```html
...
<div class="test">
  <h1>Styles test</h1>
</div>
...
```

Si todo va bien verás los cambios en el navegador.

## Copia de archivos ##

Esta funcionalidad nos permitirá crear una copia de uno o más archivos. Para entender cómo funciona vamos a modificar los siguientes archivos.

**Archivo: ./grunt/copy/routes.js**

```js
exports.a=[
'./src/css/dist/*'
];
```

Las rutas que cargamos en esta matriz le indicarán a Grunt que actualice cuando encuentre una modificación en ellas. Con la siguiente modificación indicaremos qué archivos se van a copiar y donde se van a copiar.

**Archivo: ./grunt/copy/files.js**

```js
exports.o={
  cssdist: {
    expand: true,
    cwd: 'src/css/dist/',
    src: ["*.css", "*.css.map"],
    dest: 'dist/'
  }
};
```

En "cwd" debemos agregar la ruta donde se encuentra el archivo o archivos que queremos copiar, en "src" agregaremos los archivos a copiar y en "dest" agregaremos el destino de los archivos.


## Producción ##

Para obtener los archivos de producción de su proyecto siga los pasos a continuación.

1. Recuerda hacer una copia de los archivos de desarrollo para seguir los siguientes pasos y obtener los archivos de producción.
2. Comenzaremos instalando las dependencias usando el siguiente comando en la raíz del proyecto.

~~~
npm i
~~~

3. Modificaremos los archivos javascript u otros que necesiten hacer algún cambio para producción.
4. Ahora ejecutaremos el siguiente comando que se encargará de preparar los archivos para producción.

~~~
npm run prepare-dist
~~~

5. Borramos el directorio "node_modules" y ejecutamos el siguiente comando que cargará este mismo directorio pero sólo con las dependencias de producción.

~~~
npm i --production --ignore-scripts
~~~

6. En la raíz del proyecto eliminaremos todos los archivos y conservaremos las siguientes carpetas.

- node_modules/
- src/
- web/

7. También eliminaremos "src/sass" y dentro de "src/js" y "src/template" solo quedará la carpeta "dist".
8. Todo el contenido de la carpeta "web" irá a la raíz y luego la borramos.