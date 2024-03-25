def make_bricks(a,b,c):
    if c > b*5 + a:
        return True
    if c%5 > a: return False
    return True

print(make_bricks(3,1,8))
