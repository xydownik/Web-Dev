from datetime import datetime

input_date = input("DD MM YYYY ")

date_obj = datetime.strptime(input_date, "%m %d %Y")

day_of_week = date_obj.strftime("%A").upper()

print(day_of_week)
