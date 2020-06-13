**Excuses:** ___I apologize for the English used, my language is Spanish.___

# ManyP (In many Page) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Starting.](#Starting "Starting")
4. [HTML templates.](#HtmlTemplates "HTML templates")

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

<span id="Starting"></span>
## Starting ##

In principle, don't forget to open the "XAMPP Control Panel" and start the "Apache" service. Now we can clone or download the files of the "manyp" project in the "XAMPP" file path, which is "../xampp/htdocs/" and it would remain "../xampp/htdocs/manyp". The link to the "manyp" project can be found below:

[ManyP project.](https://github.com/andresg9108/manyp "ManyP project")

Now we will go to "../xampp/htdocs/manyp" using the console of our operating system and execute the following command, which will load all the dependencies of the "manyp" project.

***npm i***

Now we can execute the following command, which listens to our project.

***npm start***

In the development phase, the project must always be listening to changes. With this we can already enter the following URL and see our project for the first time.

http://localhost/manyp/web/

Also, it is recommended to add the "Livereload" extension for "Google Chrome" or "Mozilla Firefox". This will instruct these browsers to refresh the page the moment they detect a change, but remember to listen to the project with the "npm start" command and activate "Livereload" in the browser you want.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

With this we can do our first test modifying the following file.

File: ../xampp/onep/src/template/body.hbs

~~~
<h2>Hello World!!!</h2>
~~~

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

We'll start by opening the file "../pageTemplates/index.html", and as you can see we have common HTML tags except "<!-headHTML->" and "<!-bodyHTML->". These tell the template that the labels are in the files "../pages/head.html", "../pages/body.html" and will be added respectively. Knowing this, we will modify the following files:

**File: ../pages/head.html**

~~~
<!--Route: index.html-->
<title>My first page</title>
~~~

**File: ../pages/body.html**

~~~
<main>
  <header id="head" data-template="true" data-styles="">
    loaded...
  </header>
  <section id="body" data-template="true" data-styles="">
    loaded...
  </section>

  <div>
  	<h1>Hello World!!!</h1>
  </div>

  <footer id="foot" data-template="true" data-styles="">
    loaded...
  </footer>
</main>
~~~

If everything goes well you will see the changes in the browser.

Now we are going to create a new folder called "page2" in the "../pages/" directory, for this we will stop listening in the console using Ctrl+C and proceed to create the mentioned folder and modify the file "./Gruntfile .js ", adding a new line to the array "aRoutePy" like this:

~~~
...
var aRoutePy = [
    './pages/*',
    './pageTemplates/*',
    './pages/page2/*'
];
...
~~~

See how the line "'./pages/page2/'" was added to the array "aRoutePy", what this does is tell the program that every time a change is made to the folder "page2" the command is executed "grunt process-html" and we must do this every time we create a new folder in the path "../pages/".

If we run "grunt process-html" again, two new files will be automatically created inside the new folder that we will modify next, let's not forget to run the command "npm start" again so that we don't have to do it manually.

**File: ../pages/page2/head.html**

~~~
<title>This is my page number 2.</title>
<script>
	console.log('Hello World!!!');
</script>
~~~

**File: ../pages/page2/body.html**

~~~
<h1>Hello, this is my page number 2.</h1>
~~~

If everything goes well, we will already have two pages and you can see this in the browser using the following URL:

http://localhost/manyp/web/page2

Last but not least, we will create a new template. In the path "../pageTemplates/" we will add a new file called "temp2.html", which will be a new template and will contain the following tags:

**File: ../pageTemplates/temp2.html**

~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--headHTML-->
  </head>
  <body>
  	<div style="background-color: blue; color: white;">
  		<!--bodyHTML-->
  	</div>
  </body>
</html>
~~~

If you don't specify a template for each page you create, the program will default to the template "../pageTemplates/index.html", but if you want it to take the template "temp2.html" for the page "page2", the following should be added in the first line of the file "../pages/page2/head.html".

**File: ../pages/page2/head.html**

~~~
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
<script>
	console.log('Hello World!!!');
</script>
~~~

See how the first line indicates "<!-Route: temp2.html->", which tells this page which template to use, which in this case is "temp2.html. If all goes well, we will have two pages using two different templates.