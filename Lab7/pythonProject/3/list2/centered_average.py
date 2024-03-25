def centered_average(nums):
    nums.sort()
    nums = nums[1:-1]
    return sum(nums) // len(nums)

print(centered_average([1, 2, 3, 4, 100]))
