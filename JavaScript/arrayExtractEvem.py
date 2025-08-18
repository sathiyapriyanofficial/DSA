# Function to extract even numbers from a list
def extractEvenNumbers(arr):
    evenArray = []
    for value in arr:
        if value % 2 == 0:          # Check if the number is even
            evenArray.append(value)  # Add to evenArray
    return evenArray

# Example list
listItem = [1, 2, 3, 4, 5]

# Using the function
evenNumbers = extractEvenNumbers(listItem)
print("Even numbers:", evenNumbers)
