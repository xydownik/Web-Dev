def round10(num):
    remainder = num % 10
    if remainder >= 5:
        return num + (10 - remainder)
    else:
        return num - remainder

def round_sum(a, b, c):
    rounded_a = round10(a)
    rounded_b = round10(b)
    rounded_c = round10(c)
    return rounded_a + rounded_b + rounded_c

# Test cases
print(round_sum(16, 17, 18)) 
