function showElement(x){

        var divid=document.getElementById(x);

		var visibles = document.getElementsByClassName("visible");

		[].forEach.call(visibles, function (i) {i.classList.remove("visible");
			if(i!==divid)
			i.style.display="none";
});

		if(divid.style.display == 'none'){
      setTimeout(function(){
        divid.classList.add("visible");
        divid.style.display='inline';
      }, 1000);
	}
		else{
      setTimeout(function(){
    		divid.style.display='none';
      }, 1000);

		}
}
