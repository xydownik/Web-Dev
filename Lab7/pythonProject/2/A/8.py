
my_list = [int(x) for x in input().split()]

unique_list = list(set(my_list))
unique_list.sort()
second_largest = unique_list[-2]

print( second_largest)
