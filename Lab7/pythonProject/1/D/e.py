N = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(0, N-1):
    if (arr[i+1] > 0 and  arr[i] >0) or (arr[i+1] < 0 and arr[i] < 0):
        cnt +=1
print("Yes" if cnt > 0 else "No")