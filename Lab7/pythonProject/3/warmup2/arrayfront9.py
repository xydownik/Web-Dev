def array_front9(nums):
    end = len(nums)
    if end > 4:
        end = 4

    for i in range(end):
        if nums[i] == 9:
            return True
    return False

print(array_front9([1,2,3,4,5,6,7,8,9]))