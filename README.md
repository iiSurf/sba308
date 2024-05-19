> [!Note]
> Still under development as of May 19, 2024
# SBA 308 Javascript
![screenshot of project in VS Code](https://github.com/iiSurf/sba308/assets/87113036/1d294e58-1a9b-49a6-95eb-a7468cbd8f73)

## Reflection (optional)

### What could you have done differently during the planning stages of your project to make the execution easier?
I have spent many hours planning and writing small step by step instructions. I have found that it resulted in code actually typed in whether it is commented out and unfinished, pseudocode, or working code. I am unsure what more I could have done to make it easier though.
### Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
It was the creation of objects and using aritmetic on whether to store or not calculate was hard. Understanding what the questions in the work sheet is one of the biggest battles. Not a lot of information there as well as not worded well. 
### What would you add to, or change about your application if given more time?
I would continue to try and solve this. But I have not yet acquired the skills to complete a project such s this. Someday soon I hope. Makes me want to continue to work harder and eventually I will understand more.
### Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:
To be continued...
## Objectives
- Employ basic JavaScript syntax accurately.
- Implement control flow structures such as conditionals and loops effectively. Use arrays and objects to organize and manage data.
- Develop functions to create reusable code.
- Utilize loops and iteration to navigate through data collections.
- Implement error handling to manage potential code failures gracefully.

## Create a script that gathers data, processes it, and then outputs a consistent result as described by a specification.
- This program validates input data Initialize data structures (e.g., learnerScores, assignmentDueDates)
- Calculate weighted averages for learners
- Create a dictionary for each learner with assignment scores
- Handle errors (try/catch)
- Exclude assignments that are not yet due
- Deduct points for late submissions
- Return formatted result

If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.

You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string?

Use try/catch and other logic to handle these types of errors gracefully.
If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.

Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.

