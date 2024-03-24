def maxend3(lst):
    maxn = max(lst[0], lst[len(lst)-1])
    return [maxn,maxn,maxn]
print(maxend3([3,1,11]))