# Given the root of a binary tree, return its maximum depth.
# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left 
        self.right = right

class Solution:
    def max_depth(self, root: TreeNode|None) -> int:
        if not root:
            return 0
        
        left_depth = self.max_depth(root.left)
        right_depth = self.max_depth(root.right)
        
        return max(left_depth, right_depth) + 1

tree = TreeNode(1, TreeNode(3, TreeNode(5), TreeNode(6)), TreeNode(4))
tree2 = TreeNode(
    val=10,
    left=TreeNode(
        val=5,
        left=TreeNode(
            val=3,
            left=TreeNode(2),
        right=TreeNode(
            val=7,
            left=TreeNode(6),
            right=TreeNode(
                val=8,
                right=TreeNode(9)))),
    right=TreeNode(
        val=15,
        right=TreeNode(
            val=20,
            right=TreeNode(25)))))
                    
sol = Solution()
print(sol.max_depth(tree))
print(sol.max_depth(tree2))
            


