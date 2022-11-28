const element = document.getElementById("foot");
    const addelement = document.createElement("foot");
    function myclick(){
        document.querySelector(".popup").style.display="flex";
        document.querySelector("html").style.overflow="hidden";
        element.remove();
    }
    function myclick2(){
        document.querySelector(".popup").style.display="none";
        document.querySelector("html").style.overflow="auto";
        document.body.appendChild(element);
    }
    var a;
        function myclick12(){
            if(a==1){
                document.getElementById("choose").style.opacity="1";
                document.getElementById("choose").style.visibility="visible";
                return a=0;
            }else{
                document.getElementById("choose").style.opacity="0";
                document.getElementById("choose").style.visibility="hidden";
                return a=1;
            }
        }