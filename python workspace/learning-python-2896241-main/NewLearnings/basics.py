from array import *
from numpy import *

# Using array from python
# vals = array('i', [2, 3, 4])
# print(vals[2])

# Using numpy
# we use numpy for multi-dimensional array
arr = array([1, 2, 3, 4])
print(arr)

#Multidimensional array
arr1 = array(
    [
        [4, 5, 6],
        [7, 8, 9]
    ]
)
print(arr1)

#To change from 2 dimensional array to 1 dimensional
arr2 = arr1.flatten() 
print(arr2)
#To change from 1 dimensional array to 3 dimensional. It will accept rows and columns
arr3 = arr2.reshape(2, 3) 
print(arr3)
