# Blog Personal (Hoja de Vida) Con NodeJs y Handlebars.
Hoja de Vida con informaci贸n personal, de trabajos, experiencias laborales y un portafolio establecido, realizada con NodeJS, Handlebars, y Bootstrap. 

### Pre-requisitos 馃搵

Para la realizaci贸n y prueba del c贸digo mostrado en el repositorio se utiliz贸:
<ul>
  <li>Visual Studio Code</li>
  <li>Node JS  v14.16.0.</li>
  <li>NPM (Node Package Manager)</li>
  <li>Heroku</li>
</ul>
Si desea editar, modificar y ejecutar el c贸digo del repositorio necesitar谩 disponer de las herramientas listadas. <br/>

### Instalaci贸n 馃敡

<h4>Instalaci贸n del IDE Visual Studio Code</h4>
<p>Para trabajar con Javascript y Node es necesario ya instalaci贸n de un etorno de programaci贸n y ejecuci贸n <br/>
Si ya lo tienes instaldo pasa al siguiente punto.</p>
<ol>
<li>Se descarga  la 煤ltima versi贸n de Visual Studio Code, dependiendo de su S.O desde la  p谩gina oficial de <a href="https://code.visualstudio.com/Download">Visual Studio</a>. </li>
<li>Ejecutar el archivo descargado, y esperar a que culmine su instalaci贸n.</li>
<li>Con el Visual Studio Code instalado y ejecutado, se procede a instalar ciertos plugins necesarios para su buen funcionamiento, y ayuda a la hora de programar</li>
<ul>
<li>HTML CSS Support: Sirve para lograr autocompletar HTML como CSS para lograr un dise帽o m谩s r谩pido de la p谩gina web. </li>
<li>VS Code JavaScript (ES6) snippets: Para lograr una construcci贸n m谩s r谩pida de c贸digo un poco m谩s avanzado de JS, tales como funciones, objetos, constructores, entre otros. </li>
<li>VS Code JS, CSS, HTML Formatting: Brinda atajos de teclado para varias acciones dentro del IDE, adem谩s de que agrega una librer铆a que muestra con colores seg煤n el uso o la funcionalidad del c贸digo para que se vea una forma m谩s bonita y entendible</li>
<li>Terminal for Visual Studio Code: Se agrega un terminal dentro del mismo Visual Studio Code, que permite abrir ciertos archivos en el terminal, adem谩s de generar c贸digo directamente en el terminal</li>
<li>TypeScript Importer: Se da un autocompletado o atajos para ciertas funciones de Typescript. </li>
</ul>
<li>Finalmente se est谩 listo para poder trabajar.</li>
</ol>

<br/>
<h4>Instalaci贸n de Node Js</h4>
<ol>
<li>-	Se descarga la versi贸n LTS de la p谩gina oficial que reconocer谩 autom谩ticamente el S.O en el que se est茅 trabajando:  <a href="https://nodejs.org/es/"> Descargar Node </a>
<li>Se aceptan los t茅rminos de la licencia y se procede a la instalaci贸n.</li>
<li>Una vez instalado para commprobar la correcta instalaci贸n se puede crear un peque帽o programa en Visual Studio Code con extensi贸n .js y se lo ejecuta en la terminal con el formato: <b>node app.js<b> </li>
  </ol> 
  
<br/>
<h4>Instalaci贸n de Node Package Manager NPM</h4>
<ol>
  <li>Para instalar npm hay que escribir en el terminal del Sistema Operativo o del propio Visual estudio:  芦npm install npm@latest -g禄 y pulsar Intro</li>
  <li>Teniendo instalado NPM se coloca en el terminal: 芦npm init禄 , aqu铆 dentro de nuestro proyecto aparecer谩 un archivo muy importante llamando package.json, mismo que muestra nombre, versi贸n, descripci贸n, autor, el archivo main, y finalmente muestra las dependencias del proyecto, es decir todos los paquetes o m贸dulos que se hayan instalando para el proyecto en cuesti贸n. </li>
  </ol>

## Despliegue 馃摝
<ol>
  <li>Teniendo instalado NPM  a la persona que quiera trabajar con el c贸digo tra铆do desde un repositorio o de manera remota se descargar谩 el c贸digo sin las librer铆as y dependencias del proyecto, pero las instalar谩 de forma sencilla mediante el comando de terminal 芦npm install禄  que instalar谩 todas las dependencias registradas en el archivo package.json</li>
 </ol>
  <h5> El programa utiliza la librer铆a npm express, que ser谩 el servidor que renderizar谩 y ejecutar谩 las p谩ginas que deben cargar. </h5>
  <h5> El programa utiliza la librer铆a npm hbs, que permite trabajar con la tecnolog铆a de handlebars </h5>
  <h5> El programa utiliza la librer铆a npm nodemailer, que permite tomar datos de un formulario y enviarlo a un correo electr贸nico. </h5>
  <h5>Para mirar la ejecuci贸n del programa se lo puede visualizar en un hosting subido en Heroku mediante el siguiente enlace: </h5>
```
https://blog-ehernandez.herokuapp.com/
```
 <h5>Puedes analizar el repositorio en github: </h5>    
```
https://github.com/fonsiher/blogpersonal/
```  
  
## Construido con 馃洜锔?

  <h5> Librer铆as NPM </h5>

* [express](https://www.npmjs.com/package/express) - Proporciona herramientas peque帽as y s贸lidas para servidores HTTP, lo que la convierte en una gran soluci贸n para aplicaciones de una sola p谩gina, sitios web, h铆bridos o API HTTP p煤blicas.
* [hbs](https://www.npmjs.com/package/hbs) - Es un motor de visualizaci贸n predeterminado requiere solo una l铆nea de c贸digo en la configuraci贸n de la aplicaci贸n. Esto renderizar谩 .hbsarchivos cuando res.renderse llame.
* [heroku](https://www.npmjs.com/package/heroku) - Funci贸n para administrar las aplicaciones de Heroku desde la l铆nea de comandos.
* [nodemailer](https://www.npmjs.com/package/nodemailer) - Permite enviar correos electr贸nicos desde Node.js.


## Autor 鉁掞笍

* **Edwin Hern谩ndez** - *Estudiante Ingenier铆a en Ciencias de la Computaci贸n* - [fonsiher](https://github.com/fonsiher)


## Licencia 馃搫

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Esta obra est谩 bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Licencia Creative Commons Atribuci贸n-NoComercial-CompartirIgual 4.0 Internacional</a>.
