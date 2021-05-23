name_students=[];
function submit(){
var name_1=document.getElementById("text_box_1").value;
var name_2=document.getElementById("text_box_2").value;
var name_3=document.getElementById("text_box_3").value;
var name_4=document.getElementById("text_box_4").value;
name_students.push(name_1);
name_students.push(name_2);
name_students.push(name_3);
name_students.push(name_4);
console.log(name_students);
document.getElementById("display").innerHTML=name_students;
document.getElementById("sub").style.display="none";
document.getElementById("srt").style.display="inline-block";
}
function sort(){
    name_students.sort();
    console.log("name_students");
    document.getElementById("display").innerHTML=name_students;
}
