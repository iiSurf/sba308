// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
// break it down one small problem at a time. you can do this. little by little. you got this!
// look for numbers between the students that are similar. remember you are taking in data, going through it, and putting it back in to an array.
// fix

// watch end of class video from Tuesday to get another walkthrough on how to start.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
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

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

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
function lateAssignment(pointsForAssignment, maxAssignmentPoints, dueDate, dateSubmitted) {
  let lateDeduction = 0.1; // 10% taken off for late assignment
  if (Date.parse(dateSubmitted) > Date.parse(dueDate)) {
    return pointsForAssignment - (pointsForAssignment / maxAssignmentPoints) * maxAssignmentPoints * lateDeduction;
  }
  return pointsForAssignment;
}

// let scores = Assignment scores
// let weight = Total weight of the assignments.
// totalScore = All the scores.
// weightedScore = The weighted scores for each assignment.
// assignment_id = Assignment Id number.
// score = The score obtained for a specific assignment.

// The function returns the weighted average score.
// function weightedAvg(points, weight) {
//   let total = 
// }

// ag means Assignment Group
function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  // check if course_id is not equal to CourseInfo
  // fix github connection yet again. and again...


  try {
    if (AssignmentGroup.course_id !== CourseInfo) {
      throw new Error(`Error, Course_id is not the same as Course Info `);
    }
  }


  catch (error) {
    // Always use catch for data that will be out of bounds or fail the parameters set.
    return error.message;

  }

  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result; // this outputs to the console. Remove eventually?
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
