# 
# Example file for variables
# LinkedIn Learning Python course by Joe Marini
#


# Basic data types in Python: Numbers, Strings, Booleans, Sequences, Dictionaries
myint = 5
myfloat = 13.2
mystr = "This is a string"
mybool = True
mylist = [0, 1, "two", 3.2, False]
mytuple = (0, 1, 2)
mydict = {"one" : 1, "two" : 2}

# print(myint)
# print(myfloat)
# print(mystr)
# print(mybool)
# print(mylist)
# print(mytuple)
# print(mydict)

# re-declaring a variable works
myint = "Raghuram"
print(myint)

# to access a member of a sequence type, use []
print(mylist[1])

# use slices to get parts of a sequence
print(mylist[1:5]) # This will print complete array. Here, 1 and 5 are starting and ending indexes
print(mylist[1:5:2]) # :2 will ignore every 2nd element in an array

# you can use slices to reverse a sequence
print(mylist[::-1])

# dictionaries are accessed via keys
print(mydict["one"])

# ERROR: variables of different types cannot be combined
# print("string" + 123) # This will throw error as variables of different types cannot be combined
print("string" + str(123)) # we are coverting int to string using built in function

# Global vs. local variables in functions
def functionName():
    global mystr # If we use this, It will override the value everywhere using the below value
    mystr = "overrided"
    print(mystr) # Here, we overrided the global variable value and this will change only in this function
    

functionName()
print(mystr) # Here, outside the function, it will print the value given when declared globally

del mystr
print(mystr) # This will throw error because we delete the mystr variable in the above line
