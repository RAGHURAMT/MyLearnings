
def greet():
    print('Hello')

def addNum(a, b):
    c = a+b
    print(c)

def subNum(a, b):
    c = a-b
    return c 

def add_sub(a, b):
    c = a+b
    d = a-b
    return c, d

greet()
addNum(4, 3)

result = subNum(5, 6)
print(result)

result1, result2 = add_sub(8, 6)
print(result1)
print(result2)