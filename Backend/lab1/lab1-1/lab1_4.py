#Importante modulo completo "random" en python
import random

smaller=input("Ingrese el numero pequeno: ")
large=input("Ingrese el numero grande o mayor: ")

myRandomNumber=random.randint(smaller,large)

count = 0

while True:
	count+=1
	user_number = input("Ingrese un numero para comprobar: ")
	if user_number < myRandomNumber:
		print "Es un numero pequeno"
	elif user_number > myRandomNumber:
		print "El numero es grande"
	else:
		print "Lo tienes en ", count, "Vuelve a intenatarlo"
		break