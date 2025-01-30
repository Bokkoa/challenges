# Deep Copy of a Linked List with Random Pointers

A linked list of length `n` is given such that each node contains an additional **random pointer**, which could point to any node in the list, or `null`.

## **Problem Statement**
Construct a **deep copy** of the list. The deep copy should consist of exactly `n` brand-new nodes, where each new node has:
- Its value set to the value of its corresponding original node.
- Both the `next` and `random` pointer of the new nodes pointing to new nodes in the copied list.

The pointers in the original list and copied list should represent the same **list state**. **None of the pointers in the new list should point to nodes in the original list.**

## **Example**
If there are two nodes `X` and `Y` in the original list where
``X.random --> Y``

Then, in the copied list, the corresponding nodes `x` and `y` should have ``x.random-->y``


## **Input Representation**
The linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of ``[val, random_index]`` where:

- `val`: An integer representing `Node.val`.
- `random_index`: The index of the node (range from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.


## Example 1:

![alt text](image.png)

Input: ``head = [[7,null],[13,0],[11,4],[10,2],[1,0]]``

Output: ``[[7,null],[13,0],[11,4],[10,2],[1,0]]``

## Example 2:
![alt text](image-1.png)
Input: ``head = [[1,1],[2,1]]``

Output: ``[[1,1],[2,1]]``

Example 3:
![alt text](image-2.png)
Input: ``head = [[3,null],[3,0],[3,null]]``

Output: ``[[3,null],[3,0],[3,null]]``

## **Constraints**

- ``0 <= n <= 1000``
- ``-10^4 <= Node.val <= 10^4``
- ``Node.random`` is ``null`` or is pointing to some node in the linked list.