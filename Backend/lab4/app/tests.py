from django.test import TestCase
from app.models import Category, Item
from datetime import datetime

class TestCidei(TestCase):
	def setUp(self):
		self.cat_one = Category.objects.create(name="Hardware",slug="hardware")
		self.item_one = Item.objects.create(listing="t",name="Computers",category=self.cat_one,department="Electronics",
			description="lalalalala", updated_on=datetime.now())
		self.item_two = Item.objects.create(listing="p",name="Servers",category=self.cat_one,department="Electronics",
			description="lololololo", updated_on=datetime.now())

	def test_category_one(self):
		response = self.client.get('/category/%s/' % self.item_one.id)
		self.assertEqual(response.status_code,200)
		self.assertContains(response,'Hardware')

	def test_item_one(self):
		response = self.client.get('/item/%s/' % self.item_one.id)
		self.assertEqual(response.status_code,200)
		self.assertContains(response,'Computers')