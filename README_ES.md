# ManyP (En muchas páginas) #

## Contenido ##

1. Introducción
2. Dependencias
3. Cómo empezar
4. Plantillas HTML
5. Uso de JavaScript
6. Uso de widgets
7. Uso de SASS
8. Copia de archivos
9. Producción

## Introducción ##

Este proyecto busca ofrecer una alternativa a la creación de sitios web.

## Dependencias ##

* Node.js (https://nodejs.org).
  - Ejecute "node --version" en la consola de su sistema operativo para verificar si ya se encuentra instalado.
* CLI de Npm (https://docs.npmjs.com/cli).
  - En Windows, ya está incluida con el instalador de Node.js. En los sistemas operativos basados en Linux deberá instalarlo.
  - Ejecute "npm --version" en la consola de su sistema operativo para validar si ya está instalado.
* Python (https://www.python.org).
  - En Windows debe instalarlo y agregarlo a la ruta del sistema operativo.
  - En los sistemas operativos basados en Linux debe ejecutar el comando "sudo apt-get install python-is-python3".
  - Ejecute "python --version" en la consola de su sistema operativo para confirmar si ya está instalado.
* CLI de ManyP.
  - Ejecute "npm i manyp-cli -g".
  - En sistemas operativos basados en Linux incluya "--unsafe-perm". El comando quedaría de la siguiente forma: "npm i manyp-cli -g --unsafe-perm".
  - Ejecute "manyp-cli --version" en la consola de su sistema operativo para verificar si ya está instalado.

## Cómo empezar ##

A través de la consola de nuestro sistema operativo, acceda al directorio que desee para su proyecto, luego ejecute el siguiente comando que cargará todos los archivos del proyecto "manyp".

~~~
manyp-cli install
~~~

Ahora podrá ejecutar el siguiente comando que hace que su proyecto esté al tanto de los cambios para ejecutar automáticamente los comandos correspondientes.

~~~
manyp-cli start
~~~

En la fase de desarrollo, el proyecto siempre debe estar atento a los cambios y para salir sólo hay que pulsar Ctrl + C. Con esto podrá ingresar a la siguiente URL y ver su proyecto por primera vez.

**http://localhost:8082/web**

También se recomienda agregar la extensión Livereload para su explorador Google Chrome o Mozilla Firefox. Esto le indicará a estos navegadores que deben actualizar la página en el momento en que detecten un cambio, pero siempre recuerde ejecutar el comando "manyp-cli start", evitar que el navegador almacene en caché y también habilitar la extensión Livereload en él.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

Para actualizar "manyp" y sus dependencias en su proyecto, podrá usar el siguiente comando:

~~~
manyp-cli update
~~~

Con esto podrá realizar su primera prueba al modificar el archivo "./pages/body.html" al agregar un "Hola Mundo". La modificación de este archivo se vería así.

**Archivo: ./pages/body.html**

```html
<h1>¡Hello World!</h1>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Si todo va bien, verá los cambios en el navegador. A continuación se explica cada uno de los archivos y carpetas más relevantes del proyecto con una breve descripción.

* “./grunt/": Contiene todas las rutas que usa Grunt para funcionar.
* “./pages/": Contiene todos los archivos y directorios que representan cada página del proyecto.
* “./pageTemplates/": Contiene todas las plantillas HTML del proyecto.
* “./src/": Contiene todos los recursos del proyecto.
  - “./src/css/": Contiene todos los archivos CSS que genera SASS.
  - “./src/js/": Aquí podrá administrar sus archivos JavaScript.
  - "./src/sass/": Aquí podrá administrar sus archivos SASS.
  - "./src/template/": Aquí podrá gestionar sus archivos de Handlebars.
* "./web/": Contiene los archivos y carpetas HTML de producción.
* "./Gruntfile.js": Almacena todas las configuraciones de Grunt.
* "./package.json": Almacena todas las configuraciones de Node.js.

## Plantillas HTML ##

Todas las plantillas HTML del proyecto se almacenan en el directorio "./pageTemplates". Comience por abrir el archivo "./pageTemplates/index.html" para echar un vistazo. Puede comprobar que son etiquetas HTML comunes a excepción de "\<\<ROOT-DIR\>\>", "\<!--headHTML--\>" y "\<!--bodyHTML--\>". Se explican a continuación:

* "\<!--headHTML--\>": Puede usar esta declaración para que las etiquetas HTML únicas en el encabezado de la página aparezcan cuando se actualicen los archivos de producción.
* "\<!--bodyHTML--\>": Puede usar esta declaración para que las etiquetas HTML únicas en el cuerpo de la página aparezcan cuando se actualicen los archivos de producción.
* "\<\<ROOT-DIR\>\>": Puede usar esta declaración para que, cuando se actualicen los archivos de producción, aparezca la raíz del proyecto en su lugar. Entonces, si escribe algo como "\<\<ROOT-DIR\>\>src/example/main.min.js", aparecerá algo como "../../src/example/main.min.js", según la ubicación en la carpeta raíz.

También podrá utilizar las siguientes declaraciones:

* "\<\<DIR\>\>": Esta declaración hace lo mismo que la anterior, pero coloca la ruta un nivel más abajo en la carpeta raíz. Es importante ya que en el momento de generar los archivos de producción las declaraciones “\<\<ROOT-DIR\>\>” serán reemplazadas por “\<\<DIR\>\>”. También es útil porque en ocasiones se necesita saber la ruta actual en el navegador, sobre todo en la fase de desarrollo ya que permanecerá así incluso en los archivos de producción.

Ahora está a punto de crear su primera plantilla HTML, que contendrá las siguientes líneas y se llamará "temp2.html":

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

También deberá crear una nueva página, para lo que procederá a agregar una nueva carpeta dentro de "./pages" y la llamará "page2". Al crear una nueva página también debe actualizar el archivo "./grunt/html/routes.js" de la siguiente manera:

**Archivo: ./grunt/html/routes.js**

```js
exports.a=[
'./pages/*',
'./pageTemplates/*',
'./pages/page2/*'
];
```

Ahora podrá modificar los siguientes archivos.

**Archivo: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
```

**Archivo: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>
```

Vea cómo la primera línea del archivo "head.html" muestra "\<!--Route: temp2.html--\>", que le indica a nuestra página cuál plantilla HTML usar.

**Advertencia: Se recomienda reiniciar los procesos en la consola con Ctrl + C y nuevamente "manyp-cli start" para que reconozca los nuevos archivos. Si es necesario, hay que volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante que, mientras esté en la fase de desarrollo, verifique que su navegador no esté usando el caché.**

Si todo está bien, debería ver su página nueva en la siguiente dirección URL.

**http://localhost:8082/web/page2**

## Uso de JavaScript ##

Ahora necesitará crear un archivo JavaScript para su nueva página (page2) que servirá como su controlador. Deberá agregar un nuevo directorio llamado "page2" que contendrá su archivo y estará en la ruta "./src/js/pages/". El archivo tendrá las siguientes instrucciones.

**Archivo: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');
});
```

Es importante actualizar los archivos "./grunt/js/routes.js" y "./grunt/js/files.js" para que el proyecto sepa donde está la nueva ruta. Lo hará de la siguiente manera:

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

**Advertencia: Se recomienda reiniciar los procesos en la consola con Ctrl + C y nuevamente "manyp-cli start" para que reconozca los nuevos archivos. Si es necesario, debe volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante que, mientras esté en la fase de desarrollo, verifique que su navegador no esté usando el caché.**

Si todo va bien, puede verificar la ruta "./src/js/dist/pages/" que debe contener su archivo en versión de producción, el cual agregará a su página mediante la modificación del siguiente archivo:

**Archivo: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>
```

## Uso de widgets ##

Comenzará con el widget que se encuentra en "http://localhost:8082/web/", el cual carga una lista de usuarios de prueba. Lo hará en la página "page2" previamente creada, la cual usa la plantilla "./pageTemplates/temp2.html" que debería tener la dependencia Handlebars de la siguiente manera:

**Archivo: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

Ahora modificará el siguiente archivo al agregar las dependencias que este widget necesita para funcionar:

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

Finalmente, cargará el widget en el contenedor, para ello modifique el siguiente archivo:

**Archivo: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');

  oUsersWidget.load();
});
```

Si todo va bien, verá los cambios en el navegador.

Ahora podrá crear su primer widget y lo hará en la página "page2". Es importante recordar que estos widgets están diseñados con el lenguaje Handlebars y por lo tanto su dependencia debe estar ahí. Si observa la página "page2 ", verá que usa la plantilla "./pageTemplates/temp2.html" y que esta plantilla contiene esta dependencia de la siguiente manera:

**Archivo: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

El widget que creará se llamará "albums" y comenzará por crear un directorio con su nombre en las rutas "./src/template/widget/" y "./src/js/widget/" y luego creará los siguientes archivos:

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

El archivo "albums.hbs" contiene la plantilla de nuestro widget con sintaxis Handlebars. El archivo "albums.js" servirá como controlador de nuestro widget, este contiene la función "load" que se encargará de tomar los datos desde un servicio web y luego cargar la plantilla con estos.

Es importante actualizar los archivos "./grunt/hbs/routes.js" y "./grunt/hbs/files.js" para que el proyecto sepa dónde está la ruta de nuestra nueva plantilla. Lo hará de la siguiente manera:

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

También es importante actualizar los archivos "./grunt/js/routes.js" y "./grunt/js/files.js" para que el proyecto sepa donde está la ruta de nuestro archivo JavaScript. Lo hará de la siguiente manera:

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

**Advertencia: Se recomienda reiniciar los procesos en la consola con Ctrl + C y nuevamente "manyp-cli start" para que reconozca los nuevos archivos. Si es necesario, debe volver a guardar los cambios realizados para que los archivos de producción se actualicen. También es importante que, mientras esté en la fase de desarrollo, verifique que su navegador no esté usando el caché.**

Si todo va bien, puede comprobar en las rutas "src/js/dist/widget" y "src/template/dist/widget" que deben contener los archivos de producción de nuestro nuevo widget y que deben añadirse a la página "page2" como se muestra a continuación:

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

Ahora agregará el contenedor donde se cargará el widget, podrá hacerlo con la modificación del siguiente archivo.

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

Finalmente, cargará el widget en el contenedor a través de la modificación del siguiente archivo.

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

Si todo va bien, verá los cambios en la página "page2".

## Uso de SASS ##

Puede usar algún marco como Bootstrap e incluirlo en las plantillas HTML que desee o también puede crear sus propios estilos con SASS como se muestra en el siguiente ejemplo.

Iniciará con una pequeña modificación a la página creada anteriormente "page2" y lo hará con la modificación del siguiente archivo.

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

Vea cómo se creó una nueva etiqueta "\<div\>" que le servirá para la prueba. Ahora agregue sus primeras líneas SASS con la modificación del siguiente archivo.

**Archivo: ./src/sass/main.sass**

```sass
// SASS
.test
  color: white
  background-color: black
```

Con esto, creará la clase ".test". El archivo de producción "./src/css/dist/main.min.css", que se modificará automáticamente, procederá a agregarlo a la plantilla HTML que usa la página "page2" como se muestra a continuación:

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

Ahora añada la nueva clase a través de la siguiente modificación.

**Archivo: ./pages/page2/body.html**

```html
...
<div class="test">
  <h1>Styles test</h1>
</div>
...
```

Si todo va bien, verá los cambios en el navegador.

## Copia de archivos ##

Esta funcionalidad le permitirá crear una copia de uno o más archivos. Para entender cómo funciona, observe cómo se modifican los siguientes archivos.

**Archivo: ./grunt/copy/routes.js**

```js
exports.a=[
'./src/css/dist/*'
];
```

Las rutas que cargó en esta matriz le indicarán a Grunt que debe actualizar cuando encuentre una modificación en ellas. Con la siguiente modificación podrá indicar qué archivos se van a copiar y dónde se van a copiar.

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

En "cwd" deberá agregar la ruta donde se encuentra el archivo o los archivos que desea copiar. En "src", agregue los archivos a copiar y en "dest" añada el destino de los archivos.


## Producción ##

Para obtener los archivos de producción de su proyecto siga los pasos a continuación:

1. Recuerde hacer una copia de los archivos de desarrollo para seguir los siguientes pasos y obtener los archivos de producción.
2. Comience por instalar las dependencias a través del siguiente comando en la raíz del proyecto:

~~~
npm i
~~~

3. Modifique los archivos JavaScript u otros que requieran de algún cambio para producción.
4. Ahora ejecute el siguiente comando que se encargará de preparar los archivos para producción.

~~~
npm run prepare-dist
~~~

5. Borre el directorio "node_modules" y ejecute el siguiente comando que cargará este mismo directorio pero sólo con las dependencias de producción:

~~~
npm i --production --ignore-scripts
~~~

6. En la raíz del proyecto, elimine todos los archivos y conserve las siguientes carpetas.

- node_modules/
- src/
- web/

7. También eliminará "src/sass" y dentro de"src/js" y "src/template" sólo quedará la carpeta "dist".
8. Todo el contenido de la carpeta "web" irá a la raíz y luego la borrará.