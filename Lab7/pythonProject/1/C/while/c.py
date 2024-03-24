n = int(input())

p = 0
while 2**p <= n:
    res = 2 ** p
    p += 1
    print(res)
