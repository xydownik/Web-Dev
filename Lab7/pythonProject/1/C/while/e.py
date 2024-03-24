def find_min_k(N):
    k = 0
    power_of_2 = 1
    while power_of_2 < N:
        k += 1
        power_of_2 *= 2
    return k


N = int(input())

min_k = find_min_k(N)

print(min_k)
