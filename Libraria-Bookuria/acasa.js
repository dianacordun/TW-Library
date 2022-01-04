window.onload=function ()
{ 
    var intrebare=document.querySelector("#intrebare");
    var startquiz=document.querySelector("#startquiz");
    var form=document.querySelector("#form");
    var recomandare=document.querySelector("#recomandare");

    intrebare.style.visibility = "hidden";
    form.style.visibility = "hidden";

    startquiz.onclick=function()
    {
        document.getElementById('incipit').style.color = randomColors();
        intrebare.style.visibility = "visible";
        form.style.visibility = "visible";

        var t=setTimeout(function()
        {alert("Mai aveți nevoie de timp de gândire? Reîncărcați pagina!");

            var butoane=document.querySelectorAll("input");

            for(i=0;i<butoane.length;i++)
            {
                butoane[i].disabled=true;
            }

        },10000);

        form.onchange=function()
        {
            clearTimeout(t);
            var butoane=document.querySelectorAll("input");
            for(i=0;i<butoane.length;i++)
            {

                butoane[i].disabled=true;
                if (butoane[i].checked == true) {
                    recomandare.innerHTML = "Vă recomandăm să cititi: "+'<br><br>' + '<img src="'+ butoane[i].value +'" style="width: 20%; height: 20%">';

                }
            }

        }
    }

        function randomColors() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }


}
