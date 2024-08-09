function cf(){
    let ce = document.getElementById("e").value
    let cp = document.getElementById("p").value
    if(ce == "JS@js.com"){
        if(cp == "JS9"){
            window.open("a.html");
        }
        else{
            alert("Wrong Password");
        }
    }
    else{
        alert("Wrong Email");
    }
}