def combo(str1, str2):
    if len(str1) < len(str2):
        return str1 + str2 + str1
    elif len(str1) > len(str2):
        return str2 + str1 + str2

print(combo("Hi", "Hello"))