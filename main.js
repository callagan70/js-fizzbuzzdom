// `

for (var n = 1; n <= 100; n++){

  if (n % 3 == 0 && n % 15 != 0)
      {document.getElementById("view").innerHTML+= `<div id="numero" class="colore2"> fizz</div>`;}
   
  // else if (n % 5 == 0 && 15 != 0)
  //     {document.getElementById("view").innerHTML+= `<div id="numero" class="colore3 text"> buzz</div>`;}

  else if (n % 15 == 0)
      {document.getElementById("view").innerHTML+= `<div id="numero" class="colore4"> fizzbuzz</div>`; }

  else if (n % 5 == 0 && 15 != 0)
       {document.getElementById("view").innerHTML+= `<div id="numero" class="colore3 text"> buzz</div>`;}

  else{
    document.getElementById("view").innerHTML+= `<div id="numero" class="colore"> ${n}</div>`;
  }

}
