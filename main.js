	var var1 = null;
	var var2 = null;
	var numResultado = null;
	const var1Binario = null;
	const var2Binario = null;
	const numResultadoBinario = null;
	var bool1 = null;
	var bool2 = null;
	var resultado = null;
	var tipoOperacion = null;
	var aritmetiques = document.getElementsByClassName("aritmetiques");
  	var unaries = document.getElementsByClassName("unaries");
  	var igualtatRelacional = document.getElementsByClassName("igualtatRelacional");
  	var boleansCondicionals = document.getElementsByClassName("boleansCondicionals");
  	var nivellBit = document.getElementsByClassName("nivellBit");
  	var primerNum = document.getElementsByClassName("primernum");
  	var segundoNum = document.getElementsByClassName("segundonum");
  	var boleano1 = document.getElementsByClassName("boleano1");
  	var boleano2 = document.getElementsByClassName("boleano2");


function showAritmetiques(){
    	aritmetiques[0].classList.remove("oculto");
    	unaries[0].classList.add("oculto");
    	igualtatRelacional[0].classList.add("oculto");
    	boleansCondicionals[0].classList.add("oculto");
    	nivellBit[0].classList.add("oculto");
    	primerNum[0].classList.remove("oculto");
    	segundoNum[0].classList.remove("oculto");
    	boleano1[0].classList.add("oculto");
    	boleano2[0].classList.add("oculto");
}

function showUnaries(){
    	aritmetiques[0].classList.add("oculto");
    	unaries[0].classList.remove("oculto");
    	igualtatRelacional[0].classList.add("oculto");
    	boleansCondicionals[0].classList.add("oculto");
    	nivellBit[0].classList.add("oculto");
    	primerNum[0].classList.remove("oculto");
    	segundoNum[0].classList.remove("oculto");
    	boleano1[0].classList.add("oculto");
    	boleano2[0].classList.add("oculto");
}

function showigualtatRelacional(){
    	aritmetiques[0].classList.add("oculto");
    	unaries[0].classList.add("oculto");
    	igualtatRelacional[0].classList.remove("oculto");
    	boleansCondicionals[0].classList.add("oculto");
    	nivellBit[0].classList.add("oculto");
    	primerNum[0].classList.remove("oculto");
    	segundoNum[0].classList.remove("oculto");
    	boleano1[0].classList.add("oculto");
    	boleano2[0].classList.add("oculto");
}

function showboleansCondicionals(){
    	aritmetiques[0].classList.add("oculto");
    	unaries[0].classList.add("oculto");
    	igualtatRelacional[0].classList.add("oculto");
    	boleansCondicionals[0].classList.remove("oculto");
    	nivellBit[0].classList.add("oculto");
    	primerNum[0].classList.add("oculto");
    	segundoNum[0].classList.add("oculto");
    	boleano1[0].classList.remove("oculto");
    	boleano2[0].classList.remove("oculto");
}

function shownivellBit(){
    	aritmetiques[0].classList.add("oculto");
    	unaries[0].classList.add("oculto");
    	igualtatRelacional[0].classList.add("oculto");
    	boleansCondicionals[0].classList.add("oculto");
    	nivellBit[0].classList.remove("oculto");
    	primerNum[0].classList.remove("oculto");
    	segundoNum[0].classList.remove("oculto");
    	boleano1[0].classList.add("oculto");
    	boleano2[0].classList.add("oculto");
}

function showSuma(){
	var nuevoH2 = document.createElement("h2");
	var suma = document.createTextNode("+");       
	nuevoH2.appendChild(suma);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "suma";
}

function showResta(){
	var nuevoH2 = document.createElement("h2");
	var resta = document.createTextNode("-");       
	nuevoH2.appendChild(resta);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "resta";
}

function showMultiplicacion(){
	var nuevoH2 = document.createElement("h2");
	var multiplicacion = document.createTextNode("*");       
	nuevoH2.appendChild(multiplicacion);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "multiplicacion";
}

function showDivision(){
	var nuevoH2 = document.createElement("h2");
	var division = document.createTextNode("/");       
	nuevoH2.appendChild(division);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "division";
}

function showResto(){
	var nuevoH2 = document.createElement("h2");
	var resto = document.createTextNode("%");       
	nuevoH2.appendChild(resto);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "resto";
}

function showExponenciacion(){
	var nuevoH2 = document.createElement("h2");
	var exponenciacion = document.createTextNode("**");       
	nuevoH2.appendChild(exponenciacion);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "exponenciacion";
}

function showIncremento(){
	var nuevoH2 = document.createElement("h2");
	var incremento = document.createTextNode("++");       
	nuevoH2.appendChild(incremento);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "incremento";
}

