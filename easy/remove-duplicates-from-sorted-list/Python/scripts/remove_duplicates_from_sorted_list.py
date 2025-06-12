# Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
class ListNode: 
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def traverseLinkedList(self, l1: ListNode):
        head = l1 
        current = head 
        while current is not None:
            if current is not None:
                print(current.val, end=" -> ")
            else: print(current.val, end=" ")
            current = current.next
        
    def removeDuplicatesFromSortedList(self, l1: ListNode) -> ListNode:
        current = l1
        while current and current.next:
            # If current node value equals next node value, skip the next node
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                # Otherwise move to the next node
                current = current.next
        return l1
    
l1 = ListNode(1)
l2 = ListNode(2)
l3 = ListNode(3)
l4 = ListNode(3)
l5 = ListNode(3)
l6 = ListNode(4)
l7 = ListNode(5)

l1.next = l2 
l2.next = l3
l3.next = l4
l4.next = l5
l5.next = l6
l6.next = l7

sol = Solution()
print(sol.removeDuplicatesFromSortedList(l1))
print(sol.traverseLinkedList(sol.removeDuplicatesFromSortedList(l1)))



