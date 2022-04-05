function changeBox(type){
    if (type == sports){
       document.getElementById("sports").style.display="flex";
        document.getElementById("relax").style.display="none";
        document.getElementById("stor").style.display="none";
    } else if ( type == relax){ 
                document.getElementById("sports").style.display="none";
                document.getElementById("relax").style.display="flex";
                document.getElementById("stor").style.display="none";
    } else if ( type == stor){ 
                document.getElementById("sports").style.display="none";
                document.getElementById("relax").style.display="none";
                document.getElementById("stor").style.display="flex";

    }
    
}

let object = { 
    boxing : {
        name: " boxin ",
        info: " cool",
    },
    taiko: {
        name: " boxin ",
        info: " cool",
    },
    kart: {
        name: " boxin ",
        info: " cool",
    },
    spa: {
        name: " boxin ",
        info: " cool",
    },
    sawn: {
        name: " boxin ",
        info: " cool",
    },
    jakoze: {
        name: " boxin ",
        info: " cool",
    },
     hko: {
        name: " boxin ",
        info: " cool",
    },
    pro: {
        name: " boxin ",
        info: " cool",
    },
    gbox: {
        name: " boxin ",
        info: " cool",
    }
}
function viewinfo(key) { 
document.getElementById("info-containar").display = "flex";
let dataName = object[key]["name"]
let dataInfo = object[key]["info"]
document.getElementById("detales-title").innerHTML = dataName;
document.getElementById("datales-info").innerHTML = dataInfo;
}