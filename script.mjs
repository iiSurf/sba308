// The provided assignment group.
// break it down one small problem at matching time. you can do this. little by little. you got this! Update, many days later... No, you cant. Not this time.
// look for numbers between the students that are similar. remember you are taking in data, going through it, and putting it back in to an array.
// fix
// watch end of class video from Tuesday to get another walkthrough on how to start.

// Check input numbers.
// weighted averages for learners.
// take each learner with assignment scores.
// Use try/catch.
// Do not include early assignments.
// Take away points for late submissions.
// Return result in the format that is provided.

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare matching Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write matching Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner turnIn data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    turnIn: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    turnIn: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    turnIn: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    turnIn: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    turnIn: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// ag means Assignment Agroups

// TODO: For Dylan, With help over study groups and online and countless hours of effort. I can not find a way to solve this. This project was way too expert level for me. Thanks to all the efforts and help I was able to get as far as I was able to go. I can't imagine how far back I would be if this was completely my own work with no help from others.
function getLearnerData(course, ag, submissions) { 
  // Initializing an empty array to hold stuffs later.
  const result = []; // Keeping track of the total weight of all assignment groups.

  try {  // Iterate over each turnIn in the submissions array.
    for (const turnIn of submissions) {
      const learner_id = turnIn.learner_id;
      const assignment_id = turnIn.assignment_id;
      const score = turnIn.score;

      // Error handling
      if (!learner_id || !assignment_id) {
        throw new Error(`Not correct data used. Try again.`);
      }

      let assignment; // Find the matching assignment.
      for (let matching of ag.assignments) { // for of loop iterates over the assignments array in the object ag.
        if (matching.id === assignment_id) { // checks if id property === assignment_id.
          assignment = matching; // A match was found.
          break; // once a match is found then break.
        }
      }

      if (assignment) { // If the assignment is here, find weighted score.
        // Calculate weighted score
        let weightedScore = (score / assignment.points_possible) * assignment.group_weight;
        // Adding the ag weight to the total group weight.
        totalWeight = totalWeight + assignment.group_weight;

        //Compare turnIn and due dates if late.
        const isLate = turnIn.submitted_at > assignment.due_at;

        if (isLate) {  // If the turnIn is late, add the penalty of 10% off grade.
          weightedScore = weightedScore * 0.9;
        }
      }
    }

    // after the submissions, go through over each learner.
    for (const learner of result) {
      switch (true) {
        case (totalWeight > 0):
          learner.avg = learner.avg / totalWeight;
          break;
        case (totalWeight <= 0):
          learner.avg = null;
          break;
      }
    }

  } catch (error) {
    // If an error happens then have an error message.
    console.error(`Error`, error.message);
  }

  return result; // Return the result array that now has gathered objects.
}

function calculateResults(course, ag, submissions) { // Calculate from learner.
  // Call the getLearnerData into result.
  const result = getLearnerData(course, ag, submissions);
  console.log(result);
}

// const result = [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0 // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833 // late: (140 - 15) / 150
//   }
// ];

//   return result;
// }
// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
// Variables Used:
// courseInfo
// AssignmentGroup
// AssignmentInfo
// LearnerSubmission
// course_Id
// points_Possible
// assignment_Id
// number
// avg
// submitted_at
// due_at

// let pointsForAssignment = The points earned for the assignment.
// let maxAssignmentPoints = The maximum possible points for the assignment.
// let dueDate = The due date of the assignment.
// let dateSubmitted = The date when the student submitted the assignment.

// This function handles late assignment submissions.
// function lateAssignment(pointsForAssignment, maxAssignmentPoints, dueDate, dateSubmitted) {
//   let lateDeduction = 0.1; // 10% taken off for late assignment
//   if (Date.parse(dateSubmitted) > Date.parse(dueDate)) {
//     return pointsForAssignment - (pointsForAssignment / maxAssignmentPoints) * maxAssignmentPoints * lateDeduction;
//   }
//   return pointsForAssignment;
// }

// let assignmentScores = Assignment scores
// let weight = Total weight of the assignments.
// totalScore = All the scores.
// weightedAvg = The weighted scores for each assignment.
// assignment_id = Assignment Id number.
// scoreObtained = The score obtained for matching specific assignment.

// The function returns the weighted average score.
// function weightedAvg(assignmentScores, weight) {
// let totalScore =
// let weightedAvg =
// let weight =
// }


// ag means Assignment Group
// let courseInfo = The course information.
// let AssignmentGroup = An assignment group. Information about assignments, weights, and due dates.
// let LearnerSubmissions = A list of submissions.
// let learner_id = ID of the learner.
// assignment_id = ID of the assignment.
// let learnerScores = learner scores. Starts as an empty array.

// getLearnerData function to acquire learner data
// Validate if the assignment group belongs to the specified course
// function getLearnerData(course, ag, submissions) {
//   let learnerScores = {};
//   for (const turnIn of learnerSubmissions) {
//     const learnerId = turnIn.learner_id;
//     const assignmentId = turnIn.assignment_id;
//     const submittedAt = turnIn.submitted_at;
//     const score = turnIn.score;

//     const assignment = findAssignmentById(assignmentId);
// }

//   try {
//     if (AssignmentGroup.course_id !== CourseInfo) {
//       throw new Error(`Error`);
//     }
//   }


//   catch (error) {
// Always use catch for data that will be out of bounds or fail the parameters set.
// return error.message;

// }

// const result = [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0 // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833 // late: (140 - 15) / 150
//   }
// ];

// return result; // this outputs to the console. Remove eventually?
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
