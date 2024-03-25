def cat_dog(s):
    count_cat = s.count('cat')
    count_dog = s.count('dog')

    return count_cat == count_dog

print(cat_dog('catdog'))        
