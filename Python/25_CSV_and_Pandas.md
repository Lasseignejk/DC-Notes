# CSV files and Pandas

CSV stands for 'Comma Separated Values' and is a common way to export data in tables, like Excel or Google Sheets. 

Open up a CSV file and use `readlines()` to create a list named `data` that contains all the values from the csv file. 

    with open("weather_data.csv) as file: 
      data = file.readlines()
      print(data)

The data printed looks like this: 

    ['day,temp,condition\n','Monday,12,Sunny\n','Tuesday,14,Rain\n'...]

It would be pretty painful to try and use the data as it is now -- they're all in strings, they still have commas, etc. 

So instead, we can `import csv`

    import csv
    with open("weather_data.csv") as data_file:
      data = csv.reader(data_file)
      print(data)

`data` is a csv.reader object. If we want to actually see the object, we'll have to loop through it. 

    import csv
    with open("weather_data.csv") as data_file: 
      data = csv.reader(data_file)
      for row in data: 
        print(row)

Now, it looks like this: 

    ['day', 'temp', 'condition']
    ['Monday', '12', 'Sunny']
    ['Tuesday', '14', 'Rain']
    [.....]

Each row has been split into invididual arrays, with each value in its own string.

If you want to just view the temperatures: 

    import csv
    with open("weather_data.csv") as data_file:
      data is a csv.reader object
      data = csv.reader(data_file)
      temperatures = []
      for row in data:
        if row[1] != "temp":
          temp = int(row[1])
          temperatures.append(temp)
      print(temperatures)
      // [12, 14, 15, 14, ...]

But that's STILL a lot of work to just get one column of data. Enter the `pandas` library.

(pandas documentation)[https://pandas.pydata.org]

    data = pandas.read_csv("weather_data.csv")
    print(data)

The data prints like this: 
| | day | temp | condition | 
| --- | --- | --- | ---|
| 0 | Monday | 12 | Sunny |
| 1 | Tuesday | 14 | Rain |
| 2 | Wednesday | 15 | Rain |

BAM! That easy! If we want to get data from a specific column, all we have to do is data["nameOfColumn"]

So `print(data["temp"])` gives us this: 

| 0 | 12 | 
| 1 | 14 | 
| 2 | 15 |

To get a specific value, you use `print(data["temp"][0])`

# Working with Rows and Columns
In Pandas, there are two main types used -- Series and DataFrame. 

A DataFrame is basically like the table itself, allll the data you see in an excel sheet or something. 

An individual column/row/entry is known as a 'Series'. Basically a list. 

You can convert DataFrames to lots of stuff. Let's convert our data to a dictionary. 

    data_dict = data.to_dict()
    print(data_dict)

This will take each column and make it a dictionary. 

    {
      'day': {0: 'Monday', 1: 'Tuesday', 2: 'Wednesday'}, 'temp': {0: 12, 1: 14, 2: 15}, 
      'condition': {0: 'Sunny', 1: 'Rain', 2: 'Rain'}
    }

Series can also be converted. Let's take our temp data from earlier and make it into a list.

    temp_list = data["temp"].to_list()
    print(temp_list)
    //
    [12, 14, 15, 14, ...]

So. To get data by column: `data["column_name"]` or `data.column_name`

## Data by row
Select the entire table (data), then in square brackets give it a condition to check for. For example, if we want to look at the data for 'Monday', we can write this: `data[data.day == "Monday"]`

Inside the data, look under the 'day' column for a row called 'Monday'.

It should look like this if you print it: 

| | day | temp | condition | 
| --- | --- | --- | ---|
| 0 | Monday | 12 | Sunny |

Knowing this, how would we find the row where the temperature is highest? 

`print(data[data.temp === data.temp.max()])`

| | day | temp | condition | 
| --- | --- | --- | ---|
| 6 | Sunday | 24 | Sunny |

Inside data, look under the temp column for a row where the temp was the highest. 

So to get data by column: `data["name_of_column"]`

To get data by row: `data[data.name_of_column == condition]`

If we save a row's data to a variable, we can tap into each value.

    monday = data[data.day == "Monday"]
    print(monday.condition) // "Sunny"
    print(monday.temp) // 12

# Creating a DataFrame from scratch
We've got some data...

    data_dict = {
      "students": ["Amy", "James", "Angela"],
      "scores": [76, 56, 65]
    }

How do we make it a DataFrame? 

Remember a DataFrame is a TABLE, like Google Sheets or a CSV file. 

    data = pandas.DataFrame(data_dict)
    print(data)

| | students | score | 
| --- | --- | --- | 
| 0 | Amy |76 | 
| 1 | James | 56 |
| 2 | Angela | 65 |

To convert that DataFrame TO A CSV FILE, we can do this: 

    data.to_csv("new_data.csv")

When you run the code, it'll make a new csv file. 

## From beginning to end 
1. Import `pandas`
2. Open up the csv file in python and save it to a variable.

    data = pandas.read_csv("file_path.csv")

3. Manipulate the data 
4. Create a dictionary of the data

    data_dict = {
      "column_name_1": ["value1", "value2", "value3"],
      "column_name_2": ["value1", "value2", "value3"]
    }

5. Convert the dictionary to a DataFrame

    data_df = pandas.DataFrame(data_dict)

6. Convert the DataFrame to a CSV file

    data_df.to_csv("nameOfFile.csv")