def makeout(a , b):
    one = a[0:2]
    two = a[2:]
    return one + b + two
print(makeout("<<>>", "Bob"))