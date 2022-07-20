document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByTagName("button");
        for(let button of buttons){
            button.addEventListener("click",function(){
                alert("you clicked")
            })
        }
})