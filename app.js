//일단 username으로 넣어둠 추후 수정
if(localStorage.getItem("username")===null){
    const LogInButton= document.querySelector("#loginbutton");
    LogInButton.classList.remove("hidden");
}
else{
    //대충 hello username!
}
