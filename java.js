<script>
	var judul = ["Panah nomor 1", "Panah nomor 2"]
	var harga = ["Rp 1.000.000", "Rp 2.000.000"]
	 
	var text = "";
	var i ;
	for(i = 0; i < judul.length; i++){
		text += `
			<div class"thumnail" onclick="my Function(${i})">
			<img src="${img[i]}">
			<h2>${judul[i]}</h2>
			<p>Harga : ${rating[i]}</p>
			</div>
		`
	}
	
	function 