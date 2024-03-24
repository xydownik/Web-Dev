def power(a, n):
    if n == 0:
        return 1

    result = 1.0
    is_negative = False

    if n < 0:
        is_negative = True
        n = -n

    while n > 0:
        if n % 2 == 1:
            result *= a
        a *= a
        n //= 2

    return 1.0 / result if is_negative else result

a = float(input())
n = int(input())

result = power(a, n)
print(result)
