
        function todo(){
            //valores de nombre
            var nombre=document.getElementById("nombre").value;
            var despacho=document.getElementById("despacho").value;
            var puesto=document.getElementById("Puesto").value;
            var edad=document.getElementById("edad").value;
            var sueldo=document.getElementById("sueldo-neto").value;
            var retencion=document.getElementById("retencion").value;
            //DIV
            var nombrediv=document.getElementById("nombrediv");
            var despachodiv=document.getElementById("despachodiv"); 
            var puestodiv=document.getElementById("puestodiv");      
            var edaddiv=document.getElementById("edaddiv");
            var sueldodiv=document.getElementById("sueldodiv");
            var retenciondiv=document.getElementById("retenciondiv")
            
            var Pletra=despacho.charAt(0);
            
            Tramo=despacho.substr(1,3);
            var longitudD=despacho.length;
            var longitudN=nombre.length;
            console.log(Pletra)
            console.log(longitudD)
            var ExpRegNum="^[0-9]+$";
            
            var i=0;
            var contador=0;
            var contador2=0;

            if(/\d/.test($("#nombre").val().trim())){
                console.error("MAL_NOMBRE num")
                nombrediv.innerHTML=("<p style='color:#FF0000';>MAL_NOMBRE")

            }else if(longitudN<=4 || longitudN>=255){
                console.error("MAL_NOMBRE long")
                nombrediv.innerHTML=("<p style='color:#FF0000';>MAL_NOMBRE")

            }else{
                console.log("input Nombre Ta bien")
                nombrediv.innerHTML=("✔️")
            }


            //despacho
            console.log(Pletra)
            if(Pletra=="A" || Pletra=="B"){
                console.log("Buena letra")
                contador2++
            }else{
                console.error("MAL_DESPACHO letra")
                
                despachodiv.innerHTML=("<p style='color:#FF0000';>MAL_DESPACHO")
            }
            if(longitudD==4)
            {
                contador2++
            }else{
                console.error("MAL_DESPACHO long")
                despachodiv.innerHTML=("<p style='color:#FF0000';>MAL_DESPACHO")
            }

            do{
                var P=despacho.charAt(i)
                console.log(P)
                if(P.match(ExpRegNum)!=null){
                    contador+=1
                    contador2+=1
                }else{

                }
                i++

            }while(i<=Tramo.length)
            /*Recorra la cadena hasta que que encuentre un numero*/ 
            if(contador!=3){
                console.error("MAL_DESPACHO 1,2 o 3 no num")
                despachodiv.innerHTML=("<p style='color:#FF0000';>MAL_DESPACHO")
            }
            if(contador2==5){
                despachodiv.innerHTML=("✔️")
            }


            //Puesto
            if(puesto=="JEFE_AREA" || puesto=="DIRECTOR_COMERCIAL" || puesto=="JEFE_PROYECTO"|| puesto=="ANALISTA" || puesto=="PROGRAMADOR")
            {
                console.log("bien, chido")
                puestodiv.innerHTML=("✔️")
            }else{
                
                console.error("MAL_PUESTO")
                puestodiv.innerHTML=("<p style='color:#FF0000';>MAL_PUESTO")
            }


            //Edad
            if(edad>18 && edad<67)
                {
                    edaddiv.innerHTML=("✔️")
                }
            else{
                console.error("MAL_EDAD")
                edaddiv.innerHTML=("<p style='color:#FF0000';>MAL_EDAD")
            }
            //sueldo
            if (sueldo>1000 && sueldo<6000)
            {
                sueldodiv.innerHTML=("✔️")
            }else{
                console.error("MAL_SUELDO")
                sueldodiv.innerHTML=("<p style='color:#FF0000';>MAL_SUELDO")
            }
            //Retención


            var retencion;
            if(sueldo<2000 && sueldo>1000){
                console.log("Tu sueldo se va a multiplicar por 0.08")
                if(puesto=="JEFE_AREA"){
                    console.log("Sueldo +%3.5")
                    retencion=sueldo*(0.08+3.5)
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.08 y suma %3.5")
                    console.log("retencion: " + retencion)
                    document.getElementById("retencion").value=retencion;

                }else if(puesto=="DIRECTOR_COMERCIAL"){
                    console.log("Sueldo +%3")
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.08 y suma %3")
                    retencion=sueldo*(0.08+3)
                    console.log("retencion: " + retencion)
                    document.getElementById("retencion").value=retencion;

                }else{
                    console.log("No se veía en la tabla")
                }
                         }
            else if(sueldo>2000 && sueldo<3000){
                console.log("Tu sueldo se multiplica por 0.095")
                if(puesto=="JEFE_AREA"){
                    console.log("Sueldo +%3.5")
                    retencion=sueldo*(0.095+3.5)
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.095 y suma %3.5")
                    console.log("retencion: " + retencion)
                    document.getElementById("retencion").value=retencion;

                }else if(puesto=="DIRECTOR_COMERCIAL"){
                    console.log("Sueldo +%3")
                    retencion=sueldo*(0.095+3)
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.095 y suma %3")
                    console.log("retencion" + retencion)
                    document.getElementById("retencion").value=retencion;
                    


                }else{
                    console.log("No se veía en la tabla")
                }

            }else if(sueldo<4000 && sueldo>3000){
                console.log("Tu sueldo se multiplicará por 0.11")
                if(puesto=="JEFE_AREA"){
                    console.log("Sueldo +%3.5")
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.11 y suma %3.5")
                    retencion=sueldo*(0.11+3.5)
                    console.log("retencion: " + retencion)
                    document.getElementById("retencion").value=retencion;

                }else if(puesto=="DIRECTOR_COMERCIAL"){
                    console.log("Sueldo +%3")
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.11 y suma %3")
                    retencion=sueldo*(0.11+3)
                    console.log("retencion" + retencion)
                    document.getElementById("retencion").value=retencion;


                }else{
                    console.log("No se veía en la tabla")
                }
            }else if(sueldo>4000 && sueldo<5000){
                console.log("Tu sueldo se multiplicara por 0.125")
                if(puesto=="JEFE_AREA"){
                    console.log("Sueldo +%3.5")
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.125 y suma %3.5")
                    retencion=sueldo*(0.125+3.5)
                    console.log("retencion: " + retencion)
                    document.getElementById("retencion").value=retencion;

                }else if(puesto=="DIRECTOR_COMERCIAL"){
                    console.log("Sueldo +%3")
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.125 y suma %3")
                    retencion=sueldo*(0.125+3)
                    console.log("retencion" + retencion)
                    document.getElementById("retencion").value=retencion;


                }else{
                    console.log("No se veía en la tabla")
                }
            }else if(sueldo>5000 && sueldo<6000){
                console.log("Tu sueldo se multiplicará por 0.14")

                if(puesto=="JEFE_AREA"){
                    
                    console.log("Sueldo +%3.5")
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.14 y suma %3.5")
                    retencion=sueldo*(0.14+3.5)
                    console.log("retencion: " + retencion)
                    document.getElementById("retencion").value=retencion;

                }else if(puesto=="DIRECTOR_COMERCIAL"){
                    console.log("Sueldo +%3")
                    retencion=sueldo*(0.14+3)
                    
                    retenciondiv.innerHTML=("Tu sueldo se multiplicará por 0.14 y suma %3")
                    console.log("retencion" + retencion)
                    document.getElementById("retencion").value=retencion;


                }else{
                    console.log("No se veía en la tabla")
                }
            }
            if(sueldo=="" && nombre==""&& puesto=="" && despacho=="" && edad=="" )
            {
                retenciondiv.innerHTML=("<p style='color:#FF0000';>ERROR_CONNECT_BD")
            }

    }
