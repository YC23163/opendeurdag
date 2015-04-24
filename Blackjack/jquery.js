$(document).ready(function(){
	$('#slide').hide();
function scoreBepalen(x){
		var scoreVanKaart = 0;
		
		if(x>13){
			if(x>26){
				if(x>39){
					scoreVanKaart = x -39;	
							if((x-39)===11){
								scoreVanKaart = 10
											}
							if((x-39)===12){
								scoreVanKaart = 10
											}
							if((x-39)===13){
								scoreVanKaart = 10
											}
				}else{
					scoreVanKaart = x-26;
							if((x-39)===11){
								scoreVanKaart = 10
											}
							if((x-26)===12){
								scoreVanKaart = 10
											}
							if((x-26)===13){
								scoreVanKaart = 10
											}
					}
				}else{
					scoreVanKaart = x-13;
							if((x-13)===11){
								scoreVanKaart = 10
											}
							if((x-13)===12){
								scoreVanKaart = 10
											}
							if((x-13)===13){
								scoreVanKaart = 10
											}

					}
			
				}else{
					scoreVanKaart = x;
							if(x===11){
								scoreVanKaart = 10
										}
							if(x===12){
								scoreVanKaart = 10
										}
							if(x===13){
								scoreVanKaart = 10
										}

					}		

	return scoreVanKaart;
}
function reset(){
	$('.kaart').remove();
	$('.achterkant').remove();
	$('.score').text("...");
	$('#spelStatusDealer').hide();
	$('#spelStatusSpeler').hide();
	$('#inzetSpeler').text('Inzet: $00.00');
	$('#huidigeInzet').text('Huidige inzet: $00.00');
		//buttons aanpassen
			// $('#timer').fadeTo('fast',0);
	
			$('#lel').fadeTo('fast',0.5);
			$('#lel').attr('disabled','disabled');
	
			$('#hit').fadeTo('fast',0.5);
			$('#hit').attr('disabled','disabled');
	
			$('#stand').fadeTo('fast',0.5);
			$('#stand').attr('disabled','disabled');
			
			$('#verhogen').fadeTo('fast',1);
			$('#verhogen').removeAttr('disabled');
			
			$('#verlagen').fadeTo('fast',0.5);
			$('#verlagen').attr('disabled','disabled');
			
			if (chips === 0)
			{
				$('#verhogen').attr('disabled','disabled');
			}
			
		//variablen resetten

		inzet = 0;
		somDealer =0;
		somSpeler = 0;
		dealer=false;
		speler=false;
	
}
        function interval() {
            $('#timer').text("Nog " + Tijd-- + " seconden voor een volgende ronde start");
            if (Tijd === -1) {
                $('#timer').hide();
				clearInterval(MyTimer);
				Tijd = 4;
				$('#timer').text("Nog 5 seconden voor een volgende ronde start");
            }
        }
	    function chipsBereken() {
			if(speler){
				inzetDouble = (inzet*2).toFixed(2);
				myInteger = parseInt(inzetDouble);
				chipsDouble = (chips +	myInteger).toFixed(2);
				chips = parseInt(chipsDouble);
				$('#chips').text('chips: $'+chipsDouble+'');

			}

        }
	var dealer = false;
	var speler = false;
	var score;
	var somDealer = 0;
	var somSpeler = 0;
	var inzet = 0;
	var chips = 100;
	var Tijd = 4;
	var inzetDouble;
	var chipsDouble;
			$('#spelStatusDealer').hide();
			$('#spelStatusSpeler').hide();
	//buttons uitzetten
			$('#timer').fadeTo('fast',0);
	
			$('#lel').fadeTo('fast',0.5);
			$('#lel').attr('disabled','disabled');
	
			$('#hit').fadeTo('fast',0.5);
			$('#hit').attr('disabled','disabled');
	
			$('#stand').fadeTo('fast',0.5);
			$('#stand').attr('disabled','disabled');
			$('#verlagen').attr('disabled','disabled');
			
			$('#lel').click(function(){  
		//knoppen aanpassen
			$('#verlagen').attr('disabled','disabled');
			$('#lel').fadeTo('fast',0.5);
			$('#verlagen').fadeTo('fast',0.5);
			$('#hit').fadeTo('fast',1);
			$('#stand').fadeTo('fast',1);					
		//variablen declarereen
		var y = Math.floor((Math.random() * 52) + 1);
		var a = Math.floor((Math.random() * 52) + 1);
		var b = Math.floor((Math.random() * 52) + 1);
		var inzetDouble = inzet.toFixed(2);

			//kaarten voor de dealer
			$('.kaartenDealer').append('<img class="kaart" name="' + 'kaart' + y + '"'+' data-score="'+score+'"src="assets/'+ y +'.png" />');
			$('.kaartenDealer').append('<img id="achterkant" class="kaart" src="assets/achterkant.png">');
			//kaarten voor de speler geven
			$('.kaartenSpeler').append('<img class="kaart" name="' + 'kaart' + a + '"'+' data-score="'+score+'"src="assets/'+ a +'.png" />');
			$('.kaartenSpeler').append('<img class="kaart" name="' + 'kaart' + b + '"'+' data-score="'+score+'"src="assets/'+ b +'.png" />');	
		//score bepalen	
		score = scoreBepalen(y);
		somDealer = somDealer + score;
		score = scoreBepalen(a);
		somSpeler = somSpeler + score;
		score = scoreBepalen(b);
		somSpeler = somSpeler + score;
		//score tonen
			$('#scoreDealer').text(somDealer);
			$('#scoreSpeler').text(somSpeler);
		//buttons enable en disable
			$('#hit').removeAttr('disabled');
			$('#stand').removeAttr('disabled');
			$('#lel').attr('disabled','disabled');
		//inzet tonen
			$('#inzetSpeler').text('Inzet: $'+ inzetDouble +'');
							});
			$('#hit').click(function(){
		//knoppen aanpassen
			$('#verhogen').fadeTo('fast',0.5);
			$('#verhogen').attr('disabled','disabled');
		//variablen declareren
		var c = Math.floor((Math.random() * 52) + 1);
		var inzetDouble = inzet.toFixed(2);

		
		//kaart toevoegen
			$('.kaartenSpeler').append('<img class="kaart" name="' + 'kaart' + c + '"'+' data-score="'+score+'"src="assets/'+ c +'.png" />');

		//score bepalen
		score = scoreBepalen(c);
		somSpeler = somSpeler + score;
			$('#scoreSpeler').text(somSpeler);
			
		//resultaat controleren
		if(somSpeler > 21){
			$('#spelStatusSpeler').text("U hebt verloren")
			$('#spelStatusSpeler').show();
			$('#spelStatusDealer').text("Dealer heeft gewonnen")
			$('#spelStatusDealer').show();
			$(this).attr('disabled','disabled');
			$('#stand').attr('disabled','disabled');
			dealer = true;
		}
		if(somSpeler === 21){
			$('#spelStatusSpeler').text("U hebt gewonnen");
			$('#stand').attr('disabled','disabled');
			$('#hit').attr('disabled','disabled');
			$('#spelStatusSpeler').show();
			$('#spelStatusDealer').text("U hebt verloren")
			$('#spelStatusDealer').show();
			speler = true;
			

        }
		chipsBereken();
		//inzet speler aanpassen
			$('#inzetSpeler').text('Inzet: $'+ inzetDouble +'');
		
		//reset
	        if (speler || dealer) {
					//einde
					if(chips===0){
						alert("Spijtig je bent verloren! Klik ok voor nieuw spel!");
						location.reload();
					}
            $('#timer').fadeTo('fast', 1);
            setTimeout(reset, 5000);
            MyTimer = setInterval(function(){interval()}, 1000);
        }
	});
			$('#stand').click(function(){
		//knoppen aanpassen
			$(this).fadeTo('fast',0.5);
			$('#hit').fadeTo('fast',0.5);
			
		//variablen declareren
				var x = Math.floor((Math.random() * 52) + 1);
				var t = Math.floor((Math.random() * 52) + 1);
				
		//kaart toevoegen
				$('.kaartenDealer').append('<img class="kaart" name="' + 'kaart' + x + '"'+' data-score="'+score+'"src="assets/'+ x +'.png" />');	
				
		//knop uitschakelijn plus non actieve kaart verwijderen
				$('#hit').attr('disabled','disabled');
				$('#achterkant').remove();
				$('#verhogen').fadeTo('fast',0.5);
				$('#verhogen').attr('disabled','disabled');
				$('#verhogen').fadeTo('fast',0.5);
				
		//score bepalen
			score = scoreBepalen(x);
			somDealer = somDealer + score;
			$('#scoreDealer').text(somDealer);
			
		//knop uit- en inschakelen
			$('#verlagen').attr('disabled','disabled');
		if(somDealer<=16){
			$('.kaartenDealer').append('<img class="kaart" name="' + 'kaart' + t + '"'+' data-score="'+score+'"src="assets/'+ t +'.png" />');
			score = scoreBepalen(t);
			somDealer = somDealer + score;
			$('#scoreDealer').text(somDealer);
			}
			else{
				$('#stand').attr('disabled','disabled');
				
			}
		//resultaat
		if(21>=somDealer&&somDealer>somSpeler){
			$('#spelStatusDealer').text("Dealer heeft gewonnen");
			$('#spelStatusDealer').show();
			$('#spelStatusSpeler').text("u hebt verloren");
			$('#spelStatusSpeler').show();
			dealer = true;
		}
		else{
			$('#spelStatusSpeler').text("u hebt gewonnen");
			$('#spelStatusSpeler').show();
			speler = true;
		}
		if(somDealer>21){
			$('#spelStatusDealer').text("Dealer heeft verloren");
			$('#spelStatusDealer').show();
			$('#spelStatusSpeler').text("u hebt gewonnen");
			$('#spelStatusSpeler').show();
			speler = true;
		}
		chipsBereken();
		//reset
	        if (speler || dealer) {
					//einde
					if(chips===0){
					alert("Spijtig je bent verloren! Klik ok voor nieuw spel!");
						location.reload();
									}
            $('#timer').fadeTo('fast', 1);
            setTimeout(reset, 5000);
            MyTimer = setInterval(function(){interval()}, 1000);
        }		
	});
			$('#verhogen').click(function(){
		//variablen aanpassen
		inzet = inzet+5;
		chips = chips-5;
		
		//variablen converten
		inzetDouble = inzet.toFixed(2);
		chipsDouble = chips.toFixed(2);
		
		//knop aanpassen
			$('#lel').fadeTo('fast',1);
			$('#lel').removeAttr('disabled');
			$('#verlagen').fadeTo('fast',1);
			$('#verlagen').removeAttr('disabled');
			if (chips === 0)
			{
				$(this).attr('disabled','disabled');
			}
			
		//text bijwerken
			$('#huidigeInzet').text('Huidige inzet: $'+ inzetDouble +'');
			$('#chips').text('chips: $'+chipsDouble+'');

	});
			$('#verlagen').click(function(){
		//variablen aanpassen
		inzet = inzet-5;
		chips = chips+5
		
		//variablen converten
		inzetDouble = inzet.toFixed(2);
		chipsDouble = chips.toFixed(2);
		
		//text update
		$('#huidigeInzet').text('Huidige inzet: $'+ inzetDouble +'');
		$('#chips').text('chips: $'+chipsDouble+'');
			if (inzet === 0)
			{
				$(this).attr('disabled','disabled');
			}
	});
	//$('#slide').slideUp()
	$('#regels').click(function() {
			$('#slide').dialog({
                title: 'Regels',
				maxHeight:550,
    modal: true,
    fluid: true, //new option
    resizable: true,
            });    
    $( "#accordion" ).accordion({
		active: false,
		collapsible: true,
		heightStyle: "autoFill"
    });
	$('#slide').show();
  });

  
});