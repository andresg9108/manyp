**Excuses:** ___I apologize for the English used, my language is Spanish.___

# ManyP (In many Page) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Starting.](#Starting "Starting")
4. [HTML templates.](#HtmlTemplates "HTML templates")
5. [Using JavaScript](#UsingJavaScript "Using JavaScript")
6. [Using Widgets.](#UsingWidgets "Using Widgets")
7. [Using SASS.](#UsingSASS "Using SASS")
8. [Production](#Production "Production")
9. [Using shell.js](#UsingShellJs "Using shell.js")

<span id="Introduction"></span>
## Introduction ##

This project aims to provide an alternative to creating websites.

<span id="Dependencies"></span>
## Dependencies ##

- Node.js (https://nodejs.org).
- Ruby (https://www.ruby-lang.org or https://rubyinstaller.org).
- Python (https://www.python.org): Download Python and add it to the path of your operating system.
- XAMPP (https://www.apachefriends.org/es/index.html).
- Execute "gem install sass" on the console of your operating system.
- Execute "npm i grunt -g" on the console of your operating system.
- Execute "npm i install-here -g" on the console of your operating system.

<span id="Starting"></span>
## Starting ##

We will start by opening the "XAMPP Control Panel" and starting the "Apache" service. Now we can create a folder called "myproject" in the path of the "XAMPP" file and which is normally in the path "../xampp/htdocs/" if it has not been changed. With the folder ready, we can now access it using the console of your operating system and execute the following command that brings up all the files from the "manyp" project.

~~~
install-here manyp-ag
~~~

Then we execute the following command that brings all the dependencies of the "manyp" project.

~~~
npm i
~~~

Now we can execute the following command that makes our project be aware of the changes to automatically execute the corresponding commands.

~~~
npm start
~~~

In the development phase, the project must always be attentive to changes and to exit you just have to use Ctrl + C. With this we can enter the following URL and see our project for the first time.

**http://localhost/myproject/web/**

Also it is recommended to add the extension "Livereload" for "Google Chrome" or "Mozilla Firefox". This will tell these browsers to refresh the page the moment they detect a change, but always remember to run the "npm start" command and activate "Livereload" in your browser.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

With this we can make our first test modifying the file "./pages/body.html" adding a "Hello World" to it. Modifying this file would look like this.

**File: ./pages/body.html**

```html
<h3>¡Hello World!</h3>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

If all goes well, you will see the changes in the browser. Each of the most relevant files and folders in the project is explained below with a description.

* "../pages/": Contains all the files that represent each page of the project.
* "../pageTemplates/": Contains all the "HTML" templates of the project.
* "../src/": Contains all the resources of the project.
	- "../src/css/": Contains all the CSS files that SASS generates.
	- "../src/js/": Contains all the JavaScript files for the project.
	- "../src/sass/": Contains all the SASS files of the project.
	- "../src/template/": Contains all the "Handlebars" templates of the project.
* "../web/": Contains project production files.
* "../Gruntfile.js": Stores all grunt settings.
* "../package.json": Stores all Node.js settings.

<span id="HtmlTemplates"></span>
## HTML templates ##

All HTML templates for the project are stored in the "./pageTemplates" directory. We will start by opening the file "./pageTemplates/index.html" to take a look, we see that they are common HTML tags with the exception of "&lt;&lt;ROOT-DIR&gt;&gt;", "&lt;!&#45;&#45;headHTML&#45;&#45;&gt;" and "&lt;!&#45;&#45;bodyHTML&#45;&#45;&gt;" explained below.

* "&lt;&lt;ROOT-DIR&gt;&gt;": You can use this instruction so that when the production files are updated, the root of the project appears instead. So if you put "&lt;&lt;ROOT-DIR&gt;&gt;src/example/main.min.js" it will appear "../../src/example/main.min.js" in the production files and no matter in what folder tree location is located, he will put you the root of the project.
* "&lt;!&#45;&#45;headHTML&#45;&#45;&gt;": You can use this statement so that the unique HTML tags in the page header appear instead when the production files are updated.
* "&lt;!&#45;&#45;bodyHTML&#45;&#45;&gt;": You can use this statement so that the unique HTML tags in the page body appear instead when the production files are updated.

Now we are about to create our first HTML template that will contain the following lines and will be called "temp2.html".

**File: ./pageTemplates/temp2.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 ,user-scalable=no">

    <script src="<<ROOT-DIR>>node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
    <script src="<<ROOT-DIR>>src/js/dist/main.min.js"></script>

    <!--headHTML-->
  </head>
  <body>
    <!--bodyHTML-->
  </body>
</html>
```

We will also create a new page by adding a new folder inside "./pages" and calling it "page2". When creating a new page we must also update the "aRoutePy" array in the "Gruntfile.js" file as follows.

**File: ./Gruntfile.js**

```js
...
var aRoutePy = [
  './pages/*',
  './pageTemplates/*',
  './pages/page2/*'
];
...
```

Now we can modify the following files.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
```

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>
```

See how the first line of the "head.html" file shows "&lt;!&#45;&#45;Route: temp2.html&#45;&#45;&gt;" which tells our page which HTML template to use.

***Warning: It is recommended to restart the processes in the console using Ctrl + C and again "npm start", this so that they recognize the changes in the file "Gruntfile.js". If it is necessary to re-save the changes made for the production files to be updated. It is also important while we are in the development phase to verify that our browser is not using the cache, since this will prevent the page from being updated correctly.***

If all is well we should see our new page at the following URL.

**http://localhost/myproject/web/page2**

<span id="UsingJavaScript"></span>
## Using JavaScript ##

Now we will create a JavaScript file for our new page (page2) that will serve as its controller and we will do it with JQuery syntax. We will do this by adding a new directory called "page2" that will contain our file and will be in the path "./src/js/pages/", the file will have the following instructions.

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

$(function(){
  console.log('¡Hello World!');
});
```

It is important to add our new directory to the "Gruntfile.js" file as follows.

**File: ./Gruntfile.js**

```js
...
var aRouteJs = [
    './src/js/*', 
    './src/js/pages/index/*', 
    './src/js/pages/page2/*', 
    './src/js/widget/users/*' 
];
var oRouteJs = {
    'src/js/dist/main.min.js': ['src/js/*.js'],
    'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
    'src/js/dist/pages/page2.min.js': ['src/js/pages/page2/*.js'],
    'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js']
};
...
```

***Warning: It is recommended to restart the processes in the console using Ctrl + C and again "npm start", this so that they recognize the changes in the file "Gruntfile.js". If it is necessary to re-save the changes made for the production files to be updated. It is also important while we are in the development phase to verify that our browser is not using the cache, since this will prevent the page from being updated correctly.***

If all goes well, you can check the path "./src/js/dist/pages/" that should contain our file in production version which we will add to our page by modifying the following file.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>
```

<span id="UsingWidgets"></span>
## Using Widgets ##

We will start to implement the widget found in "http://localhost/myproject/web/" which will load a list of test users, we will do it on the page "page2" previously created. For this we will modify the following file adding the dependencies that this widget needs to work.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>

<script src="<<ROOT-DIR>>src/template/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/users.min.js"></script>
```

Now we will add the container where our widget will be loaded, we will do this by modifying the following file.

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Finally we will load the widget in the container by modifying the following file.

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

$(function(){
  console.log('¡Hello World!');

  oUsersWidget.load();
});
```

***THE DOCUMENTATION IS BEING REVIEWED FROM HERE***

<span id="UsingSASS"></span>
## Using SASS ##

...(Pending for documentation)...

<span id="Production"></span>
## Production ##

...(Pending for documentation)...

<span id="UsingShellJs"></span>
## Using shell.js ##

...(Pending for documentation)...