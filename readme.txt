###############################################################################################################
#       Gracias por la oportunidad                                                                            #
#                                                                                                             #
#               atte. Marcos Ricciardelli                                                                     #
#                                                                                                             #
###############################################################################################################



################## indice ##############################

0- Instalar dependencias node (jquery):
        npm install 

1- Hecho para prueba local con el SERVIDOR WEB INTEGRADO PARA DESARROLLO. 
    Correr en la ruta de la terminal:
        $ php -S localhost:8000 -t ruta/

        ruta= ruta de la carpeta /FORM_COMPLETO

2- Abrir navegador y pegar el enlace:
    http://localhost:8000/index.html

3- Crear la base de datos y la tabla (mysql): 
                                    db:formulario_de_votacion
                                    table: votante

4- En server.php cargar valores de usuario y password locales.

5-Completar formulario y enviar.

Notas sobre el codigo:
    server.php -> aqui se recibe el formulario, se conecta a mysql e inserta valores en la tabla.
                    todo en uno! (fatal! falta modularizar)
    
    estaticos/js/validacion.js  -> Aqui se hace la validacion en el front, principalmente usando jquery.
                                    Y se envia por medio de ajax y jquery a 'server.php'. (falta modularizar!)

faltantes:
        Infinitos.
        Modularizar.
        .htacces con el punto de entrada que podria ser un index.php
        .env para las variables

!gracias