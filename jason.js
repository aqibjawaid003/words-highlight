let T= document.getElementById("p_tag");
function search(){
    let input = document.getElementById("input").value;
    if (input===""){
 alert("please write something.....");
    }else{
        
        T.innerHTML = T.innerText.replace(RegExp(input,"gi"),"<mark>$&</mark>");
    }
}