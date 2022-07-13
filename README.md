# Calculadora interactiva


## Preparar el proyecto

se elimina
- setupTest
- reportWebVitals.js
- App.test.js
- logo.svg
- Vaciar los componentes que estan dentro de App.js, solo dejar <className="App">. Eliminar importacion de logo.svg
- vaciar declaraciones de App.css
- Vaciar en index.js la importación de reportWebVitals y los comentarios

### `Comandos`

Para crear el proyecto
- npm create-react-app nombreProyecto

Para arrrancar el proyecto
- npm start

### `Importar imagenes`

Crear carpeta
- dentro de src, crear carpeta de imagenes

Importar imagen local
- dentro del componente se debe añadir con el tag img e importar indicando el nombre y ubicacion ej: import logo from "./imagenes/nombreimagen.tipo". Para hacer uso de la imagen, se debe declarar dentro de src={logo}, el mismo nombre que utilizamos para la importación

## `Hoja de estilos`

Cuando se van creando componentes, es de buena practica crear una carpeta dentro de src para las hojas de estilos, esto con el fin de mantener el orden si cada componente va a tener una. La hoja de estilo debe tener el mismo nombre que el componente pero con su tipo .css

### `arbol componentes`

Index.js es el componente principal, es de ahí que se envian todos los componentes a la vista html.

Para los componentes se debe crear una carpeta dentro de src
- componentes

### Agenda

- Las llaves {} nos permiten insertar codigo de javascript dentro de los JSX

- {props.children}, son los hijos o todo lo que este dentro de un div. En el ejercicio cuando se declara el componente Boton, se declara el numero 1, 1 vendría siendo el children del componente Boton.

- ``, para crear plantillas literales

- isNaN(), Not-A-Number (no es un número) sirve para verificar si el valor ingresado dentro del metodo es o no un numero, si se ingresa isNaN(2) el resultado será "false", porque si es un número.

- `return isNaN(valor) && (valor != '.') && (valor != '=');`, dentro de un return se puede ingresar estas condiciones con &&, destacar que van con parentesis para mejor lectura

- .trimEnd(), permite eliminar espacios al final de una cadena

- CSS => user-select: none;, permite que el texto no se pueda seleccionar con el boton, efectivo al querer hacer botones