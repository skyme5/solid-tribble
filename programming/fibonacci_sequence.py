import functools

@functools.cache
def fib(number: int):
    fib_sequence = [0, 1]

    while len(fib_sequence) < number:
        fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])

    return fib_sequence

def print_fibonnaci(number: int):
    print(", ".join([str(i) for i in fib(number)]))

while(True):
    try:
        lucky_number = input('Please enter a number: ')
        print_fibonnaci(int(lucky_number))
    except e:
        print('Please enter a valid integer')
        pass

