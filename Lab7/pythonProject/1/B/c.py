a = int(input())
b = int(input())


def check(a, b):
    if a == 1 and b != 1:
        return "NO"
    elif a != 1 and b == 1:
        return "NO"
    else:
        return "YES"


print(check(a, b))
