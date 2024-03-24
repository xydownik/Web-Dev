def tags(a, b):
    return '<{}>{}</{}>'.format(a, b, a)

print(tags('i', "Hi"))