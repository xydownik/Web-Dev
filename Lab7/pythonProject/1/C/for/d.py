x = str(input())
d = str(input())
cnt = 0
for i in range(0, len(x)):
    if x[i] == d:
        cnt += 1

print(cnt)