function showDecremento(){
	var nuevoH2 = document.createElement("h2");
	var decremento = document.createTextNode("--");       
	nuevoH2.appendChild(decremento);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "decremento";
}

function showMenorQue(){
	var nuevoH2 = document.createElement("h2");
	var menorque = document.createTextNode("<");       
	nuevoH2.appendChild(menorque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "menorque";
}

function showMayorQue(){
	var nuevoH2 = document.createElement("h2");
	var mayorque = document.createTextNode(">");       
	nuevoH2.appendChild(mayorque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "mayorque";
}

function showIgualQue(){
	var nuevoH2 = document.createElement("h2");
	var igualque = document.createTextNode("==");       
	nuevoH2.appendChild(igualque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "igualque";
}

function showDistintoQue(){
	var nuevoH2 = document.createElement("h2");
	var distintoque = document.createTextNode("!=");       
	nuevoH2.appendChild(distintoque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "distintoque";
}

function showMenorIgualQue(){
	var nuevoH2 = document.createElement("h2");
	var menorigualque = document.createTextNode("<=");       
	nuevoH2.appendChild(menorigualque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "menorigualque";
}

function showMayorIgualQue(){
	var nuevoH2 = document.createElement("h2");
	var mayorigualque = document.createTextNode("=>");       
	nuevoH2.appendChild(mayorigualque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "mayorigualque";
}

function showExactIgualQue(){
	var nuevoH2 = document.createElement("h2");
	var exactigualque = document.createTextNode("===");       
	nuevoH2.appendChild(exactigualque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "exactigualque";
}

function showExactDistintoQue(){
	var nuevoH2 = document.createElement("h2");
	var exactdistintoque = document.createTextNode("!==");       
	nuevoH2.appendChild(exactdistintoque);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "exactdistintoque";
}

function showAnd(){
	var nuevoH2 = document.createElement("h2");
	var and = document.createTextNode("&&");       
	nuevoH2.appendChild(and);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "and";
	boleano2[0].classList.remove("oculto");
}

function showOr(){
	var nuevoH2 = document.createElement("h2");
	var or = document.createTextNode("||");       
	nuevoH2.appendChild(or);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "or";
    boleano2[0].classList.remove("oculto");
}

function showXor(){
	var nuevoH2 = document.createElement("h2");
	var xor = document.createTextNode("!");       
	nuevoH2.appendChild(xor);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	tipoOperacion = "xor";
    boleano2[0].classList.add("oculto");
}

function showAndBit(){
	var nuevoH2 = document.createElement("h2");
	var andBit = document.createTextNode("&");       
	nuevoH2.appendChild(andBit);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	segundoNum[0].classList.remove("oculto");
	tipoOperacion = "andBit";
}

function showOrBit(){
	var nuevoH2 = document.createElement("h2");
	var OrBit = document.createTextNode("|");       
	nuevoH2.appendChild(OrBit);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	segundoNum[0].classList.remove("oculto");
	tipoOperacion = "OrBit";
}

function showNotBit(){
	var nuevoH2 = document.createElement("h2");
	var NotBit = document.createTextNode("~");       
	nuevoH2.appendChild(NotBit);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	segundoNum[0].classList.add("oculto");
	tipoOperacion = "NotBit";
}

function showXorBit(){
	var nuevoH2 = document.createElement("h2");
	var XorBit = document.createTextNode("^");       
	nuevoH2.appendChild(XorBit);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	segundoNum[0].classList.remove("oculto");
	tipoOperacion = "XorBit";
}

function showDerechaBit(){
	var nuevoH2 = document.createElement("h2");
	var DerechaBit = document.createTextNode(">>");       
	nuevoH2.appendChild(DerechaBit);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2);
	segundoNum[0].classList.remove("oculto"); 
	tipoOperacion = "DerechaBit";
}

function showIzquierdaBit(){
	var nuevoH2 = document.createElement("h2");
	var IzquierdaBit = document.createTextNode("<<");       
	nuevoH2.appendChild(IzquierdaBit);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	segundoNum[0].classList.remove("oculto");
	tipoOperacion = "IzquierdaBit";
}

function showDerechaSSBit(){
	var nuevoH2 = document.createElement("h2");
	var DerechaSSBit = document.createTextNode(">>>");       
	nuevoH2.appendChild(DerechaSSBit);
	document.getElementById("operador").innerHTML="";                                         
	document.getElementById("operador").appendChild(nuevoH2); 
	segundoNum[0].classList.remove("oculto");
	tipoOperacion = "DerechaSSBit";
}

function calcular(){
	switch(tipoOperacion){
		case "suma":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			resultado = parseInt(var1) + parseInt(var2);
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" + "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "resta":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			resultado = parseInt(var1) - parseInt(var2);
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" - "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "multiplicacion":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			resultado = parseInt(var1) * parseInt(var2);
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" * "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "division":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			resultado = parseInt(var1) / parseInt(var2);
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" / "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "resto":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			resultado = parseInt(var1) % parseInt(var2);
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" % "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "exponenciacion":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			resultado = parseInt(var1) ** parseInt(var2);
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" ** "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "incremento":
			var1 = document.getElementsByName("var1")[0].value;
			resultado = parseInt(var1) + 1;
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+"++ = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "decremento":
			var1 = document.getElementsByName("var1")[0].value;
			resultado = parseInt(var1) - 1;
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+"-- = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "menorque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) < parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) > parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" < "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "mayorque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) > parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) < parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" > "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "igualque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) == parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) != parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" == "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "distintoque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) != parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) == parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" != "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "menorigualque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) <= parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) > parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" <= "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "mayorigualque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) >= parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) < parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" >= "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "exactigualque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) === parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) != parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" === "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "exactdistintoque":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			if (parseInt(var1) !== parseInt(var2)) {
				resultado = true;
			}else if (parseInt(var1) == parseInt(var2)) {
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" !== "+var2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "and":
			bool1 = document.getElementsByName("bool1")[0].value;
			bool2 = document.getElementsByName("bool2")[0].value;
			if ((bool1=="true") && (bool2=="true")) {
				resultado = true;
			}else{
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(bool1+" && "+bool2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "or":
			bool1 = document.getElementsByName("bool1")[0].value;
			bool2 = document.getElementsByName("bool2")[0].value;
			if ((bool1=="true") || (bool2=="true")) {
				resultado = true;
			}else{
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(bool1+" && "+bool2+" = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "xor":
			bool1 = document.getElementsByName("bool1")[0].value;
			if (bool1=="false") {
				resultado = true;
			}else if(bool1=="true"){
				resultado = false;
			}
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(bool1+" ! = "+resultado);       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "andBit":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			numResultado = (parseInt(var1) & parseInt(var2));
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" ("+(parseInt(var1).toString(2))+") & "+var2+" ("+(parseInt(var2).toString(2))+") = "+numResultado+" ("+(parseInt(numResultado).toString(2))+")");          
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "OrBit":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			numResultado = (parseInt(var1) | parseInt(var2));
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" ("+(parseInt(var1).toString(2))+") | "+var2+" ("+(parseInt(var2).toString(2))+") = "+numResultado+" ("+(parseInt(numResultado).toString(2))+")");     
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "NotBit":
			var1 = document.getElementsByName("var1")[0].value;
			numResultado = (~var1);
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode("~ "+var1+" ("+(parseInt(var1).toString(2))+") = "+numResultado+" ("+(parseInt(numResultado).toString(2))+")");       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "XorBit":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			numResultado = (parseInt(var1) ^ parseInt(var2));
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" ("+(parseInt(var1).toString(2))+") ^ "+var2+" ("+(parseInt(var2).toString(2))+") = "+numResultado+" ("+(parseInt(numResultado).toString(2))+")");     
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "DerechaBit":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			numResultado = (parseInt(var1) >> parseInt(var2)); 
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" ("+(parseInt(var1).toString(2))+") >> "+var2+" ("+(parseInt(var2).toString(2))+") = "+numResultado+" ("+(parseInt(numResultado).toString(2))+")");    
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "IzquierdaBit":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			numResultado = (parseInt(var1) << parseInt(var2));  
			var nuevoH1 = document.createElement("h1");
			var resultado = document.createTextNode(var1+" ("+(parseInt(var1).toString(2))+") << "+var2+" ("+(parseInt(var2).toString(2))+") = "+numResultado+" ("+(parseInt(numResultado).toString(2))+")");       
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;

		case "DerechaSSBit":
			var1 = document.getElementsByName("var1")[0].value;
			var2 = document.getElementsByName("var2")[0].value;
			numResultado = (parseInt(var1) >>> parseInt(var2));  
			var nuevoH1 = document.createElement("h1");
			const var1Binario = parseInt(var1).toString(2);
			const var2Binario = parseInt(var2).toString(2);
			const numResultadoBinario = parseInt(numResultado).toString(2);
			var resultado = document.createTextNode(var1+" ("+var1Binario+") >>> "+var2+" ("+var2Binario+") = "+numResultado+" ("+numResultadoBinario+")");
			nuevoH1.appendChild(resultado);
			document.getElementById("resultado").innerHTML="";                                         
			document.getElementById("resultado").appendChild(nuevoH1);
		break;
		
	}
}
