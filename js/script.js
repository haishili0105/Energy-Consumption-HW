function changeImage1() {

        if (document.getElementById("navimage1").src = "img/carFilledBlue@3x.png")
        {
        	console.log("666")
           document.getElementById("navimage1").src = "img/carFilledBlue@3x.png";
            document.getElementById("navimage2").src = "img/treeInactive.png";
             document.getElementById("navimage3").src = "img/carbonInactive.png";
        };
}


function changeImage2(){
	if (document.getElementById("navimage2").src = "img/treeInactive.png") {
        	console.log("777")
        	document.getElementById("navimage1").src = "img/carInactive.png";
            document.getElementById("navimage2").src = "img/treeActive.png";
             document.getElementById("navimage3").src = "img/carbonInactive.png";
        };
}


function changeImage3(){
	if (document.getElementById("navimage3").src = "img/carbonInactive.png") {
        	console.log("888")
        	document.getElementById("navimage1").src = "img/carInactive.png";
            document.getElementById("navimage2").src = "img/treeInactive.png";
             document.getElementById("navimage3").src = "img/carbonActive.png";
        };
}


// $(function{
//   $('.saved-car').each(function(i) {
//     $(this).delay(i*600).fadeIn('slow')
//   });
// });