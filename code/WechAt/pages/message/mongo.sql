// DATABASE
Courses
{
    "_id": {"$oid": string},
    "course_id": int, //course id
    "department": string,
    "course_number": int,
    "course_name": string,
    "locations": [int] //list of location ids
    "instructors": [int], //list of instructor ids
    "year_offered": int,
    "students": [int] //list of student ids
    "reviews": [int] //list of review ids
}

Reviews
{
    "_id": {"$oid": string},
    "review_id": int
    "student_id": int,
    "student_name": string //student name
    "course_id": string, //reviewed course id
    "rating": int, //student rating of the course
    "channel": string //how the student took the course
}

Instructors
{
    "_id": {"$oid": string},
    "instructor_id": int,
    "instructor_name": string
    "salary": int, //instructor's salary
    "office": int //instructor's office id
}

Locations
{
    "_id": {"$oid": "617a47"},
    "location_id": int,
    "capacity": int, //number of seats in the classroom
    "num_of_window": int, //number of windows in the classroom
    "num_of_doors": int //number of doors in the classroom
}

// QUESTION
// For this question, only consider courses that has a course_number between 200 and 400 (inclusive). 
// For all the instructors that taught these courses, write one MongoDB query to output 
// (1) the instructor_id, 
// (2) the year between the most recent and the oldest course they taught (as year_diff), 
// (3) the number of unique students that they taught (as num_stu),
// (4) the unique number of departments that the courses belongs to (as num_dept).
// num_stu: the number of unique students the instructor taught
// num_dept: the number of unique department associated with the courses the instructor taught
// year_diff: the difference between the most recent and oldest year of the year_offered for the courses.

// Requirement:
// 1. Use $addToSet
// 2. Use $size

db.Courses.aggregate([
    {
        $match: {
            course_number: {$gte: 200, $lte: 400}
        }
    },
    {
        $unwind: "$instructors"
    },
    {
        $group: {
            _id: "$instructors",
            
        }
    }
])