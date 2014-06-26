class Person(object):
	def __init__(self,name,identifier, age):
		"""Todo el puntaje se inicia en 0"""
		self._name = name
		self._identifier = identifier
		self._age = age

	def getName(self):
		"""Retornando el nombre"""
		return self._name

	def getIdentifier(self):
		"""Retornando la edad"""
		return self._identifier

	def getAge(self):
		"""Retornando la edad"""
		return self._age

	def __str__(self):
		"""Retornando los string de la clase persona"""
		return "Nombre: " + self._name + "\nCedula: " + self._identifier + "\nEdad: " + self._age
		

class Student(Person):
	def __init__(self,name,identifier, age):
		self._assigments = []
		self._scores = []
		super(Student,self).__init__(name,identifier, age)

	def setAssigment(self,assigment):
		self._assigments.append(assigment)

	def getAssigmnets(self):
		return self._assigments

	def setScores(self,score):
		self._scores.append(score)   

	def getScores(self):
		return self._scores


class Teacher(Person):
	def __init__(self,name,identifier, age,profession,number_id):
		"""Todo el puntaje se inicia en 0"""
		self._profession = profession
		self._number_id = number_id
		super(Teacher,self).__init__(name,identifier, age)

	def getProfession(self):
		"""Retornando el nombre"""
		return self._profession

	def getNumberId(self):
		"""Retornando la edad"""
		return self._number_id	
