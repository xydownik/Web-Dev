def xor(x, y):
    return (x and not y) or (y and not x)


x = int(input())
y = int(input())

result = xor(x, y)
print(result)
