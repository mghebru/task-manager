**Task Manager**
 Your team needs a component that can display a list of tasks, filter them by status, and show different visual states based on task properties. 
 The component should be reusable, type-safe, and handle various task states efficiently.





**Reflection Questions**
**How did you ensure unique keys for your list items?**
Each task was assigned a unique id to ensure uniqueness in between list items.

**What considerations did you make when implementing the filtering functionality?**
When implementing the filtering functionality, some considerations were to ensure that the user could easily change in between filtering 
items and that the UI was responsive to the filtering. I also wanted to ensure that the proper imports and ty....

**How did you handle state updates for task status changes?**
To handle state changes, I declared the state in taskFilter and imported this into taskItem which would 
first set a task status which user is then able to edit...


**What challenges did you face when implementing conditional rendering?**
....
