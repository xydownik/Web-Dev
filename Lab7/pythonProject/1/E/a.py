def min_of_four(a, b, c, d):
    min_value = a

    if b < min_value:
        min_value = b
    if c < min_value:
        min_value = c
    if d < min_value:
        min_value = d

    return min_value


a, b, c, d = map(int, input().split())

result = min_of_four(a, b, c, d)
print(result)
