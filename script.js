
function validareInputNr1() {   
    let x = document.getElementById("nr1").value;
    let text;
    let adaugClasa;
    if (!x && x==="") {text = "Introduceti numerele!";
        adaugClasa = "";
    }
    else if (isNaN(x) && (length.x=1 && x!="-" )) {
        text = "Input INVALID!";
        adaugClasa = ' eroareInput';
        document.getElementById("nr1").value = "";
    } else {
      text = "Input OK!";
      adaugClasa = ' inputOK';
    }
    document.getElementById("divMesaj").className = "mesaj" + adaugClasa;
    document.getElementById("mesaj").innerHTML = text;
    document.getElementById("nr1").focus;

  }

  function validareInputNr2() {   
    let x = document.getElementById("nr2").value;
    let text;
    let adaugClasa;
    if (!x && x==="") {text = "Introduceti numerele!";
        adaugClasa = "";
    }
    else if (isNaN(x) && (length.x=1 && x!="-" )) {
        text = "Input INVALID!";
        adaugClasa = ' eroareInput';
        document.getElementById("nr2").value = "";
    } else {
      text = "Input OK!";
      adaugClasa = ' inputOK';
    }
    document.getElementById("divMesaj").className = "mesaj" + adaugClasa;
    document.getElementById("mesaj").innerHTML = text;
    document.getElementById("nr2").focus;

  }

  function adunare() {   
    let nr1 = parseFloat(document.getElementById("nr1").value,10);
    let nr2 = parseFloat(document.getElementById("nr2").value,10);
    let rez = nr1 + nr2;
    if (isNaN(nr1) || isNaN(nr2))
      {
        rez = "<a style=\"color:red;\"> Introduceti numerele!</a>";
      }
      document.getElementById("mesaj").innerHTML = "Rezultatul ADUNĂRII: <strong> " + rez + "</strong>";
    
  }

  function scadere() {   
    let nr1 = parseFloat(document.getElementById("nr1").value,10);
    let nr2 = parseFloat(document.getElementById("nr2").value,10);
    let rez = nr1 - nr2;
    if (isNaN(nr1) || isNaN(nr2))
      {
        rez = "<a style=\"color:red;\"> Introduceti numerele!</a>";
      }
    document.getElementById("mesaj").innerHTML ="Rezultatul SCĂDERII: <strong> " + rez + "</strong>";
      
  }

  function inmultire() {   
    let nr1 = parseFloat(document.getElementById("nr1").value,10);
    let nr2 = parseFloat(document.getElementById("nr2").value,10);
    let rez = nr1 * nr2;
    if (isNaN(nr1) || isNaN(nr2))
      {
        rez = "<a style=\"color:red;\"> Introduceti numerele!</a>";
      }
    document.getElementById("mesaj").innerHTML ="Rezultatul ÎNMULȚIRII: <strong> " + rez + "</strong>";
      
  }

  function impartire() {   
    let nr1 = parseFloat(document.getElementById("nr1").value,10);
    let nr2 = parseFloat(document.getElementById("nr2").value,10);
    let rez = nr1 / nr2;
    if (isNaN(nr1) || isNaN(nr2)) 
    {
      rez = "<a style=\"color:red;\"> Introduceti numerele!</a>";
    }
    
    if (rez===Infinity || rez===-Infinity || (nr1===0 && nr2===0)) {
      rez = "EROARE: <a style=\" background-color: #ff4d4d;\">&nbsp;Nr2 = 0&nbsp;</a>&nbsp;!";
    }
    document.getElementById("mesaj").innerHTML ="Rezultatul ÎMPĂRȚIRII: <strong> " + rez + "</strong>";
  }