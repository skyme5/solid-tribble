import math
import atexit

@atexit.register
def goodbye():
    print('You are now leaving the Python sector.')

def print_star(number: int):
    for i in range(number):
        for _ in range(number - i):
            print(" ", end=" ")

        for j in range(i):
            print(2*j + 1, end=" ")
        
        for j in range(i-1):
            print(chr(j + 65), end=" ")
        
        print("")

    for i in range(number):
        for _ in range(i):
            print(" ", end=" ")

        for j in range(number - i):
            print(2*j + 1, end=" ")
        
        for j in range(number - i-1):
            print(chr(j + 65), end=" ")

        print(" ")

while(True):
    try:
        lucky_number = input('Please enter your lucky number: ')
        if lucky_number == '':
            break
        print_star(int(lucky_number))
    except:
        print('Please enter a valid integer')
        pass

