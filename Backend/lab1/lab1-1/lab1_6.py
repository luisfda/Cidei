"""
File: lab1_5.py
Pra que no se les olvide esto es un comentario del tipo Docstring
print "%5d%8d%12d"%(numero, otrodecimal, string)
"""

numero = input("Ingrese el numero a convertir: ")
binary = []
binaryString = ""

while numero>0:
	binary.append(numero%2)
	numero = numero/2


binary1 = binary[::-1]

for i in binary1:
	binaryString+=str(i)

	

print "El valor binario es: ", binaryString