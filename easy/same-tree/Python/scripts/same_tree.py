# Let's say you're given the roots of two binary trees, p and q.
# Can you write a function that checks whether these two trees are exactly the same?
# By "exactly the same," I mean that they must have the same structure, and each corresponding node must have the same value.
# How would you go about solving that?
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
  def isSameTree(self, p: TreeNode | None, q: TreeNode | None) -> bool:
        stack = [(p, q)]

        while stack:
            node1, node2 = stack.pop()

            if not node1 and not node2:
                continue
            if not node1 or not node2 or node1.val != node2.val:
                return False

            stack.append((node1.right, node2.right))
            stack.append((node1.left, node2.left))

        return True


            
