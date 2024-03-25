def _d_(a,c):
    d = 1
    while d <= a:
        if c % (d * 5) < 5:

            return d
        d += 1

def make_choc(a,b,c):

    d = _d_(a,c)
    f = (c%(d*5))
    if f!=0 and f % b == 0: return f//b
    else: return -1

print(make_choc(4,1,7))