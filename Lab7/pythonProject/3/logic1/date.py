def date(a,b):
    if a<=2 or b <= 2: return 0
    elif a>=8 or b >=8 : return 2
    else: return 1

print(date(1, 5))