# add the user names from the 'user_name.csv' file to a list
random_user_names = []
import random

for i in range(1000):
    # randomly generate a user name in the range [0, 99]
    user_name = random.randint(0, 99)
    random_user_names.append(user_name)
    
# save to a CSV file 'user_name.csv'
with open('user_name.csv', 'w') as f:
    for i in random_user_names:
        f.write(str(i) + '\n')
        print(i)
