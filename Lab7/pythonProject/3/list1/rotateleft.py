def rotateleft(arr):
    arr.append(arr[0])
    arr.pop(0)
    return arr

print(rotateleft([1,2,3]))