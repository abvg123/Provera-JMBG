function proveraJMBG(jmbg){
	var msg = 'ok';
	if (jmbg.length === 13){

		
	
		var n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13;
		var dan, mesec, godina, region, broj, kontrolni = "";
		var jmbgString = [];
		var reg = "";		
	    var jmbgs = jmbg.toString();
	    
	    n1 = parseInt(jmbgs[0]); 
	    n2 = parseInt(jmbgs[1]); 
	    n3 = parseInt(jmbgs[2]); 
	    n4 = parseInt(jmbgs[3]); 
	    n5 = parseInt(jmbgs[4]); 
	    n6 = parseInt(jmbgs[5]); 
	    
	    n7 = parseInt(jmbgs[6]); 
	    n8 = parseInt(jmbgs[7]); 
	    n9 = parseInt(jmbgs[8]); 
	    n10 = parseInt(jmbgs[9]); 
	    n11 = parseInt(jmbgs[10]); 
	    n12 = parseInt(jmbgs[11]); 
	    
	    n13 = parseInt(jmbgs[12]); 

	    dan = jmbgs[0] + jmbgs[1];
	    mesec = jmbgs[2] + jmbgs[3];
	    godina = jmbgs[4] + jmbgs[5] + jmbgs[6];
	    region = jmbgs[7] + jmbgs[8];
	    broj = jmbgs[9] + jmbgs[10] + jmbgs[11];
	    kontrolni  = jmbgs[12];
	    var pol = "muški"
	    if(broj>499){
	        pol = "ženski"
	    } 
	    godinaInt = parseInt(godina);   
	    var milenijum = '1';
	    if(godinaInt < 100){
	    milenijum = '2';    
		    }
	    var datumZaProveru = milenijum+godina+'-'+mesec+'-'+dan;
   
	    if(datumPostoji(new Date(datumZaProveru))){
		var modulo = (7*(n1+n7) + 6*(n2+n8) + 5*(n3+n9) + 4*(n4+n10) +3*(n5+n11)+2*(n6+n12)) % 11;    
        kontrolni = 11 - modulo;
        if(kontrolni == 10 || kontrolni == 11){kontrolni = 0;}
        if(n13 != kontrolni){
        
        	msg = 'KONTROLNI BROJ NEISPRAVAN';
        }
	    }
		else {
			msg = 'DATUM NE POSTOJI';
			}
	
	}
	else {
		msg = 'nema 13 cifara';
	}
	return msg;
}

  function datumPostoji(datumz) {
	  return datumz instanceof Date && !isNaN(datumz);
	}
