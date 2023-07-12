[Introduction to Pandas](https://www.youtube.com/watch?v=tfKkIugx3lQ)
[Guide](https://colab.research.google.com/drive/1OBi5XMDmaGxyyiv1QLXXBHfw0wfptfmZ?usp=sharing)

# Import Pandas

    import pandas
    // or
    import pandas as pd

# DataFrames

    # Read a CSV file into a pandas dataframe
    url = "https://bit.ly/homes_data"
    df_homes = pd.read_csv(url)

A lot of pandas is just manipulating data inside of dataframes. 

## Check the dimensions of the dataset
    df_homes.shape
    // (67638, 11)

the data has 67638 rows and 11 columns

## List the columns and their data types
    df_homes.info()

S the number of rows and columns like `shape` does, but also gives us all the column names, how many of the values in those columns are not null, and the data types. 

`int64` is an integer, `object` is text.

## Preview the first few records
    df_homes.head()

`.head()` will give you the first few rows of the data. If you want a specific number of rows, you can pass an integer as a parameter: `df_homes.head(10)`

## Sort values in the data frame
    df_homes.sort_values('units', ascending=False)
`units` is the name of the column

<strong>Keep in mind, none of what we've done so far has actually CHANGED df_homes.</strong> All we're doing is changing the way we view it -- the data is still the same. If we wanted to actually change the data that's stored inside of df_homes, we can set any of the things we've done to a new variable or overwrite df_homes itself.

    df_homes = df_homes.sort_values('units', ascending=False)

## Select a specific set of rows by position
    df_homes.iloc[5:10]
Select/return rows from index 5-9

## Select a specific set of rows and columns by position
    df_homes.iloc[5:10, 2:5]
I want rows from index 5-9 and i want rows 2-4

    df_homes.iloc[5:10, [2,4,6]]
I want rows from index 5-9 and columns 2, 4, and 6

    df_homes.iloc[:, [2,4,6]]
I want ALL the rows but only columns 2, 4, and 6

## Select rows that meet a certain criteria
    df_homes[df_homes.units > 800]
Go to the `units` column. Inside that column, only show me the rows where units is greater than 800

## Select a column in the dataset using its name
    df_homes['sale_price']

## Select a subset of columns using their names
    df_homes[['block', 'lot', 'sale_price']]

## Drop unnecessary columns
    df_homes = df_homes.drop(columns=['id', 'easement'])
    df_homes.shape
This will remove the columns you tell it to. You can run `.shape` to see the number of columns as decreased.

## Rename a column
    df_homes = df_homes.rename(columns = {'borough':'district})
    df_homes.info()
Use `.info()` after to see that the column was renamed.

## Convert selected columns into the appropriate data types 
    df_homes['land_sqft'] = pd.to_numeric(df_homes['land_sqft'], errors='coerce')
    df_homes['gross_sqft'] = pd.to_numeric(df_homes['gross_sqft'], errors='coerce')
    df_homes['sale_price'] = pd.to_numeric(df_homes['sale_price'], errors='coerce')
    df_homes.info()
Coerce is saying, if there's any values that aren't numeric, get rid of it. Make it null or something. 

If you do `.info()`, you can see that the datatype for those columns have changed.

## Determine if there are any null values
    df_homes.isnull().sum()
Some machine-learning algos don't like null values. This will sum up, for each column, how many null values there are.

## Replace NULL values
    df_homes_filled = df_homes.fillna(500)
    df_homes_filled[df_homes_filled.sale_price == 500].head()

## Drop the records with null values (CAUTION)
    df_homes_null = df_homes.dropna()
    df_homes_null.isnull().sum()