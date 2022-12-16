document.querySelector("#push").onclick =function(){
if(document.querySelector("#Todo input").value.length==0) { 
 alert("please enter a task ")
}else{
    document.getElementById("tasks").innerHTML += `
    <div class="tasks">
    <h3 id="taskname">
    <i class="fa-solid fa-arrow-right"></i>
        ${document.querySelector('#Todo input').value}
    </h3>
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>
</div>
`   ;
}

var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
}
        }
    }