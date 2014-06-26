"""
File: lab1_7.py
Generador de sentencias aleatorias con palabras
"""

def funcionCuadratica(**kwargs):
	print(((kwargs['b']*(-1)) + raiz(**kwargs))/2*kwargs['a'])
	print(((kwargs['b']*(-1)) - raiz(**kwargs))/2*kwargs['a'])

def raiz(**kwargs):
	return (kwargs['b']**2 - 4*kwargs['a']*kwargs['c'])**(0.5)

def main():
	valorA = input("Ingrese a: ")
	valorB = input("Ingrese b: ")
	valorC = input("Ingrese c: ")

	funcionCuadratica(a=valorA, b=valorB, c=valorC)

main()