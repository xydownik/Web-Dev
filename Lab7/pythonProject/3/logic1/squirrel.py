def squirrel(num, weekend):
    if not weekend:
        return num > 40 and num <=60
    else:
        return num > 40

print(squirrel(70, True))