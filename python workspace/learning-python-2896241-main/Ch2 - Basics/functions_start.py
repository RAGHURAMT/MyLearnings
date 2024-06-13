#
# Example file for working with functions
# LinkedIn Learning Python course by Joe Marini
#


# TODO: define a basic function
def func1():
    print("func1")

func1() #  this will execute the func1
print(func1()) # This will execute the func1 and expects a return type. If return statement is not available, it will print "none"
print(func1) # This will print the address of func1 because in python functions will behave as objects too


# TODO: function that takes arguments
def func2(arg1, arg2):
    print(arg1, " ", arg2)

func2(2, 4)
print(func2(2, 4))
print(func2)

# TODO: function that returns a value
def cube(x):
    return x * x * x

print(cube(3))

# TODO: function with default value for an argument
def power(num, x=1):
    result = 1
    for i in range(x):
        result = result * num
    return result

print(power(2, 3))
print(power(2))
print(power(x=3, num=2)) # In python, we dont to pass the arguments in the order


# TODO: function with variable number of arguments
def mutiargs(*args):
    result = 0
    for x in args:
        result = result + x
    return result

print(mutiargs(10, 3, 10, 6, 4, 5, 30))

