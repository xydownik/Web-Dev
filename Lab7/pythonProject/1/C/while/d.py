def is_power_of_two(N):
    while N % 2 == 0 and N > 1:
        N //= 2
    return N == 1


N = int(input())

if is_power_of_two(N):
    print("YES")
else:
    print("NO")
