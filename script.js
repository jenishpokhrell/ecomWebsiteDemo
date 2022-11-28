let element1 = document.getElementById("btn1");
        element1.style.border = "1px solid black";
        element1.style.borderRadius = "50px";

        function myFunc() {
            document.getElementById("btn1").style.borderRadius = "50px";
            document.getElementById("btn1").style.border = "1px solid black";
            document.getElementById("btn1").style.color = "black";
            document.getElementById("btn2").style.border = "hidden";
            document.getElementById("btn3").style.border = "hidden";
            document.getElementById("products").style.transition = "1s";
            document.getElementById("products").style.opacity = "1";
            document.getElementById("second-products").style.opacity = "0";
            document.getElementById("third-products").style.opacity = "0";

            document.getElementById("products").style.visibility = "visible";
            document.getElementById("second-products").style.visibility = "hidden";
            document.getElementById("third-products").style.visibility = "hidden";
        }

        function myFunc2() {
            document.getElementById("btn2").style.borderRadius = "50px";
            document.getElementById("btn2").style.border = "1px solid black";
            document.getElementById("btn1").style.border = "hidden";
            document.getElementById("btn3").style.border = "hidden";
            // document.getElementById("btn3").stylehover.border = "hidden";
            document.getElementById("second-products").style.transition = "1s";
            document.getElementById("products").style.opacity = "0";
            document.getElementById("second-products").style.opacity = "1";
            document.getElementById("third-products").style.opacity = "0";

            document.getElementById("products").style.visibility = "hidden";
            document.getElementById("second-products").style.visibility = "visible";
            document.getElementById("third-products").style.visibility = "hidden";
        }
        function myFunc3() {
            document.getElementById("btn3").style.border = "1px solid black";
            document.getElementById("btn3").style.borderRadius = "50px";
            document.getElementById("btn1").style.border = "hidden";
            document.getElementById("btn2").style.border = "hidden";
            document.getElementById("third-products").style.transition = "1s";
            document.getElementById("products").style.opacity = "0";
            document.getElementById("second-products").style.opacity = "0";
            document.getElementById("third-products").style.opacity = "1";

            document.getElementById("products").style.visibility = "hidden";
            document.getElementById("second-products").style.visibility = "hidden";
            document.getElementById("third-products").style.visibility = "visible";
        }
        var a;
        function myclick(){
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