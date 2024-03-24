def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False


a = True
b = False

print(sleep_in(a,b))