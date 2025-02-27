# Virtual Environments (venv)

To create a venv, type: `py -m venv .venv`

This will create a folder called `.venv` and inside of that folder will be more folders like `Include`, `Lib`, and `Scripts`.

To turn on your venv, type `source .venv/Scripts/activate`. Now, your terminal should print `(.venv)` if you press Enter in the terminal.

To turn it off, type `deactivate`.

`pip install python-dotenv`

You don't send your venv files up to Github, but you should include a list of requirements.

To do this automatically, type `pip freeze > requirements.txt`

To ignore the folder, make a `.gitignore` and add `.venv`.

.env files work the same in python as in JS

To use an env file, put `load_dotenv()` at the top of the file. Then where you want to use the variable, put `os.getenv([NAME OF VARIABLE])`
