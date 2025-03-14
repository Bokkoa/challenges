# Problem Statement

You are assigned to put some amount of boxes onto one truck. You are given a 2D array `boxTypes`, where `boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]`:

- **numberOfBoxesi** is the number of boxes of type i.
- **numberOfUnitsPerBoxi** is the number of units in each box of the type i.

You are also given an integer `truckSize`, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed `truckSize`.

**Return** the maximum total number of units that can be put on the truck.

---

## Example 1

**Input:**  
`boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10`  

**Output:**  
`91`  

---

### Constraints

1 <= boxTypes.length <= 1000
1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000
1 <= truckSize <= 10^6