def sum67(nums):
    total = 0
    skip_section = False

    for num in nums:
        if num == 6:
            skip_section = True
        elif num == 7 and skip_section:
            skip_section = False
        elif not skip_section:
            total += num

    return total

print(sum67([1,2,2]))