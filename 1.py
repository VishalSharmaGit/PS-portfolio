# 🏋️ Mini Practice Tasks For You

# Take name and salary as input and print:
# "Hello Vishal, your salary is 30000"
name = input("Enter your name ")
while True:
    try:
        salary = int(input("Enter the salary "))
        break
    except ValueError:
        print("Invalid Number, Please enter a valid number")
# salary = int(input("Enter your salary "))
print("Hello " + name + ", your salary is " + str(salary))


# Take two numbers from user and print:
num1 = int(input("Enter first number "))
num2 = int(input("Enter second number "))
# Sum
print("Sum is", num1 + num2)
# Difference
print("Difference is", num1 - num2)
# Multiplication
print("Multiplication is", num1 * num2)
# Division
print("Division is", num1 / num2)

# Ask user for age and check:
age = int(input("ENter your age "))
# If age > 18 → print "Eligible"

# Else → print "Not Eligible"
if (age> 18):
    print("You are elegible")
else:
    print("You are not elegible")