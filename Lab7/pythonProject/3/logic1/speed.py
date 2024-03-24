def speedup(n, bd):
    if not bd:
        if n <=60: return 0
        elif n <=80: return 1
        else: return 2
    else:
        return  0

print(speedup(86, False))