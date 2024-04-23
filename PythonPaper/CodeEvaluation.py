# def find_max(numbers):
#   max_num = numbers[0]
#   for num in numbers:
#     if num < max_num
#       max_num = num
#     return max_num
  
#   # Calling the function
#   numbers = "3, 7, 2, 9, 5"
#   print("Maximum number is:" find_max(numbers))


######## Corrected code ########

def find_max(numbers):
  max_num = numbers[0]
  for num in numbers:

    #missing colon in if statement has been added
    #correct operator added
    if num > max_num:
      max_num = num

      # return statement moved outside the loop
  return max_num
  
  # Calling the function

  #numbers is now an list instead of a string
numbers = [3, 7, 2, 9, 5]

# missing comma in return statememnt 
print("Maximum number is:", find_max(numbers))


######## Feedback Section ########
## Ensure that indentation is correct as this can cause errors,
## The function and variable naming in this block is good and
## descriptive which make the code easy to comprehend.
## Add more comments to explain what each section of the code is doing. 
 