"""
LeetCode Problem: Merge Two Sorted Lists

Description:
You are given the heads of two sorted linked lists, list1 and list2.
Merge the two lists into a single sorted linked list and return its head.
The resulting list should be made by splicing together the nodes of the first two lists.

Constraints:
- The number of nodes in both lists is in the range [0, 50].
- -100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order.

Link: https://leetcode.com/problems/merge-two-sorted-lists/
"""

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    # def traverseList(self, head):
    #     current = head
    #     while current: 
    #         print(current.val, end="->")
    #         current = current.next

    # def convertToList(self, head):
    #     current = head
    #     new_list = list()
    #     while current: 
    #         new_list.append(current.val)
    #         current = current.next
    #     return new_list

    def mergeTwoLists(self, list1, list2):        
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        # Travertse list one and list two
        # At each point, check if the current item from l1 is bigger than or less than the one from l2
        # If so add l1's node, if not add l2's node
        # list1_current = list1
        # list2_current = list2

        # if not list1:
        #     return self.traverseList(list2)
        # if not list2:
        #     return self.traverseList(list1)
        # if list1 and list2:
        new_list = ListNode() # Initialize the list node with a dummy head
        current = new_list # Then create a pointer which points to the head node
        
        # While there are still nodes to traverse through in both lists
        while list1 and list2: 
            # Append the smaller-valued node
            if list1.val < list2.val:
                current.next = list1
                list1 = list1.next 
            else:
                current.next = list2
                list2 = list2.next 
            
            current = current.next # new_list is the dummy head — it’s not meant to change after it’s initialized. Current starts at new_list and is moved forward step-by-step as you add nodes. 
            # If you kept assigning new_list.next = ... in every loop iteration, you’d always be changing the next of the dummy node, and lose the previous connections — effectively ending up with only the last inserted node attached.
        
        # Attach the remainder of the list
        current.next = list1 if list1 else list2

        # Return list without dummy head
        # return self.traverseList(new_list.next)
        return new_list.next


# #List 1
# l1_node1 = ListNode(1)  
# l1_node2 = ListNode(2)  
# l1_node3 = ListNode(4)

# l1_node1.next = l1_node2
# l1_node2.next = l1_node3

# #List 2
# l2_node1 = ListNode(1)  
# l2_node2 = ListNode(3)  
# l2_node3 = ListNode(4)

# l2_node1.next = l2_node2
# l2_node2.next = l2_node3

# solution = Solution()
# print(solution.mergeTwoLists(l1_node1, l2_node1))
# print(solution.mergeTwoLists(l1_node1, ListNode()))
# print(solution.mergeTwoLists(ListNode(), l2_node1))



##### For practise purposes
# Traversing a list, my method
# def print_linked_list(head):
#     current = head
#     while current != None:
#         print(current.val)
#         head = current.next
#         current = head

# print_linked_list(node1)

# # Chat GPT's solution
# def print_linked_list_GPT(head):
#     current = head
#     while current: # != None is unnecessary, just check if current is truthy
#         print(current.val, end=" -> ") #Purely visual
#         current = current.next # No need to do reassign head and then use that as the value for current; skip the unnecessary pointer
#     print("None") # Show that we've reached the end of the linked list

# print_linked_list_GPT(node1)
