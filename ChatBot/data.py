import pandas as pd

data_files = 'Testdata.xlsx'
browserName = input("Which browser stats do you want to view?").title()
df = pd.read_excel(data_files, usecols=['Browser', 'visitors'])
df2=df[df["Browser"] == browserName ] 
print(df2)
