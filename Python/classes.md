# Classes

`Methods` are the actions a class can take.

```class Vehicle:
	def moves(self):
		print("Moves along...")

my_car = Vehicle()
your_car = Vehicle()

my_car.moves()
```

In this example, `my_car` is an object that we created from the `Vehicle` class.

```
class Vehicle:
	def __init__(self, make, model):
		self.make = make
		self.model = model

	def moves(self):
		print("Moves along...")

	def get_make_model(self):
		print(f"I'm a {self.make} {self.model}.")

my_car = Vehicle('Tesla', 'Model 3')
my_car.get_make_model()
my_car.moves()

your_car = Vehicle('VW', 'Taos')
your_car.get_make_model()
your_car.moves()
```
