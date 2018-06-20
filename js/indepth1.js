var posicion_cuentos = 0;
var posicion_slider=0;
var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url;
var disqus_number_c=2;
var disqus_per_page=3;

$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});
	
	var indepth_menu = function(){
	$(document).on("mouseenter",".indepth_author",function(){
		var ir=$(this).attr("id");
		var num=$(this).attr("num");
		$(".indepth_author_menu").fadeOut();
		$("#menu_"+ir+"_"+num).fadeIn();
		$(document).on("mouseleave",".indepth_author",function(){
			$(".indepth_author_menu").fadeOut();
		});
	});
	
	$(document).on("mouseenter",".indepth_more_c",function(){
		$(this).find(".indepth_mini_title").fadeIn();
	});
	
	$(document).on("mouseleave",".indepth_more_c",function(){
		$(this).find(".indepth_mini_title").fadeOut("slow");
	});

	
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

var indepth_carrousel = function(){
	$(".indepth_carrousel").each(function(){
		var selected = 1;
		var carrousel = $(this);
		var display = function(){
			$(".indepth_carrousel_element", carrousel).css("display", "none");
			$(".indepth_carrousel_element:eq(" + (selected-1) + ")", carrousel).css("display", "block");
		}

		$(".indepth_carrousel_prev img").on("click", function(){
			selected--;
			if(selected == 0){
				selected = $(".indepth_carrousel_element", carrousel).length;
			}
			display();
		});

		$(".indepth_carrousel_next img").on("click", function(){
			selected++;
			if(selected > $(".indepth_carrousel_element", carrousel).length){
				selected = 1;
			}
			display();
		});

		display();
	});
}

var indepth_startBtn = function(){
	$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $("#el-mundial-del-suspenso").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});
}

 
 var ads_scroll_2=function(){
	 var ventana_alto = $(window).height();
	 ventana_alto=ventana_alto-(ventana_alto*.15)
	 $('.indepth_anuncio_section').css("height",ventana_alto+"px");
	
	 var div_alto=$("#indepth_anuncio_section .indepth_page_body").height();
	 var margin_top=(ventana_alto-div_alto)/2;
		 $("#indepth_anuncio_section .indepth_page_body").css("margin-top",margin_top);
	 var m_detect=detect_mobile();
	 if(!m_detect){
		$(window).resize(function(){
		 var ventana_alto = $(window).height();
		 ventana_alto=ventana_alto-(ventana_alto*.10)
		 $('#indepth_anuncio_section').css("height",ventana_alto+"px");
		 var div_alto=$("#indepth_anuncio_section .indepth_page_body").height();
		 var margin_top=(ventana_alto-div_alto)/2;
		 $("#indepth_anuncio_section .indepth_page_body").css("margin-top",margin_top);
	 }); 
	 }
	  
	 
	 var scroller=-60;
	 var top_ant=0;
		 $(document).scroll(function () {
			 
		 });
 	} 
 
  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 
	 return mobile;
 }

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ads_scroll_2();
	if(!detect_mobile()){
	 $(".indepth_cover_content").css("width", $(window).width());
	 $(".indepth_cover_content").css("margin-left", -($(window).width()-800)/2);
	 indepth_menu();
	}else{
		 $(".indepth_cover_content").css("width", $(window).width());
	 $(".indepth_cover_content").css("margin-left", -(($(window).width())-($(window).width()*.95))/2);
	}
	
	$(document).on("click",".indepth_more_c",function(){
		var ir=$(this).attr("ir");
		var position = $("#"+ir).offset();
		//$.waypoints('disable');
		$('html, body').animate({
			scrollTop: position.top
		}, 3000, function(){

			//$.waypoints('enable')
		});
	})
	$(document).on("click","#gototop",function(){
		$("html, body").animate({ scrollTop: 0 }, 3000);
		return false;
	});
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
});