# Objetivo del proyecto

NetLikes se trata de una red social cuya piedra angular reside en los gustos de los usuarios, caracterizada por la libertad y control a los usuarios de lo que quieren ver, de lo que quieren hablar y lo que quieran hacer, cuidando siempre una interactividad sana, en la que malos comportamientos y spoilers no son bienvenidos.

## Sprint Zero

Durante el desarrollo de este se asentaron las bases sobre las que tendrá lugar el desarrollo de la aplicación. En primer lugar, se desarrolló una interfaz gráfica sencilla e intiutiva sobre la que el usuario podrá interactuar de forma libre. Asimismo, se diseñó el modelo entidad-relación de la base de datos y se implementó para poder realizar carga de películas a través del catálogo de la API.

# Ejecución del sitio web

Como podrá observar, nuestro poyecto posee un fichero llamado docker-compose, en el se encuentra lo necesario para construir el contenedor y que el servicio comience a funcionar de forma local.

En primer lugar, deberá añadir a dicho fichero la clave que se encuentra en el fichero "Clave de la API", en el directorio NetLikes, de la entrega realizada en el campus digital, ya que al tratarse de una clave asociada a nuestra imagen no queremos que caiga en las manos equivocadas. En concreto, deberá añadirla en el apartado enviroment de backend. Una vez realizados estos cambios, y despuér de haberlos guardado, deberá ejecutar el siguiente comando, asegurándose de que se encuentra en la carpeta raíz del proyecto:

```
docker-compose up --build
```

Una vez haya ejecutado el comando y finalice la carga de películas, podrá buscar la siguiente url en cualquiera de sus buscadores y comenzar a disfrutar de la experiencia NetLikes

```
http://localhost:4200
```

Cuando lo haga, se encontrará ante un formulario de inicio de sesión, no obstante, actualmente no se incluye un sistema de inicio de sesión, por lo que podrá acceder introduciendo cualquier correo y contraseña. Cuando lo haga se encontrará con el resultado de la primera DEMO de nuestro proyecto.
