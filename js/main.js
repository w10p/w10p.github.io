$(function() {

	for(var i=0;i<51;i++) {
		$("#show").append('<div></div>');
	}

	var num = 0;
	$("#show div").each(function(i) {
		switch(i%2) {
			case 0 :
				num ++;
				$(this).addClass("div1").css("background-image", 'url("./image/1 ('+num+').jpg")');
				break;
			case 1 :
				$(this).addClass("div2");
				break;
			default :
				break;
		}
	});

});
