import math

a = int(input())
b = int(input())


def sqr(x, y):
    for i in range(x, y + 1):
        c = i ** (1 / 2)
        if math.floor(c) ** 2 == i:
            print(i)


sqr(a, b)
