# Installing PostgreSQL
The default port on computers for databases is 5432

P SQL or Postres or Psequel or postgresQL

<a href="https://www.postgresql.org/">PostgreSQL database documentation</a>

Postgres is a relational database language -- data is stored in tables which can be related to each other.

Go to 'download', select 'Windows', at the top click 'download the installer,' select the top one.

When the installer is finished, open it up.

Click next, next, 

'Select Components' --> select all, click next

'Data Directory' --> next

'Password' --> put in a password and REMEMBER IT. next

'Port' --> default is 5432. KEEP IT. next 

'Advanced Options' --> next 

'Pre-Installation Summary' --> default superuser is 'postgres'. remember that. next

'Ready to Install' --> next

'Finish, stack builder' --> cancel

# Accessing the postgres shell
Type in 'psql' in the windows search to open the psql shell

Enter, enter, enter, enter, type in the password

A warning will pop up, that's fine 

If everything is ok, it should say 'postgres=#' on the left side of the terminal

## Postgres Commands 
`\l` --> list all databases stored on your computer 

`\d` --> show current table 

# Creating a table in PostgreSQL 

    CREATE TABLE table_name (
      column1 datatype,
      column2 datatype,
      column3 datatype,
      ......
    )

When you type in the first line `CREATE TABLE Pets (` and hit enter, the part on the left changes to `postgres(#`. This means it is expecting a closing ). 

    postgres=# CREATE TABLE Pets (
    postgres(# id SERIAL Primary Key,
    postgres(# name varchar(255),
    postgres(# species varchar(255),
    postgres(# age int
    postgres(# );

After this, it should print CREATE TABLE, logging that a table may have been created. 

To verify, `\dt` (display table)

`\d nameOfTable` to see the schema

    SELECT * FROM Pets; 
    id | name | species | age
    (0 rows)
  
# Inserting data into the table
`INSERT INTO Pets(name,species,age) VALUES ('Pancho','dog',6);`

Should print `INSERT 0 1`

To verify, `SELECT * FROM Pets;`

# Update an entry in sql
`UPDATE table_name SET column_1 = value_1 WHERE condition`

`UPDATE Pets SET name='Nikkita' WHERE id=2;`

Should print `UPDATE 1`

# Selecting 
`SELECT * FROM Pets WHERE species='dog';`

# Deleting 
`DELETE FROM table_name WHERE condition`
`DELETE FROM Pets WHERE name='Pancho';`
`DELETE FROM Pets WHERE species='cat';`

Should print `DELETE 1`

# DROP TABLE
Gets rid of the ENTIRE TABLE. USE AT YOUR OWN RISK.

# Relationships in SQL
1 - 1 (one to one)
- A car has one owner, the owner has one car. 

1 - Many (one to many)
- A parent has many children, children have one parent. 
- (Tik Tok, Youtube) One user has many videos, those videos belong to one user.

Many - Many 
- Many things are related to many other things. 
- Many users can belong to many groups. 

## Defining relationships between tables in sql 

    CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(100)
    );

    CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
    );

Be careful making tables with relationships. Make sure you make the parent table FIRST, then the child 

### Many to many 
    CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100)
    );
    
    CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    name VARCHAR(100)
    );
    
    CREATE TABLE registrations (
    FOREIGN KEY student_id INT REFERENCES students(student_id),
    FOREIGN KEY course_id INT REFERENCES courses(course_id),
    CONSTRAINT registrations_pk PRIMARY KEY(student_id,course_id));
    
    INSERT INTO students(name) VALUES ('Jim');
    INSERT INTO students(name) VALUES ('Bob');
    INSERT INTO students(name) VALUES ('Jane');

    INSERT INTO courses(name) VALUES ('Japanese 101'), ('Ocean Kayaking'), ('Intro to Biology');

    INSERT INTO registrations(student_id,course_id) VALUES (1,1),(2,2),(3,3);
