# Interviewer: Let's say I give you a binary tree. I want you to write a function 
# that determines whether this tree is symmetric around its center — in other words, 
# is it a mirror image of itself? Can you walk me through how you would approach that?

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def is_symmetric(self, root: TreeNode) -> bool:
        if not root:
            return True
    
        stack = [(root.left, root.right)]
    
        while stack:
            left, right = stack.pop()
        
            if not left and not right:
                continue
            
            if not left or not right or left.val != right.val:
                return False
        
            # Mirror the children
            stack.append((left.left, right.right))
            stack.append((left.right, right.left))
    
        return True

sol = Solution()

tree = TreeNode(1)
tree.left = TreeNode(2, TreeNode(4), TreeNode(3))
tree.right = TreeNode(2, TreeNode(3), TreeNode(4))

print(sol.is_symmetric(tree))