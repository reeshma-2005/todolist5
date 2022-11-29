function todolist(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            var output1="";
            var output2="";
            var out="";
            for(var i=0;i<response.length;i++){
                // output+="<li>"+response[i].title+"<li>";
                output1+="<li>"+response[i].id;
                output+="<li>"+response[i].title;
                  
                // if(response[i].completed.value==true){
                //     console.log("j");
                //     output2+="<li><input type=checkbox checked disabled>";  
                // }
                // else{
                //     output2+="<li><input type=checkbox>";
                // }
            }
            for(var i=0;i<response.length;i++){
                // output+="<li>"+response[i].title+"<li>";
                // output1+="<li>"+response[i].id;
                // output+="<li>"+response[i].title;
                  
                if(response[i].completed==true){
                
                    output2+="<li><input type=checkbox checked disabled>";  
                }
                else{
                    output2+="<li><input type=checkbox name=checklist onclick=checklistcounter()>";
                }
            }
            // document.getElementById("title1").innerHTML=output;
            document.getElementById("left").innerHTML=output1;
            document.getElementById("middle").innerHTML=output;
            document.getElementById("right").innerHTML=output2;
 
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
function checklistcounter(){
    var promise=new Promise(function(resolve,reject){
        var count=0;
        var checklist=document.getElementsByName("checklist");
        for(i=0;i<checklist.length;i++){
            if (checklist[i].checked==true){
                count=count+1;
                console.log(count);
            }
        }
        if(count==5){
           resolve("Congrats. 5 Tasks have been Successfully Completed");
            // alert("press OK to refresh your page");
            // resolve("Congrats. 5 Tasks have been Successfully Completed");
            // location.reload();
        }
        // else{
        //     reject("not completed");
        // }
     

    })
    promise
      .then(function(s){
           alert(s);
           
      })
    //   .catch(function(e){
    //     alert(e);
    //   })
}
