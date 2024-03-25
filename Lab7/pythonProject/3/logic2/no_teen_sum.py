def is_teen(a):
    if a == 15 or a == 16:
        return a
    if 20 > a > 12:
        return 0
    return a
def no_teen_sum(a,b,c):
    return is_teen(a) + is_teen(b) + is_teen(c)
print(no_teen_sum(1,15,2))