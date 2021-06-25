# Blog Personal (Hoja de Vida) Con NodeJs y Handlebars.
Hoja de Vida con información personal, de trabajos, experiencias laborales y un portafolio establecido, realizada con NodeJS, Handlebars, y Bootstrap. 

### Pre-requisitos 📋

Para la realización y prueba del código mostrado en el repositorio se utilizó:
<ul>
  <li>Visual Studio Code</li>
  <li>Node JS  v14.16.0.</li>
  <li>NPM (Node Package Manager)</li>
  <li>Heroku</li>
</ul>
Si desea editar, modificar y ejecutar el código del repositorio necesitará disponer de las herramientas listadas. <br/>

### Instalación 🔧

<h4>Instalación del IDE Visual Studio Code</h4>
<p>Para trabajar con Javascript y Node es necesario ya instalación de un etorno de programación y ejecución <br/>
Si ya lo tienes instaldo pasa al siguiente punto.</p>
<ol>
<li>Se descarga  la última versión de Visual Studio Code, dependiendo de su S.O desde la  página oficial de <a href="https://code.visualstudio.com/Download">Visual Studio</a>. </li>
<li>Ejecutar el archivo descargado, y esperar a que culmine su instalación.</li>
<li>Con el Visual Studio Code instalado y ejecutado, se procede a instalar ciertos plugins necesarios para su buen funcionamiento, y ayuda a la hora de programar</li>
<ul>
<li>HTML CSS Support: Sirve para lograr autocompletar HTML como CSS para lograr un diseño más rápido de la página web. </li>
<li>VS Code JavaScript (ES6) snippets: Para lograr una construcción más rápida de código un poco más avanzado de JS, tales como funciones, objetos, constructores, entre otros. </li>
<li>VS Code JS, CSS, HTML Formatting: Brinda atajos de teclado para varias acciones dentro del IDE, además de que agrega una librería que muestra con colores según el uso o la funcionalidad del código para que se vea una forma más bonita y entendible</li>
<li>Terminal for Visual Studio Code: Se agrega un terminal dentro del mismo Visual Studio Code, que permite abrir ciertos archivos en el terminal, además de generar código directamente en el terminal</li>
<li>TypeScript Importer: Se da un autocompletado o atajos para ciertas funciones de Typescript. </li>
</ul>
<li>Finalmente se está listo para poder trabajar.</li>
</ol>

<br/>
<h4>Instalación de Node Js</h4>
<ol>
<li>-	Se descarga la versión LTS de la página oficial que reconocerá automáticamente el S.O en el que se esté trabajando:  <a href="https://nodejs.org/es/"> Descargar Node </a>
<li>Se aceptan los términos de la licencia y se procede a la instalación.</li>
<li>Una vez instalado para commprobar la correcta instalación se puede crear un pequeño programa en Visual Studio Code con extensión .js y se lo ejecuta en la terminal con el formato: <b>node app.js<b> </li>
  </ol> 
  
<br/>
<h4>Instalación de Node Package Manager NPM</h4>
<ol>
  <li>Para instalar npm hay que escribir en el terminal del Sistema Operativo o del propio Visual estudio:  «npm install npm@latest -g» y pulsar Intro</li>
  <li>Teniendo instalado NPM se coloca en el terminal: «npm init» , aquí dentro de nuestro proyecto aparecerá un archivo muy importante llamando package.json, mismo que muestra nombre, versión, descripción, autor, el archivo main, y finalmente muestra las dependencias del proyecto, es decir todos los paquetes o módulos que se hayan instalando para el proyecto en cuestión. </li>
  </ol>

## Despliegue 📦
<ol>
  <li>Teniendo instalado NPM  a la persona que quiera trabajar con el código traído desde un repositorio o de manera remota se descargará el código sin las librerías y dependencias del proyecto, pero las instalará de forma sencilla mediante el comando de terminal «npm install»  que instalará todas las dependencias registradas en el archivo package.json</li>
 </ol>
  <h5> El programa utiliza la librería npm express, que será el servidor que renderizará y ejecutará las páginas que deben cargar. </h5>
  <h5> El programa utiliza la librería npm hbs, que permite trabajar con la tecnología de handlebars </h5>
  <h5> El programa utiliza la librería npm nodemailer, que permite tomar datos de un formulario y enviarlo a un correo electrónico. </h5>
  <h5>Para mirar la ejecución del programa se lo puede visualizar en un hosting subido en Heroku mediante el siguiente enlace: </h5>
```
https://blog-ehernandez.herokuapp.com/
```
 <h5>Puedes analizar el repositorio en github: </h5>    
```
https://github.com/fonsiher/blogpersonal/
```  
  
## Construido con 🛠️

  <h5> Librerías NPM </h5>

* [express](https://www.npmjs.com/package/express) - Proporciona herramientas pequeñas y sólidas para servidores HTTP, lo que la convierte en una gran solución para aplicaciones de una sola página, sitios web, híbridos o API HTTP públicas.
* [hbs](https://www.npmjs.com/package/hbs) - Es un motor de visualización predeterminado requiere solo una línea de código en la configuración de la aplicación. Esto renderizará .hbsarchivos cuando res.renderse llame.
* [heroku](https://www.npmjs.com/package/heroku) - Función para administrar las aplicaciones de Heroku desde la línea de comandos.
* [nodemailer](https://www.npmjs.com/package/nodemailer) - Permite enviar correos electrónicos desde Node.js.


## Autor ✒️

* **Edwin Hernández** - *Estudiante Ingeniería en Ciencias de la Computación* - [fonsiher](https://github.com/fonsiher)


## Licencia 📄

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Esta obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>.
