def commonend(a,b):
    return a[0] == b[0] or a[len(a)-1] == b[len(b) -1]
print(commonend([1,2,3], [1,2,2]))