function suma() {
    alert("ALGORITMO QUE REALIZA UNA SUMA ENTRE 2 VALORES INGRESADOS POR EL USUARIO ")
    //declaracion de variables necesarias
    let a=0;
    let b=0;
    let s=0;
    // capturamos los datos
    a=parseInt(prompt("ingrese el primer valor"));
    b=parseInt(prompt("Ingrese el segundo valor"));
    //realizamos la operacion
    s=a+b;
    //dams el resultado o respuesta
    alert("El resultado de la suma es:"+ s)
}
function op(){
    alert("ALGORITMO QUE REALIZA UNA SUMA,RESTA ,MULTIPLICACION Y DIVISION ENTRE 2 VALORES INGRESADOS POR EL USUARIO ");
    //declaracion de variables necesarias
    let a=0;
    let b=0;
    let s=0;
    let r=0;
    let m=0;   
    let d=0; 
    // capturamos los datos
    a=parseInt(prompt("ingrese el primer valor"));
    b=parseInt(prompt("Ingrese el segundo valor"));
    //realizamos la operacion
    s=a+b;
    r=a-b;
    m=a*b;
    d=a/b;
    //dams el resultado o respuesta
    alert("El resultado de la suma es:"+ s)
    alert("El resultado de la resta es:"+ r)
    alert("El resultado de la multiplicacion es:"+ m)
    alert("El resultado de la division  es:"+ d)
}
function cua(){
    alert("ALGORITMO QUE REALIZA EL CUADRADO DEL NUMERO INGRESADO POR EL USUARIO");

    let a,c=0;
    a=parseInt(prompt("ingrese el valor"));
    c=a*a;
    alert("El resultado es"+c);
}
function areatriangulo(){

    alert("ALGORITMO QUE REALIZA EL AREA DEL TRIANGULO");
    let a,b,c=0;
    a=parseInt(prompt("ingrese la altura"));
    b=parseInt(prompt("Ingrese la base"));
    c=((a*b)/2);
    alert("El resultado de la suma es"+c);

   
    
    }


    function conversion(){
        alert("algoritmo que determine la conversion que determine las pulgadas, los kilometros, y los milimetros de un valor ingresado por el usuario dado en metros")  
        
        let m,k,l,p =0;

        m=parseInt(prompt("Ingrese el valor a convertir en metros"));

        k= m/1000;
        l= m*1000;
        p= m*39.37;

        alert("El resultado de la conversion a kilometros es: " +k);
        alert("El resultado de la conversion a kilometros es: " +l);
        alert("El resultado de la conversion a kilometros es: " +p);
        
    }

    function mayor() {
        alert("Algoritmo que determina el mayor de los numeros ingresados");

        let N1 , N2 =0;
    }
function mayor() {
    alert ("algoritmo que determina el numero mayor");
    let N1, N2=0;
    N1=parseInt(prompt("INGRESE EL PRIMER NUMERO"));
    N2=parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));

    if((N1==N2)){
        alert ("Los numeros son iguales");
     }else if(N1>N2){
        alert(N1+" es mayor que " +N2); 
        
     } 
     else alert(N2+" es mayo que "+N1);
     
     
    
}

   function menor()  {
    alert ("Algoritmo que determina el numero menor que tres");
    let N1, N2, N3 =0;
    N1=parseInt(prompt("INGRESE EL PRIMER NUMERO"));
    N2=parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));
    N3=parseInt(prompt("INGRESE EL TERCER NUMERO"));
   
    if((N1==N2)&&(N1==N3)); {
    alert("Los numeros son iguales");
    }if(N1<N2){
        
    }
}



