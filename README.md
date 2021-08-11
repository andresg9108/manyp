**Excuses:** ___I apologize for the English used, my language is Spanish.___

# ManyP (In many Page) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Starting.](#Starting "Starting")
4. [HTML templates.](#HtmlTemplates "HTML templates")
5. [Handlebars templates.](#HandlebarsTemplates "Handlebars templates")
6. [Using SASS.](#UsingSASS "Using SASS")
7. [Using JavaScript](#UsingJavaScript "Using JavaScript")
8. [Using shell.js](#UsingShellJs "Using shell.js")
9. [Production](#Production "Production")

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

With this we can do our first test modifying the following file.

**File: ../src/template/section2.hbs**

~~~
<h3>Hello World!!!</h3>
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

All HTML templates for the project are stored in the "./pageTemplates" directory. We will start by opening the file "./pageTemplates/index.html" to take a look, we see that they are common HTML tags with the exception of "&lt;&lt;ROOT-DIR&gt;&gt;", "&lt;!&#45;&#45;headHTML&#45;&#45;&gt;" and "&lt;!&#45;&#45;bodyHTML&#45;&#45;&gt;" explained below.

* "&lt;&lt;ROOT-DIR&gt;&gt;": You can use this instruction so that when the production files are updated, the root of the project appears instead. So if you put "&lt;&lt;ROOT-DIR&gt;&gt;src/example/main.min.js" it will appear "../../src/example/main.min.js" in the production files and no matter in what folder tree location is located, he will put you the root of the project.
* "&lt;!&#45;&#45;headHTML&#45;&#45;&gt;": You can use this statement so that the unique HTML tags in the page header appear instead when the production files are updated.
* "&lt;!&#45;&#45;bodyHTML&#45;&#45;&gt;": You can use this statement so that the unique HTML tags in the page body appear instead when the production files are updated.

Now we are about to create our first HTML template that will contain the following lines and will be called "temp2.html".

**File: ./pageTemplates/temp2.html**

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

We will also create a new page by adding a new folder inside "./pages" and calling it "page2". When creating a new page we must also update the "aRoutePy" array in the "Gruntfile.js" file as follows.

~~~
...
var aRoutePy = [
	'./pages/*',
	'./pageTemplates/*',
	'./pages/page2/*'
];
...
~~~

Now we can modify the following files.

**File: ./pages/page2/head.html**

~~~
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
<script>
	console.log('Hello World!!!');
</script>
~~~

**File: ./pages/page2/body.html**

~~~
<h1>Hello, this is my page number 2.</h1>
~~~

See how the first line of the "head.html" file shows "&lt;!&#45;&#45;Route: temp2.html&#45;&#45;&gt;" which tells our page which HTML template to use.

***Note: It is recommended to restart the processes in the console using Ctrl + C and again "npm start", this so that the changes in the "Gruntfile.js" file are recognized. If it is necessary to re-save the changes made for the production files to be updated.***

***THE DOCUMENTATION IS BEING REVIEWED FROM HERE***

<span id="HandlebarsTemplates"></span>
## Handlebars templates ##

...(Pending for documentation)...

<span id="UsingSASS"></span>
## Using SASS ##

...(Pending for documentation)...

<span id="UsingJavaScript"></span>
## Using JavaScript ##

...(Pending for documentation)...

<span id="UsingShellJs"></span>
## Using shell.js ##

...(Pending for documentation)...

<span id="Production"></span>
## Production ##

...(Pending for documentation)...