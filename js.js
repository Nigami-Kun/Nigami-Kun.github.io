function showMenu(){
		var menu = document.getElementById("menu");
		
		
		if(menu.style.display === "block"){
			menu.style.display ="none";
		}else{
			menu.style.display = "block";
		}
 }
function showMenu_2(){
		var menu = document.getElementById("menu_2");
		
		
		if(menu.style.display === "block"){
			menu.style.display ="none";
		}else{
			menu.style.display = "block";
		}
 }
 function dataCheck(){
			
			var n=document.getElementById("input").value;
			var i;
			var hasil="";
			
			for (i=1;i<=n;i++)
			{
				
				if (i%3==0 && i%15)
				{
					hasil+=("fizz")+"<br>";
					
				}
				else if (i%5==0 && i%15)
				{
					hasil+=("buzz")+"<br>";
					
				}
				else if (i%15==0)
				{
					hasil+=("fizzbuzz")+"<br>";
					
				}
				else
				{
					hasil+=i+("( Bukan kelipatan 3,5,juga 3 & 5 )")+"<br>";
				}
			}
			document.getElementById("hasil").innerHTML=hasil;	
}