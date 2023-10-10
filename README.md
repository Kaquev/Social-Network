
# Tripify

Red social que recoge experiencias de viajes, además de recomendaciones y sugerencias, proporcionadas por los usuarios.



https://github.com/kimmvb/Social-network-6/assets/137528066/8de1ba5c-a372-40fc-aa91-175b6e1abfb7



## Usuarios

Los principales usuarios de la página son personas que les gusta viajar y quieren un espacio para compartir experiencias, recomendaciones y sugerencias sobre viajes y lugares para conocer.

### ¿Para qué le servirá a estos usuarios?

Los usuarios contarán con espacio donde pueden compartir sus experiencias de viaje, además de revisar y chequear las de otras personas. Esto las ayudará a tener un mejor conocimiento de los lugares que quieran visitar y comparar experiencias y recomendaciones ofrecidas por la comunidad.


## Funciones de la página

- Iniciar sesión con correo o con Google
- Creación de cuenta
- Recuperación de contraseña
- Muro con las publicaciones de la comunidad
- Vista del perfil
- Borrar y editar posts.
- Interacciones y conteo de estrellas ⭐ (likes)


## Proceso del proyecto

### Prototipo de interfaz

Se llevaron a cabo varios prototipos de varios componentes de la página web:

![Componente home](https://github.com/kimmvb/Social-network-6/assets/137528066/aebd246b-9d4a-49be-a730-cbfee7c2f75e)

![Componente feed](https://github.com/kimmvb/Social-network-6/assets/137528066/f5b45daf-55d5-4cb9-a6ae-cf96a64d1aac)

![Componente new post](https://github.com/kimmvb/Social-network-6/assets/137528066/9a8baaea-2189-4675-baa2-6fc2469d246b)

![Componente profile](https://github.com/kimmvb/Social-network-6/assets/137528066/f9c4c884-b41a-4c98-aa39-8fc7dbc9d6ba)

### Logo

![Logo feed](https://github.com/kimmvb/Social-network-6/assets/137528066/030a2d78-4543-4cf8-b15f-abecd5a1526d)

### Referencia de color

| Colores             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Color 1 | ![#35285A](https://via.placeholder.com/10/35285A?text=+) #35285A |
| Color 2 | ![#F1A3FF](https://via.placeholder.com/10/F1A3FF?text=+) #F1A3FF |
| Color 3 | ![#E8868C](https://via.placeholder.com/10/E8868C?text=+) #E8868C |
| Color 4 | ![#FFF479](https://via.placeholder.com/10/FFF479?text=+) #FFF479 |
| Color 5 | ![#F5A479](https://via.placeholder.com/10/F5A479?text=+) #F5A479 |


## Historia de usuario

### Historia de usuario 1 
Crear cuenta y perfil
#### Criterios de aceptación
 - Autenticación con cuenta de correo y contraseña o con cuenta de Google
- Creación de cuenta de acceso 
- Máximo y mínimo de caracteres para la contraseña 
- Reconocer emails utilizados

### Historia de usuario 2 
Loguear y desloguear
#### Criterios de aceptación
- Reconocer datos erróneos al loguearse 
- Datos en contraseña no deben visualizarse (********) 
- Recordar datos de sesión 
- Visualizar feed al loguearse
- No tener interacción con el perfil luego de haberse deslogueado 

### Historia de usuario 3 
Crear, borrar y guardar posts
#### Criterios de aceptación
- Escribir nuevo post
- Guardar post
- Validar que haya contenido antes de guardar (en el input)
- Preguntar antes de eliminar un post
- Solo puede eliminar quien creo el post
- Al guardar los cambios debe guardar la información nueva

### Historia de usuario 4 
Editar y publicar un post
#### Criterios de aceptación
- Debe cambiar el texto por un input para editar el post
- Se debe guardar la nueva información
- Al recargar la página deben aparecer los posts editados
- Visualización de los posts públicamente 
- El contenido solo será visible si estás registrado y logueado

### Historia de usuario 5 
Interacciones con un post
#### Criterios de aceptación
- Interacciones con un post
- Poder dar y quitar like
- LLevar conteo de like
- Solo se puede dar 1 like por usuario



## Test Unitarios

Para confirmar la funcionalidad en diferentes situaciones del proyecto, se crearon tests para validar la correcta ejecución de los componentes de la página.

> Se realizó un archivo de testing por cada componente, en total fueron 7.




https://github.com/kimmvb/Social-network-6/assets/137528066/940c2427-21ce-4361-ba0b-21bb580d643e




## Mejoras por hacer

- Tests para las funcionalidades de borrar, editar e interacciones.
- Resolver problemas de visualización de la foto de perfil de la página en el componente de crear un nuevo post.
- Limitar la navegación para el usuario activo.
- Añadir funcionalidad a barra de búsqueda.

