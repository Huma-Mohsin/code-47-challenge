// // Question 139: List three reserved words in JavaScript and create a valid use case for each.
// // Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.
//Solution:
//In JavaScript, reserved keywords are words that have special meanings and purposes within the language, and they cannot be used as identifiers (such as variable names, function names, or labels). These keywords are an integral part of the syntax and have predefined functionality. Here's a list of some of the reserved keywords in JavaScript:
//await,break,case,catch,class,const,continue,debugger,default,delete,do,else,enum,export,extends,false,finally,for,function,if,implements,import,in,instanceof,interface,let,new,null,package,private,protected,public,return,static,super,switch,this,throw,true,try,typeof,undefined,var,void,while,with,yield.
// These keywords are reserved for their specific purposes in the language, and you cannot use them as variable names or function names in your code. Trying to use them as identifiers will result in a syntax error.
//reserved words in practical.
//1- let
var studentName = "Huma Mohsin";
var id = "102167";
//2- if-else
if (studentName === "Huma Mohsin" && id === "102167") {
    console.log("You Login Successfully");
}
else {
    console.log("Invalid Information");
}
//3- typeof    //used to find type of variable specifically.
console.log(typeof id, id);
console.log(typeof studentName, studentName);
function Student_Info(candidate) {
    console.log("Student Name : ".concat(candidate.name));
    console.log("Enrolled Course : ".concat(candidate.course));
    console.log("Course Duration : ".concat(candidate.duration));
    console.log("Enrolled In Courses : ".concat(candidate.No_of_courses));
}
var obj_std = {
    name: "HUMA Mohsin",
    course: "Artifical Intelligence",
    duration: "1 year",
    No_of_courses: 1
};
Student_Info(obj_std);
//Author-"HUMA MOHSIN"
