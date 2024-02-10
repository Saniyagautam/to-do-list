const inputBox=document.getElementById("input");
const listcontainer=document.getElementById("list-container");
const clear=document.getElementById("clrbtn");

function addtask(){
     if(inputBox.value ===''){
        alert("You must write something");
     }
     else{
      
        let li=document.createElement("li");
        li.innerText=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerText="\u00d7";
        li.appendChild(span);
      
     }
     inputBox.value='';
     saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.nodeName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.nodeName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtasks(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtasks();

function clearData() {
    localStorage.removeItem("data");
    listcontainer.innerHTML = "";
}
clear.addEventListener("click",()=>{
    clearData();
});
