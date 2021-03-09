function Gpa(){
    var marks = document.getElementById("bangla").value
    if(marks < 0 || marks > 100){
        alert("Wrong Input For Subject - Bangla")
    }
    else if(marks >= 80){
        marks = "A+"
        document.getElementById("result").innerHTML = marks 
    }
    else if(marks >= 70 && marks < 80){
        marks = "A"
        document.getElementById("result").innerHTML = marks 
    }
   else if(marks >= 60 && marks < 70){
        marks = "A-"
        document.getElementById("result").innerHTML = marks 
    }
   else if(marks >= 50 && marks < 60){
        marks = "B"
        document.getElementById("result").innerHTML = marks 
    }    
   else if(marks >= 40 && marks < 50){
        marks = "C"
        document.getElementById("result").innerHTML = marks 
    }
    else if(marks >= 33 && marks < 40){
        marks = "D"
        document.getElementById("result").innerHTML = marks 
    }
    else{
        marks = "F"
        document.getElementById("result").innerHTML = marks 
    }
}
function Gpa_english(){
    var marks = document.getElementById("english").value
    if(marks < 0 || marks > 100){
        alert("Wrong Input For Subject - English")
    }
    else if(marks >= 80){
        marks = "A+"
        document.getElementById("e_result").innerHTML = marks 
    }
    else if(marks >= 70 && marks < 80){
        marks = "A"
        document.getElementById("e_result").innerHTML = marks 
    }
   else if(marks >= 60 && marks < 70){
        marks = "A-"
        document.getElementById("e_result").innerHTML = marks 
    }
   else if(marks >= 50 && marks < 60){
        marks = "B"
        document.getElementById("e_result").innerHTML = marks 
    }    
   else if(marks >= 40 && marks < 50){
        marks = "C"
        document.getElementById("e_result").innerHTML = marks 
    }
    else if(marks >= 33 && marks < 40){
        marks = "D"
        document.getElementById("e_result").innerHTML = marks 
    }
    else{
        marks = "F"
        document.getElementById("e_result").innerHTML = marks 
    }
}
function Gpa_math(){
    var marks = document.getElementById("math").value
    if(marks < 0 || marks > 100){
        alert("Wrong Input For Subject - Math")
    }
    else if(marks >= 80){
        marks = "A+"
        document.getElementById("m_result").innerHTML = marks 
    }
    else if(marks >= 70 && marks < 80){
        marks = "A"
        document.getElementById("m_result").innerHTML = marks 
    }
   else if(marks >= 60 && marks < 70){
        marks = "A-"
        document.getElementById("m_result").innerHTML = marks 
    }
   else if(marks >= 50 && marks < 60){
        marks = "B"
        document.getElementById("m_result").innerHTML = marks 
    }    
   else if(marks >= 40 && marks < 50){
        marks = "C"
        document.getElementById("m_result").innerHTML = marks 
    }
    else if(marks >= 33 && marks < 40){
        marks = "D"
        document.getElementById("m_result").innerHTML = marks 
    }
    else{
        marks = "F"
        document.getElementById("m_result").innerHTML = marks 
    }
}
function Gpa_science(){
    var marks = document.getElementById("science").value
    if(marks < 0 || marks > 100){
        alert("Wrong Input For Subject - Science")
    }
    else if(marks >= 80){
        marks = "A+"
        document.getElementById("s_result").innerHTML = marks 
    }
    else if(marks >= 70 && marks < 80){
        marks = "A"
        document.getElementById("s_result").innerHTML = marks 
    }
   else if(marks >= 60 && marks < 70){
        marks = "A-"
        document.getElementById("s_result").innerHTML = marks 
    }
   else if(marks >= 50 && marks < 60){
        marks = "B"
        document.getElementById("s_result").innerHTML = marks 
    }    
   else if(marks >= 40 && marks < 50){
        marks = "C"
        document.getElementById("s_result").innerHTML = marks 
    }
    else if(marks >= 33 && marks < 40){
        marks = "D"
        document.getElementById("s_result").innerHTML = marks 
    }
    else{
        marks = "F"
        document.getElementById("s_result").innerHTML = marks 
    }
}
function Total_GPA(){
    var sub1 = document.getElementById("bangla").value          
    var sub2 = document.getElementById("english").value       
    var sub3 = document.getElementById("math").value     
    var sub4 = document.getElementById("science").value  

    var avg = ( parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) ) / 4 



    if(avg >= 80){
        marks = "A+"
        document.getElementById("total_gpa").innerHTML = marks 
    }
    else if(avg >= 70 && avg < 80){
        marks = "A"
        document.getElementById("total_gpa").innerHTML = marks 
    }
   else if(avg >= 60 && avg < 70){
    marks = "A-"
        document.getElementById("total_gpa").innerHTML = marks 
    }
   else if(avg >= 50 && avg < 60){
    marks = "B"
        document.getElementById("total_gpa").innerHTML = marks 
    }    
   else if(avg >= 40 && avg < 50){
    marks = "C"
        document.getElementById("total_gpa").innerHTML = marks 
    }
    else if(avg >= 33 && avg < 40){
        marks = "D"
        document.getElementById("total_gpa").innerHTML = marks 
    }
    else{
        marks = "F"
        document.getElementById("total_gpa").innerHTML = marks 
    }

}



