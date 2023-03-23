# ManyP (Multiple pages) #

## Table of contents ##

1. Introduction
2. Required dependencies
3. How to get started
4. HTML templates
5. Working with JavaScript
6. Using widgets
7. Using SASS
8. Files copy
9. Production files

## Introduction ##

This project aims to provide an alternative when creating websites.

## Required dependencies ##

* Node.js (https://nodejs.org).
  - Run "node --version" on your operating system console to check if it is already installed.
* Npm CLI (https://docs.npmjs.com/cli).
  - On Windows, it should be included with the Node.js installer. On Linux-based operating systems you will need to install it.
  - Run "npm --version" on your operating system console to validate if it is already installed.
* Python (https://www.python.org).
  - On Windows you must install it and add it to the operating system path.
  - On Linux based operating systems you need to run the following command: "sudo apt-get install python-is-python3".
  - Run "python --version" on your operating system console to confirm if it is already installed.
* Sass (https://sass-lang.com).
  - Run "npm i sass -g" on your operating system console to install it.
  - Run "sass --version" on your operating system console to check if it is already installed.
* ManyP CLI
  - Run "npm i manyp-cli -g".
  - On Linux-based operating systems you must include "--unsafe-perm". The command would look like this: "npm i manyp-cli -g --unsafe-perm".
  - Run "manyp-cli --version" on your operating system console to validate if it is already installed.

## How to get started ##

Through the console of your operating system, enter the directory you want for your project, then run the following command which will load all the files of the "manyp" project.

~~~
manyp-cli install
~~~

Now, you will be able to run the following command which makes your project aware of the changes to automatically run the corresponding commands.

~~~
manyp-cli start
~~~

During the development phase, the project must always keep an eye on changes and to exit you just have to press Ctrl + C. With this you will be able to enter the following URL and see your project for the first time.

**http://localhost:8082/web**

It is also recommended to add the "Livereload" extension to your Google Chrome or Mozilla Firefox browser. This tool will tell these browsers to refresh the page when they detect any changes, but always remember to run the "manyp-cli start" command to prevent the browser from caching, also enable the Livereload extension on it.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

To update "manyp" and its dependencies in the project, you can use the following command:

~~~
manyp-cli update
~~~

This will allow you to run your first test by modifying the "./pages/body.html" file by adding a "Hello World". Modifying this file should look like this:

**File: ./pages/body.html**

```html
<h1>¡Hello World!</h1>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

If everything is working properly, you will see the changes in the browser. Next, each of the most relevant files and folders of the project is explained with a brief description.

* “./grunt/": This contains all the paths that Grunt uses to work.
* “./pages/": This contains all the files and directories that represent each page of the project.
* “./pageTemplates/": This contains all the HTML templates in the project.
* “./src/": This contains all the resources of the project.
  - “./src/css/": Contains all CSS files generated by SASS.
  - “./src/js/": Here you can manage your JavaScript files.
  - "./src/sass/": Here you can manage your SASS files.
  - "./src/template/": Here you can manage your Handlebars files.
* "./web/": This contains the production HTML files and folders.
* "./Gruntfile.js": All Grunt settings are stored here.
* "./package.json": All Node.js configurations are stored here.

## HTML templates ##

All HTML templates in the project are stored in the "./pageTemplates" directory. Please start by opening the file "./pageTemplates/index.html" and take a look. You can check that they are common HTML tags except for "\<\<ROOT-DIR\>\>", "\<!--headHTML--\>" and "\<!--bodyHTML--\>". They are explained below:

* "\<!--headHTML--\>": You can use this declaration to make unique HTML tags in the page head appear when production files are updated.
* "\<!--bodyHTML--\>": You can use this declaration to make unique HTML tags in the body of the page appear when production files are updated.
* "\<\<ROOT-DIR\>\>": You can use this declaration to make the project root appear in its correct place when the production files are updated. So if you type something like "\<\<ROOT-DIR\>\>src/example/main.min.js", it will show something like "../../src/example/main.min.js", according to the location in the root folder.

You can also use the following declarations:

* "\<\<DIR\>\>": This declaration does the same thing as the previous one, but it places the path one level lower in the root folder. This is important because when the production files are created, the “\<\<ROOT-DIR\>\>” declarations will be replaced by “\<\<DIR\>\>”. It is also useful because sometimes you need to know the current path in the browser, especially during development as it will remain so even in production files.

Now, you are about to create your first HTML template, which will contain the following lines and will be called "temp2.html":

**File: ./pageTemplates/temp2.html**

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

You will also need to create a new page by adding a new folder inside "./pages" and calling it "page2". When you create a new page you must also update the "./grunt/html/routes.js" file as follows:

**File: ./grunt/html/routes.js**

```js
exports.a=[
'./pages/*',
'./pageTemplates/*',
'./pages/page2/*'
];
```

You can now modify the following files.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
```

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>
```

Notice how the first line of the "head.html" file displays "\<!--Route: temp2.html--\>", which tells our page which HTML template must use.

**Warning: It is recommended to restart the processes in the console with Ctrl + C and again "manyp-cli start" so it recognizes the new files. If necessary, the changes made must be saved again so the production files are updated. It is also important that, while you are in the development phase, you must constantly check your browser is not using the cache.**

If everything is working properly, you should see your new page via the following URL:

**http://localhost:8082/web/page2**

## Working with JavaScript ##

You will now need to create a JavaScript file for your new page (page2) that will work as your controller. You will need to add a new directory called "page2" that will contain your file and it will be in the path "./src/js/pages/". The file will have the following instructions.

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');
});
```

It is important to update the "./grunt/js/routes.js" and "./grunt/js/files.js" files so the project knows exactly where the new route is. You must do it in the following way:

**File: ./grunt/js/routes.js**

```js
exports.a=[
'./src/js/*',
'./src/js/pages/index/*',
'./src/js/pages/page2/*',
'./src/js/widget/users/*'
];
```

**File: ./grunt/js/files.js**

```js
exports.o={
'src/js/dist/main.min.js': ['src/js/*.js'],
'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
'src/js/dist/pages/page2.min.js': ['src/js/pages/page2/*.js'],
'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js']
};
```

**Warning: It is recommended to restart the processes in the console with Ctrl + C and again "manyp-cli start" so it recognizes the new files. If necessary, the changes made must be saved again so the production files are updated. It is also important that, while you are in the development phase, you must constantly check your browser is not using the cache.**

If everything is working properly, you can check the path "./src/js/dist/pages/" where your production file should be, which you will add to your page by modifying the following file:

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>
```

## Using widgets ##

You should start with the widget located at "http://localhost:8082/web/", which loads a list of test users. You will do this on the previously created "page2" page, which uses the template "./pageTemplates/temp2.html" which should have the Handlebars dependency as follows:

**File: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

Now, you must modify the following file to add the dependencies that this widget needs to work:

**File: ./pages/page2/head.html**

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

Finally, you must load the widget in the container. For this, you must modify the following file:

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');

  oUsersWidget.load();
});
```

If everything is working properly, you will see the changes in the browser.

Now, you will be able to create your first widget and you will do it on page "page2". It is important to remember that these widgets are designed with the Handlebars language and that is why their dependency must be there. If you look at the page "page2 ", you will see that it uses the template "./pageTemplates/temp2.html" and that this template contains this dependency as follows:

**File: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

The widget you will create will be called "albums" and you will start by creating a directory with its name in the paths "./src/template/widget/" and "./src/js/widget/" and then create the following files :

**File: ./src/template/widget/albums/albums.hbs**

```hbs
<h1>Albums</h1>

<ul>
  {{#each albums}}
    <li>{{title}}</li>
  {{/each}}
<ul>
```

**File: ./src/js/widget/albums/albums.js**

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

The "albums.hbs" file contains the template of our widget with Handlebars syntax. The "albums.js" file will serve as the controller for our widget, it contains the "load" function that will be in charge of taking the data from a web service and then loading the template with it.

It's important to update the "./grunt/hbs/routes.js" and "./grunt/hbs/files.js" files so that the project knows where the path for our new template is. You will do it in the following way:

**File: ./grunt/hbs/routes.js**

```js
exports.a=[
'./src/template/*',
'./src/template/widget/users/*',
'./src/template/widget/albums/*'
];
```

**File: ./grunt/hbs/files.js**

```js
exports.o={
'src/template/dist/main.min.js': ['src/template/*.hbs'],
'src/template/dist/widget/users.min.js': ['src/template/widget/users/*.hbs'],
'src/template/dist/widget/albums.min.js': ['src/template/widget/albums/*.hbs']
};
```
It is important as well to update the "./grunt/js/routes.js" and "./grunt/js/files.js" files, so that the project knows where the path of our JavaScript file is. You will do it in the following way:

**File: ./grunt/js/routes.js**

```js
exports.a=[
'./src/js/*',
'./src/js/pages/index/*',
'./src/js/widget/users/*',
'./src/js/widget/albums/*'
];
```

**File: ./grunt/js/files.js**

```js
exports.o={
'src/js/dist/main.min.js': ['src/js/*.js'],
'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js'],
'src/js/dist/widget/albums.min.js': ['src/js/widget/albums/*.js']
};
```

**Warning: It is recommended to restart the processes in the console with Ctrl + C and again "manyp-cli start" so it recognizes the new files. If necessary, the changes made must be saved again so the production files are updated. It is also important that, while you are in the development phase, you must constantly check your browser is not using the cache.**

If everything is working properly, you can check the paths "src/js/dist/widget" and "src/template/dist/widget" which should contain the production files of our new widget and which should be added to page "page2" as it is shown in the following:

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>

<script src="<<ROOT-DIR>>src/template/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/template/dist/widget/albums.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/albums.min.js"></script>
```

Now, you will add the container where the widget will be loaded. You can do it by modifying the following file.

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<section id="albums" data-template="true" data-styles="">
  loaded...
</section>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Finally, you will load the widget into the container by modifying the following file.

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

document.addEventListener('DOMContentLoaded', (e) => {;
  console.log('¡Hello World!');

  oUsersWidget.load();
  oAlbumsWidget.load();
});
```

If everything is working properly, you will see the changes on page "page2".

## Using SASS ##

You can use any framework such as Bootstrap and include it in the HTML templates you need, or you can also create your own styles with SASS as shown in the following example.

You will start with a small modification to the previously created page "page2" and you will do so with the modification of the following file.

**File: ./pages/page2/body.html**

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

See how a new "\<div\>" tag was created to be used in a test. Now add your first SASS lines by modifying the following file.

**File: ./src/sass/main.sass**

```sass
// SASS
.test
  color: white
  background-color: black
```

In this way, you will create the ".test" class. The production file "./src/css/dist/main.min.css", which will be modified automatically, you will need to add to the HTML template used by page "page2" as shown below:

**File: ./pageTemplates/temp2.html**

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

Now add the new class as follows:

**File: ./pages/page2/body.html**

```html
...
<div class="test">
  <h1>Styles test</h1>
</div>
...
```

If everything is working properly, you will see the changes in the browser.

## Files copy ##

This functionality will allow you to create a copy for one or more files. To understand how it works, look at how the following files are modified.

**File: ./grunt/copy/routes.js**

```js
exports.a=[
'./src/css/dist/*'
];
```

The routes loaded into this matrix will instruct Grunt to update when it detects a modification to them. With the following modification, you will be able to specify which files to copy and their destination.

**File: ./grunt/copy/files.js**

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

In "cwd" you will need to add the path where the file or files you want to copy are located. In "src", add the files to copy and in "dest", add the destination of the files.

## Production ##

Follow the steps below in order to get the production files of your project:

1. Remember to make a copy of the development files to follow the next steps to get the production files later.
2. Start by installing the dependencies via the following command in the root of the project:


~~~
npm i
~~~

3. Modify the JavaScript files or other files that require any changes for production.
4. Now run the following command, which will prepare the files for production.


~~~
npm run prepare-dist
~~~

5. Delete the "node_modules" directory and run the following command which will load this same directory but only with the production dependencies:

~~~
npm i --production --ignore-scripts
~~~

6. In the root of the project, delete all the files and keep the following folders.

- node_modules/
- src/
- web/

7. You will also need to remove "src/sass", and inside "src/js" and "src/template" only the "dist" folder will remain.
8. All the contents of the "web" folder will go to the root and then you will delete it.