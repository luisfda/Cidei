from app.models import Category, Item
from autofixture import generators,register,AutoFixture

import random

nouns=("Hardware","Software","Test-Software","Test-Hardware","Apps","BigData",)

class CategoryFixture(AutoFixture):
	field_values = {
		'name' : generators.random.choices(nouns),
		'slug' : generators.SlugGenerator('cidei'),
	}

register(Category,CategoryFixture)