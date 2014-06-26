# -*- coding:utf-8 -*-
"""
program: lab1-2.py
Author:Luis Daza

1. Ingresar el valor para saber el rango
	A través de la línea de comandos ingresamos el valor de la calificación
2. Mostrar el tipo de calificación
	Se muestra en la línea de comandos la valocación para el rango de la calificación
"""

number = input("Ingrese el número de su calificación: ")

if number > 80:
	letter = 'S'
elif number > 79:
	letter = 'B'
elif number > 69:
	letter = 'A'
else:
	letter = 'Un caso perdido'

print "Su calificación está dentro del rango: ", letter