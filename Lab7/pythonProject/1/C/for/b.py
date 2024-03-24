a = int(input())
b = int(input())
c = int(input())
d = int(input())

li = list()


def func(a, b, c, d):
    for i in range(a, b + 1):
        if i % d == c: print(i)


func(a, b, c, d)
