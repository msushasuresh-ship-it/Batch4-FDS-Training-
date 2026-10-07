print("===== PERSONAL EXPENSE CALCULATOR =====")

# Get income
income = float(input("Enter your monthly income: ₹"))

# Get number of expenses
n = int(input("Enter number of expenses: "))

total_expense = 0
expenses = {}

# Get expense details
for i in range(n):
    print("\nExpense", i + 1)

    category = input("Enter expense category (Food/Travel/Shopping/Bills/Other): ")
    amount = float(input("Enter amount: ₹"))

    total_expense += amount

    if category in expenses:
        expenses[category] += amount
    else:
        expenses[category] = amount

# Calculate savings
savings = income - total_expense

# Display summary
print("\n========== SUMMARY REPORT ==========")
print("Income          : ₹", income)
print("Total Expenses  : ₹", total_expense)
print("Savings         : ₹", savings)

print("\n----- Expense Categories -----")

for category, amount in expenses.items():
    print(category, ": ₹", amount)

# Savings status
print("\n----- Status -----")

if savings > 0:
    print("Good! You have saved money this month.")
elif savings == 0:
    print("Your income and expenses are equal.")
else:
    print("Warning! Your expenses are more than your income.")

print("====================================")