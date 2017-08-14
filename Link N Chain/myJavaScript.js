function toCart() {
	
	document.getElementById("inputButton").innerHTML = 'Added to cart!';
	alert("Added to Cart");
}


function dropDown(x){

if (document.form1.jumpmenu.value != "null") {
	document.location.href = x;
	}
}



function initMap() {
        var dublin = {lat: 53.350140, lng: -6.266155};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: dublin,
			scrollwheel:false
        });
        var marker = new google.maps.Marker({
          position: dublin,
          map: map
        });
      }


