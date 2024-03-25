def end_other(a, b):
    a_lower = a.lower()
    b_lower = b.lower()


    return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)

print(end_other('Hiabc', 'abc'))    # Output: True
print(end_other('AbC', 'HiaBc'))     # Output: True
print(end_other('abc', 'abXabc'))    # Output: True
