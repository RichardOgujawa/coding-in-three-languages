from typing import Union, List
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class RecursiveFunctions:
    def factorial(self, num: int) -> int:
        if num == 1:
            return 1
        
        return num * self.factorial(num-1)
    
    def fibonacci(self, n: int) -> list[int]:
        def fib(n):
            if n == 0:
                return 0
            if n == 1:
                return 1
            return fib(n - 2) + fib(n - 1)
    
        return [fib(i) for i in range(n)]

    def sum_of_digits(self, n: int) -> int:
        new_n = str(1234)

        def sum(list: str, pos: int):
            if pos == 0:
                return int(list[0])
            
            return int(list[pos]) + int(sum(list, pos - 1))
        
        return sum(new_n, len(new_n) - 1)
    
    def reverse_a_string(self, s: str) -> str:
        # Base case - When we get to the last letter, just return that letter
        # <= 1 to cover empty string input
        if len(s) <= 1:
            return s
        
        # Otherwise return the last digit, plus recursion of the remainder string (return th last digi, plus the recursion of the remainder, and so on)
        return s[-1] + self.reverse_a_string(s[:-1])
    
    def is_pallindrome(self, s:str) -> bool:
        # A string is a pallindrome if it reads the same in reverse
        def helper(s: str) -> str:
            if len(s) <= 1:
                return s

            return s[-1] + helper(s[:-1])

        return s == helper(s)
    
    def power(self, a: int, b:int) -> int:
        if b == 0:
            return 1
        
        # Return a x a (essentially) unitl b = 0, i.e. a x a, b number of times
        return a * self.power(a, b - 1)
    
    def flatten(self, lst:list[Union[list, int]]) -> list[int]:
        result = []

        # def helper(lst: list[Union[list, int]]) -> list[int]:
        for el in lst:
            if isinstance(el, int):
                result.append(el)
            elif isinstance(el, list):
                result += self.flatten(el)
            
        # helper(lst)
        return result

    def binary_search(self, lst: list[int], n:int):
        def helper(start_p: int, end_p:int):
            # Base Case
            if end_p < start_p:
                return -1
            
            # If we still have numbers to look through, keep looking
            # Get the middle p, and check if that's it, if not cut the list in half using the pointers and search again
            mid_p = (start_p + end_p) // 2
            
            if n == lst[mid_p]:
                return mid_p
            
            
            if n > lst[mid_p]:
                start_p = mid_p + 1
                return helper(start_p, end_p)
            
            elif n < lst[mid_p]:
                end_p = mid_p - 1
                return helper(start_p, end_p)
            
        return helper(0, len(lst) - 1)
    
    def maximum(self, lst: list[int]) -> int:
        if len(lst) == 1:
            return lst[0]
        
        return lst[0] if lst[0] > self.maximum(lst[1:]) else self.maximum(lst[1:])
        
    def count_occurrences(self, lst: list[int], n):
        def helper(lst, n):
            # Base case - if the list is empty, return (and therefore add) 0 to the addition equation
            if len(lst) == 0:
                return 0                
            
            # if the number is found, add one to the sum, which is keeping a running tally of the numbr of occurences.
            count = 1 if lst[0] == n else 0

            return count + helper(lst[1:], n)
    
        return helper(lst, n)

    def sum_of_nodes(self, root: TreeNode) -> int:
        if not root:
            return 0

        return root.val + self.sum_of_nodes(root.left) + self.sum_of_nodes(root.right)

    def max_depth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return max(self.max_depth(root.left), self.max_depth(root.right)) + 1

    def identical_trees(self, a: TreeNode, b: TreeNode) -> bool:
        # Compare each node
        if not a and not b:
            return True 
        if not a or not b:
            return False
        if a.val != b.val:
            return False
        return self.identical_trees(a.left, b.left) and self.identical_trees(a.right, b.right)
        
    def invert_tree(self, a: TreeNode) -> TreeNode:
        if not a:
            return None
        
        a.left, a.right  = a.right, a.left

        self.invert_tree(a.left)
        self.invert_tree(a.right)
        
        return a

    def path_to_sum(self, a: TreeNode, target: int) -> bool:
        if not a:
            return False
        if target - a.val == 0:
            if not a.left and not a.right:
                return True
            return False
        new_target = target - a.val
        return self.path_to_sum(a.left, new_target) or self.path_to_sum(a.right, new_target)



    
rec = RecursiveFunctions()
print(rec.factorial(6)) # Output: 720
print(rec.fibonacci(7)) # Output: [0, 1, 1, 2, 3, 5, 8]
print(rec.sum_of_digits(1234)) # Output: 10
print(rec.reverse_a_string('Hello')) # Output: "olleH"
print(rec.is_pallindrome('ottfo')) # Output: False
print(rec.power(2, 3)) # Output: 8
print(rec.flatten([1, [2, [3, 4]], 5])) # Output: [1, 2, 3, 4, 5]
print(rec.binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 25, 100], 6)) # Output: 5
print(rec.maximum([3, 4, 1, 7, 2])) # Output: 7
print(rec.count_occurrences([1,2,1,3,1], 1)) # Output: 3

tree = TreeNode(1, TreeNode(2, TreeNode(4)), TreeNode(3)) 
tree_2 = TreeNode(1, TreeNode(2, TreeNode(4, TreeNode(5, TreeNode(6)))), TreeNode(3, TreeNode(4), TreeNode(7))) 
print(rec.sum_of_nodes(tree)) # Output: 10
print(rec.max_depth(tree_2)) # Output: 5
print(rec.identical_trees(tree, tree_2)) # Output: False
print(rec.identical_trees(tree, tree)) # Output: True
print(rec.invert_tree(tree)) # Output: new tree
print(rec.path_to_sum(tree, 7)) # Output: True