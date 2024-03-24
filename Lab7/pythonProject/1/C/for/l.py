
n = str(input())

res = 0

for i in range(len(n)):
    cur = int(n[i])

    res += cur * (2 ** (len(n) - 1 - i))

print(res)
