# -*- coding:utf-8 -*-
"""
program: lab1-1.py
Author:Luis Daza

Calcular la tasa de impuesto de un alimento 

1. Declaración de variables
	tax tasa de impuesto
	tax_one tasa de impuesto adicional
2. Entradas
	Valor del alimento
	Numero de alimentos
3. Computaciones:
	tasa de entrada: suma de número de alimentos + tax + tax_one
4. Salida:
	El cálculo de los elementos comparados
"""

#Declaración de constantes
TAX = 0.16
TAX_ONE = 0

#Entradas de teclado

food = input('Ingrese el valor del alimento')
amount_food = input('Ingrese la cantidad de alimentos')

#Computaciones

total = (food * amount_food) * (TAX + TAX_ONE)

#Salidas

print "El total de los alimentos es: ", total