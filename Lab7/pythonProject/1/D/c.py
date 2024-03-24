N = int(input())
arr = list(map(int, input().split()))

cnt = sum(1 for num in arr if num > 0)
print(cnt)