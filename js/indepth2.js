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
		$(document).on("mouseleave",".indepth_author_menu",function(){
			$(this).fadeOut();
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
 
 function loadDisqus(source, identifier, url) {

};

var indepth_commets=function(){
		$('#el-mundial-del-suspenso').waypoint(
		{
			handler:function(direction) {
				 	if(direction=="down"){
				 	var t=$("#indepth_coments_3").parent().height();
						 $("#indepth_coments_3").parent().css("min-height",t+"px");
					 	loadDisqus($("#indepth_coments_2"), "indepth_el-mundial-del-suspenso", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!el-mundial-del-suspenso");
				 	}else{
					 	loadDisqus($("#indepth_coments_3"), "indepth_mundial-melancolia", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7#!mundial-melancolia");
				 	}
				 
			}
		}
		);
		
		$('#Bruma').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){
				 	 var t=$("#indepth_coments_2").parent().height();
					 $("#indepth_coments_2").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_1"), "indepth_bruma", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!Bruma"); 
				}else{
					loadDisqus($("#indepth_coments_2"), "indepth_el-mundial-del-suspenso", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!el-mundial-del-suspenso");
				}
			}
		}
		);
		
		$('#mundial-melancolia').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){
				 	var t=$("#indepth_coments_4").parent().height();
					 $("#indepth_coments_4").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_3"), "indepth_mundial-melancolia", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7#!mundial-melancolia");
				 	}else{
					 	loadDisqus($("#indepth_coments_4"), "indepth_obesidad", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!obesidad");
				 	}
			}
		}
		);
		
		$('#obesidad').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){
				 	var t=$("#indepth_coments_5").parent().height();
					 $("#indepth_coments_5").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_4"), "indepth_obesidad", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!obesidad");
				 }else{
					 loadDisqus($("#indepth_coments_5"), "indepth_pensamientos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!pensamientos");
				 }
			}
		}
		);
		
		$('#pensamientos').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){
				
				 	loadDisqus($("#indepth_coments_5"), "indepth_pensamientos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!pensamientos");
				 }else{
					 loadDisqus($("#indepth_coments_6"), "indepth_huevo", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!con_un_huevo");
				 }
			}
		}
		);
		
		$('#con_un_huevo').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){
				 	 var t=$("#indepth_coments_7").parent().height();
					 $("#indepth_coments_7").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_6"), "indepth_huevo", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!con_un_huevo");
				 }else{
					 loadDisqus($("#indepth_coments_7"), "indepth_Trescuartistas", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!Trescuartistas");
				 }
			}
		}
		);
		
		$('#Trescuartistas').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){
				 	 var t=$("#indepth_coments_8").parent().height();
					 $("#indepth_coments_8").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_7"), "indepth_Trescuartistas", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!Trescuartistas");
				 }else{
					 loadDisqus($("#indepth_coments_8"), "indepth_revancha", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!revancha");
				 }
			}
		}
		);
		
		$('#revancha').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_9").parent().height();
					 $("#indepth_coments_9").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_8"), "indepth_revancha", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!revancha");
				 }else{
				 	loadDisqus($("#indepth_coments_9"), "indepth_anecdoticos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!anecdoticos");
				 }
			}
		}
		);
		
		$('#anecdoticos').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_10").parent().height();
					 $("#indepth_coments_10").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_9"), "indepth_anecdoticos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!anecdoticos");
				 }else{
					 loadDisqus($("#indepth_coments_10"), "indepth_deriva", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!deriva");

				 }
			}
		}
		);
		
		$('#deriva').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
				 	var t=$("#indepth_coments_11").parent().height();
					 $("#indepth_coments_11").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_10"), "indepth_deriva", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!deriva");
				 }else{
				 var t=$("#indepth_coments_10").parent().height();
					 $("#indepth_coments_10").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_11"), "indepth_corona", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!corona");
				 }
			}
		}
		);
		
		$('#corona').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
				 	var t=$("#indepth_coments_12").parent().height();
					 $("#indepth_coments_12").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_11"), "indepth_corona", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!corona");
				 }else{
				 var t=$("#indepth_coments_11").parent().height();
					 $("#indepth_coments_11").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_12"), "indepth_anarquistas", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!anarquistas");
				 }
			}
		}
		);
		
		$('#anarquistas').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
				 var t=$("#indepth_coments_13").parent().height();
					 $("#indepth_coments_13").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_12"), "indepth_anarquistas", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!anarquistas");
				 }else{
				 var t=$("#indepth_coments_12").parent().height();
					 $("#indepth_coments_12").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_13"), "indepth_mall", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!mall");
				 }
			}
		}
		);
		
		$('#mall').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
				 var t=$("#indepth_coments_14").parent().height();
					 $("#indepth_coments_14").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_13"), "indepth_mall", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!mall");
				 }else{	
				 var t=$("#indepth_coments_13").parent().height();
					 $("#indepth_coments_13").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_14"), "indepth_inmensidad", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!inmensidad");
				 }
			}
		}
		);
		
		$('#inmensidad').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
				 var t=$("#indepth_coments_15").parent().height();
					 $("#indepth_coments_15").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_14"), "indepth_inmensidad", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!inmensidad");
				 }else{
				 var t=$("#indepth_coments_14").parent().height();
					 $("#indepth_coments_14").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_16"), "indepth_memorial", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!memorial");
				 }
			}
		}
		);
		$('#memorial').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
				 	var t=$("#indepth_coments_16").parent().height();
					 $("#indepth_coments_16").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_15"), "indepth_memorial", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!memorial");
				 }else{
				 var t=$("#indepth_coments_15").parent().height();
					 $("#indepth_coments_15").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_16"), "indepth_gritos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!gritos");
				 }
			}
		}
		);
		
		$('#gritos').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_17").parent().height();
					 $("#indepth_coments_17").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_16"), "indepth_gritos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!gritos");
				 }else{
					 var t=$("#indepth_coments_16").parent().height();
					 $("#indepth_coments_16").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_17"), "indepth_lento", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!lento");

				 }
			}
		}
		);
		
		$('#lento').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_18").parent().height();
					 $("#indepth_coments_18").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_17"), "indepth_lento", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!lento");
				 }else{
					 var t=$("#indepth_coments_17").parent().height();
					 $("#indepth_coments_17").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_18"), "indepth_octavos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!octavos");

				 }
			}
		}
		);
		
		$('#octavos').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
				 var t=$("#indepth_coments_19").parent().height();
					 $("#indepth_coments_19").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_18"), "indepth_octavos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!octavos");
				 }else{
					 var t=$("#indepth_coments_18").parent().height();
					 $("#indepth_coments_18").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_19"), "indepth_sin_brasil", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!sin_brasil");
				 }
			}
		}
		);
		
		$('#sin_brasil').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_20").parent().height();
					 $("#indepth_coments_20").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_19"), "indepth_sin_brasil", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!sin_brasil");
				 }else{
				 loadDisqus($("#indepth_coments_20"), "indepth_soledad", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!soledad");
					 var t=$("#indepth_coments_19").parent().height();
					 $("#indepth_coments_19").parent().css("min-height",t+"px");
				 }
			}
		}
		);
		
		$('#soledad').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_21").parent().height();
					 $("#indepth_coments_21").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_20"), "indepth_soledad", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!soledad");
				 }else{
					 var t=$("#indepth_coments_20").parent().height();
					 $("#indepth_coments_20").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_21"), "indepth_enemigos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!enemigos");
				 }
			}
		}
		);
	
	$('#enemigos').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_22").parent().height();
					 $("#indepth_coments_22").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_21"), "indepth_enemigos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!enemigos");
				 }else{
					 var t=$("#indepth_coments_21").parent().height();
					 $("#indepth_coments_21").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_22"), "indepth_perdedor", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!perdedor");
				 }
			}
		}
		);
		
		$('#perdedor').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_23").parent().height();
					 $("#indepth_coments_23").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_22"), "indepth_perdedor", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!perdedor");
				 }else{
					 var t=$("#indepth_coments_22").parent().height();
					 $("#indepth_coments_22").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_23"), "indepth_canibal", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!canibal");
				 }
			}
		}
		);
		
		$('#canibal').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 
				 	loadDisqus($("#indepth_coments_23"), "indepth_canibal", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!canibal");
				 }else{
					 var t=$("#indepth_coments_23").parent().height();
					 $("#indepth_coments_23").parent().css("min-height",t+"px");
				 }
			}
		}
		);
		
		$('#justicia').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_25").parent().height();
					 $("#indepth_coments_25").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_24"), "indepth_justicia", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!justicia");
				 }else{
					 var t=$("#indepth_coments_24").parent().height();
					 $("#indepth_coments_24").parent().css("min-height",t+"px");
					loadDisqus($("#indepth_coments_25"), "indepth_semifinales", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!semifinales");

				 }
			}
		}
		);
		
		$('#semifinales').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					  var t=$("#indepth_coments_26").parent().height();
					 $("#indepth_coments_26").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_25"), "indepth_semifinales", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!semifinales");
				 }else{
					 var t=$("#indepth_coments_25").parent().height();
					 $("#indepth_coments_25").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_26"), "indepth_especialista", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!especialista");
				 }
			}
		}
		);
		
		$('#especialista').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 var t=$("#indepth_coments_27").parent().height();
					 $("#indepth_coments_27").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_26"), "indepth_especialista", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!especialista");
				 }else{
					 var t=$("#indepth_coments_26").parent().height();
					 $("#indepth_coments_26").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_27"), "indepth_novelas", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!novelas");
				 }
			}
		}
		);
		
		$('#novelas').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					  var t=$("#indepth_coments_28").parent().height();
					 $("#indepth_coments_28").parent().css("min-height",t+"px");

				 	loadDisqus($("#indepth_coments_27"), "indepth_novelas", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!novelas");
				 }else{
					 var t=$("#indepth_coments_27").parent().height();
					 $("#indepth_coments_27").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_28"), "indepth_infantes", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!infantes");
				 }
			}
		}
		);
		
		$('#infantes').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					  var t=$("#indepth_coments_29").parent().height();
					 $("#indepth_coments_29").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_28"), "indepth_infantes", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!infantes");
				 }else{
					 var t=$("#indepth_coments_28").parent().height();
					 $("#indepth_coments_28").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_29"), "indepth_caos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!caos");
				 }
			}
		}
		);
		
		$('#caos').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 
				 	loadDisqus($("#indepth_coments_29"), "indepth_caos", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!caos");
				 }else{
					 var t=$("#indepth_coments_29").parent().height();
					 $("#indepth_coments_29").parent().css("min-height",t+"px");
				 }
			}
		}
		);
		
		$('#democracia').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					  var t=$("#indepth_coments_31").parent().height();
					 $("#indepth_coments_31").parent().css("min-height",t+"px");
				 	loadDisqus($("#indepth_coments_30"), "indepth_democracia", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!democracia");
				 }else{
					 var t=$("#indepth_coments_30").parent().height();
					 $("#indepth_coments_30").parent().css("min-height",t+"px");
					 loadDisqus($("#indepth_coments_31"), "indepth_seacabo", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!seacabo");
				 }
			}
		}
		);
		
		$('#seacabo').waypoint(
		{
			handler:function(direction) {
				 if(direction=="down"){	
					 
				 	loadDisqus($("#indepth_coments_31"), "indepth_seacabo", "http://juanfutbol.com/indepth/66bf9cfb-d0b3-4698-b6ad-2052267a76b7/#!seacabo");
				 }else{
					 var t=$("#indepth_coments_31").parent().height();
					 $("#indepth_coments_31").parent().css("min-height",t+"px");
				 }
			}
		}
		);

 }
 
 
 var menu = function(){
	 
 }

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ads_scroll_2();
	indepth_commets();
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
		$.waypoints('disable');
		$('html, body').animate({
			scrollTop: position.top
		}, 3000, function(){

			$.waypoints('enable')
		});
	})
	$(document).on("click","#gototop",function(){
		$("html, body").animate({ scrollTop: 0 }, 3000);
		return false;
	});
	$(document).scroll(function () {
		/*var godiv=$('.indepth_content_top').position().top;
		var div_cont=$("#body-wrapper").position().top;
		var top_doc=$(document).scrollTop();
		if(top_doc>=godiv && (div_cont-1000)>=top_doc){
			$("#gototop").fadeIn();
		}else{
			$("#gototop").fadeOut();
		}*/
	})
	

});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
});