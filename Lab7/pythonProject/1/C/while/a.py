import math

x = int(input())

i = 1

while i <= x:
    if math.floor(math.sqrt(i)) ** 2 == i:
        print(i)
    i += 1
