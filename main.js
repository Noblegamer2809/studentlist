name_of_the_array=[];

function submit(){
   var name1=document.getElementById("input1").value;
   var name2=document.getElementById("input2").value;
   var name3=document.getElementById("input3").value;
   var name4=document.getElementById("input4").value;

   name_of_the_array.push(name1);
   name_of_the_array.push(name2);
   name_of_the_array.push(name3);
   name_of_the_array.push(name4);

   console.log(name_of_the_array);
   document.getElementById("result").innerHTML=name_of_the_array;

   document.getElementById("submit").style.display="none";
   document.getElementById("sort").style.display="inline-block";
}
function sort(){
    name_of_the_array.sort();
    console.log(name_of_the_array);
    document.getElementById("result").innerHTML=name_of_the_array;
}