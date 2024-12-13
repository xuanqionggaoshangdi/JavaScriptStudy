$(".faceul_zero img").hover(function(){
			$(this).addClass("hoverstyle_zero");
		},function(){
			$(this).removeClass("hoverstyle_zero");
		});
		$(".infoBox img").hover(function(){
			$(this).addClass("hoverstyle_one");
		},function(){
			$(this).removeClass("hoverstyle_one");
		});
		$("img.prev").click(function(){

			$(".imgList ul").animate({"left":-280},500,function(){
				$(this).append($(this).find("li:first"));
				$(this).css("left",0);
			});

		});

		$("img.next").click(function(){

			autoPlay();

		});

		var cleartime=setInterval(autoPlay,2000);
		//鼠标放上去，停止播入
		$("img.next,img.prev").hover(function(){
			clearInterval(cleartime);
		},function(){
			cleartime=setInterval(autoPlay,3000);
		});

		function autoPlay(){

			$(".imgList ul").prepend($(".imgList ul li:last"));
			$(".imgList ul").css("left",-280);
			$(".imgList ul").animate({"left":0},500);
		}
		//鼠标导航滑块跟随效果
	
	$(".PartM ul li:nth-of-type(n)").hover(function(){
        $(".PartM ul li:nth-of-type(n)").css({"background":"#efefef","color":"#666"});
        $(this).css({"width":"100%","background":"#00A1D2","border":"none"});
    });
    
    //图片选项卡
    $(function(){
	$(".PartR>div").hide();
	$(".PartR>div:eq(0)").show();	
	
	$(".PartM a").click(function(){
		var n = $(".PartM a").index(this);
		$(".PartM a").index(this);
		$(".PartR>div").hide();
		$(".PartR>div:eq("+n+")").show();	
	})
	
	
})
    
    
    //下拉
    $(function(){ 

	$("#searchSelected").click(function(){ 
		$("#searchTab").show();
		$(this).addClass("searchOpen");
	}); 

	$("#searchTab li").hover(function(){
		$(this).addClass("selected");
	},function(){
		$(this).removeClass("selected");
	});
	 
	$("#searchTab li").click(function(){
		$("#searchSelected").html($(this).html());
		$("#searchTab").hide();
		$("#searchSelected").removeClass("searchOpen");
	});
	
});
    
    //图片缩放
    $(".book ul img").mouseenter(function(){
        $(this).animate({width:"110%"},"slow");
    });
    $(".book ul img").mouseleave(function(){
        $(this).animate({width:"80%"},"slow");
    });



 