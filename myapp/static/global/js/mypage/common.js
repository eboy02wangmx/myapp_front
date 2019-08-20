


/* !stack ------------------------------------------------------------------- */
jQuery(document).ready(function($) {
	pageScroll();
	rollover();
	popWindow();
	localNav();
	addCss();
	placeholder();
	balloon();
	logIO();
	gnaviCurrent();
	fixedHeader();
});


/* !isUA -------------------------------------------------------------------- */
var isUA = (function(){
	var ua = navigator.userAgent.toLowerCase();
	indexOfKey = function(key){ return (ua.indexOf(key) != -1)? true: false;}
	var o = {};
	o.ie      = function(){ return indexOfKey("msie"); }
	o.fx      = function(){ return indexOfKey("firefox"); }
	o.chrome  = function(){ return indexOfKey("chrome"); }
	o.opera   = function(){ return indexOfKey("opera"); }
	o.android = function(){ return indexOfKey("android"); }
	o.ipad    = function(){ return indexOfKey("ipad"); }
	o.ipod    = function(){ return indexOfKey("ipod"); }
	o.iphone  = function(){ return indexOfKey("iphone"); }
	return o;
})();

/* !rollover ---------------------------------------------------------------- */
var rollover = function(){
	var suffix = { normal : '_no.', over   : '_on.'}
	$('a.over, img.over, input.over').each(function(){
		var a = null;
		var img = null;

		var elem = $(this).get(0);
		if( elem.nodeName.toLowerCase() == 'a' ){
			a = $(this);
			img = $('img',this);
		}else if( elem.nodeName.toLowerCase() == 'img' || elem.nodeName.toLowerCase() == 'input' ){
			img = $(this);
		}

		var src_no = img.attr('src');
		var src_on = src_no.replace(suffix.normal, suffix.over);

		if( elem.nodeName.toLowerCase() == 'a' ){
			a.bind("mouseover focus",function(){ img.attr('src',src_on); })
			 .bind("mouseout blur",  function(){ img.attr('src',src_no); });
		}else if( elem.nodeName.toLowerCase() == 'img' ){
			img.bind("mouseover",function(){ img.attr('src',src_on); })
			   .bind("mouseout", function(){ img.attr('src',src_no); });
		}else if( elem.nodeName.toLowerCase() == 'input' ){
			img.bind("mouseover focus",function(){ img.attr('src',src_on); })
			   .bind("mouseout blur",  function(){ img.attr('src',src_no); });
		}

		var cacheimg = document.createElement('img');
		cacheimg.src = src_on;
	});
};
/* !pageScroll -------------------------------------------------------------- */
var pageScroll = function(){
	jQuery.easing.easeInOutCubic = function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}; 
	$('a.scroll, .scroll a, .pageTop a').each(function(){
		$(this).bind("click",function(e){
			e.preventDefault();
			var target  = $(this).attr('href');
			var targetY = $(target).offset().top;
			var parent  = ( isUA.opera() )? (document.compatMode == 'BackCompat') ? 'body': 'html' : 'html,body';
			$(parent).animate(
				{scrollTop: targetY },
				400,
				'easeInOutCubic'
			);
			return false;
		});
	});
	if($('#main').length){
		$('#footerLinkArea .pageTop').addClass('col2');
	}
}
/* !localNav ---------------------------------------------------------------- */
var localNav = function(){
	var navClass = document.body.className.toLowerCase(),
		parent = $(".lNavi"),
		prefix = 'lNav',
		current = 'current',
		regex = {
			a  : /l/,
			dp : [
				/l[\d]+_[\d]+_[\d]+_[\d]+/,
				/l[\d]+_[\d]+_[\d]+/,
				/l[\d]+_[\d]+/,
				/l[\d]+/
			]
		},
		route = [],
		i,
		l,
		temp,
		node;

	$("ul ul", parent).hide();

	if( navClass.indexOf("ldef") >= -1 ){
		for(i = 0, l = regex.dp.length; i < l; i++){
			temp = regex.dp[i].exec( navClass );
			if( temp ){
				route[i] = temp[0].replace(regex.a, prefix);
			}
		}
		///console.log(route);
		if( route[0] ){
			// depth 4
			node = $("a."+route[0], parent);
			node.addClass(current);
			node.next().show();
			node.parent().parent().show()
				.parent().parent().show()
				.parent().parent().show();
			node.parent().parent().prev().addClass('parent');
			node.parent().parent()
				.parent().parent().prev().addClass('parent');
			node.parent().parent()
				.parent().parent()
				.parent().parent().prev().addClass('parent');

		}else if( route[1] ){
			// depth 3
			node = $("a."+route[1], parent);
			node.addClass(current);
			node.next().show();
			node.parent().parent().show()
				.parent().parent().show();
			node.parent().parent().prev().addClass('parent');
			node.parent().parent()
				.parent().parent().prev().addClass('parent');


		}else if( route[2] ){
			// depth 2
			node = $("a."+route[2], parent);
			node.addClass(current);
			node.next().show();
			node.parent().parent().show();
			node.parent().parent().prev().addClass('parent');

		}else if( route[3] ){
			// depth 1
			node = $("a."+route[3], parent);
			node.addClass(current);
//			node.next().show();

		}else{
		}
	}
}
/* !popWindow --------------------------------------------------------------- */
var popWindow = function (){
	var param = null;
	// param[0] = width
	// param[1] = height
	// param[2] = window.name
	$('a[class^="js_popup"], area[class^="js_popup"]').each(function(i){
		$(this).click(function(){
			var w = null;
			param = $(this).attr('class').match(/[0-9]+/g);
			// get window.name
			param[2] = window.name ? window.name+'_' : '';
			w = window.open(this.href, param[2]+'popup'+i,'width='+param[0]+',height='+param[1]+',scrollbars=yes');
			w.focus();
			return false;
		});
	});
}
/* !defFunc ----------------------------------------------------------------- */
var defFunc = (function(){
	Print = function(){ window.print(); return false;}
	Close = function(){ window.close(); return false;}
})();
/* !Add Class --------------------------------------------------- */
var addCss = (function(){
	$('div[class^=section]:last-child').addClass('last');
	$('li:last-child').addClass('last');
	$('dd:last-child').addClass('last');
	$('div.columnWrap:last-child').addClass('last');
	if($('#main').length){
		$('.h1Basic').addClass('col2');
	}
});

/* !Placeholder --------------------------------------------------- */
var placeholder = (function(){
	$(window).ready(function(){
		$('tr:not(.trRequired) input.placeholder').addClass('notRequired');
		$('.placeholder:not(.placeholder-applied)').each(function(){
			var $target = $(this);
			$target.addClass('placeholder-applied');
			var thisTitle = $(this).attr('title');
			if(!(thisTitle === '')){
				$(this).wrapAll('<span style="text-align:left;display:inline-block;position:relative;"></span>');
				$(this).parent('span').append('<span class="blur">' + thisTitle + '</span>');
				$(this).parent('span').find('.blur').css({
					top:'4px',
					left:'5px',
					fontSize:'100%',
					lineHeight:'120%',
					textAlign:'left',
					color:'#a9a9a9',
					overflow:'hidden',
					position:'absolute',
					zIndex:'99'
				}).click(function(e){
					e.preventDefault();
					e.stopPropagation();
					$target.focus();
				});

				$(this).focus(function(){
					$(this).next('span').css({display:'none'});
				});

				$(this).blur(function(){
					var thisVal = $(this).val();
					if(thisVal === ''){
						$(this).next('span').css({display:'inline-block'});
					} else {
						$(this).next('span').css({display:'none'});
					}
				});

				var thisVal = $(this).val();
				if(thisVal === ''){
					$(this).next('span').css({display:'inline-block'});
				} else {
					$(this).next('span').css({display:'none'});
				}
			}
		});
	});
});

/* !balloon -------------------------------------------------------------------- */
var balloon = function(){
	if ("ontouchstart" in window) {
		var CLICK_CLASS = "click";

		$('.detailBalloonWrap').on("click", function() {
			var $self = $(this);
			if ($self.hasClass(CLICK_CLASS)) {
				$self.removeClass(CLICK_CLASS);
alert("remove");
			} else {
				$self.addClass(CLICK_CLASS);
			}
		});
	}
};


/* !logIn/logOut ---------------------------------------------------------------- */
var logIO = function(){
	$().ready(function(){
		var rlLogin = false;
		var name = "rllogin=";
		var ca = document.cookie.split('; ');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			if (c.indexOf(name) != -1) {
				rlLogin = c.substring(name.length, c.length);
				break;
			}
		}
		if(rlLogin) {
			$("#logIO").removeClass('ioDisabled');
		} else {
			$("#logIO").addClass('ioDisabled');
		}
	});
};

/* !gnaviCurrent ---------------------------------------------------------------- */
var gnaviCurrent = function() {
	var dirName = location.pathname.split('/')[1],
		href = dirName && dirName !== 'index.html' ? '/' + dirName + '/' : '/';
		$('.jsGnavCurrent').find('a[href="'+ href +'"]').parent('li').addClass('current');
};

/* !fixedHeader ---------------------------------------------------------------- */
var fixedHeader = function() {
	var unFixed = isUA.android() || isUA.ipad() || isUA.iphone() || isUA.ipod() || $('body').hasClass('unFixedHeader');
	if(!unFixed) {
		var $window = $(window),
			$el = $('.jsAddFixedBar'),
			$parts = $el.find($('.jsFixedParts')),
			startHeight = 400,
			speed = 200,
			$fixed, isFixed;
		$el.append('<div class="rc-h-fixed-bar" aria-hidden="true"><div class="rc-h-inner"></div></div>');
		$fixed = $el.find($('.rc-h-fixed-bar'));
		$parts.clone(true).appendTo($fixed.children($('.rc-h-inner')));
		$fixed.find($('.rc-h-action-btn')).wrap('<div class="rc-h-action-nav"></div>');
		$fixed.hide().css('top', - $fixed.outerHeight() - 5);
		$window.on('scroll', function() {
			if($window.scrollTop() >= startHeight) {
				if(!isFixed) {
					$fixed.show(0, function() {
						$fixed.animate({'top' : 0}, speed);
						$(".rc-h-fixed-bar").addClass("rc-h-fixed-bar_Active");
					});
					isFixed = true;
				}
			} else {
				if(isFixed) {
					$fixed.animate({'top' : - $fixed.outerHeight() - 5}, speed, function() {
						$fixed.hide();
						$(".rc-h-fixed-bar").removeClass("rc-h-fixed-bar_Active");
					});
					isFixed = false;
				}
			}
		});
		$window.trigger('scroll');
	}
};


/* !carousel ---------------------------------------------------------------- */

/* ------------ PR ------------ */
$(document).ready(function(){
  $('#prCarouseContainer').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed:3500,
    dots: false,
    dotsClass: 'slick-dots',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
  });
 $('#prCarouseContainer').css('display', 'block');
 
});

/* ------------ ホームアシスト ------------ */
function sliderSetting(){
  var width = $(window).width();
  if(width <= 767){
 　$('#myapp .spslider').slick({
  slidesToShow:2,
  arrows:false,
  centerMode: true,
  centerPadding:'3%',
 　});
  }else{
   $('#myapp .spslider').slick('unslick');
  }
}
 

// リサイズ時の実行
$(window).resize( function() {
  sliderSetting();
});


/* !AutoHeight ---------------------------------------------------------------- */

$(window).on('load resize', function(){
     $('.productSection .productbox').autoHeight();
	 $('.qa-autoHeight').autoHeight();
	 
    });


/* !Hamburger accordion ---------------------------------------------------------------- */
$(function () {
  $('.acc-btn').click(function() {
    $(this).next('ul').slideToggle('fast');
	 $(".rc-h-service-bar").addClass("rc-h-service-barSP");
	  $(".acc-open-btn").css({"z-index":"99999","position":"fixed"});
  });
  $('.li1').click(function(e) {
    // メニュー表示/非表示
    $(this).children('ul').slideToggle('fast');
    e.stopPropagation();
	  if($(".rc-h-service-bar").hasClass("rc-h-service-barSP")){
	  } else{
	  $(".rc-h-service-bar").removeClass("rc-h-service-barSP");
	  }
	
  });
});

$(function(){
	$(".span1").click(function(){
		if($(this).hasClass("plus")){
		$(this).removeClass("plus").addClass("minus");	
		} else {
		$(this).removeClass("minus").addClass("plus");	
		}
	});
});


$(function(){
	$(".li1").click(function(){
		if($(this).hasClass("plus")){
		$(this).removeClass("plus").addClass("minus");		   
		} else {
		$(this).removeClass("minus").addClass("plus");				
		}
	});
});


$(function(){
	$('#mddNav .g_modal').hover(function(){
		childPanel = $(this).children('.mddWrap');
		childPanel.each(function(){
			childPanel.css({display:'block',opacity:'0'}).stop().animate({opacity:'1'},500,'swing');
		});
	},function(){
		childPanel.css({display:'none'});
	});
});

/* !Page top ---------------------------------------------------------------- */
$(function(){
	$(document).ready(function(){
		$(".js-pagetop").hide();
		$(function(){
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.js-pagetop').fadeIn();
				} else {
					$('.js-pagetop').fadeOut();
				}
			});
			$(window).bind("scroll", function(){
				scrollHeight = $(document).height();
				scrollPosition = $(window).height() + $(window).scrollTop();
				footHeight = $(".footWrapper").innerHeight();
				footHeight = footHeight;
				if( scrollHeight - scrollPosition <= footHeight ){
					$('.js-pagetop').css({
						"position":"absolute",
						"bottom": footHeight
					});
				} else {
					$('.js-pagetop').css({
						"position":"fixed",
						"bottom": "20px"
					});
				}
			});	
		});	
	});	
});

$(function () {
	
	$('.acc-open-btn').click(function () {
		$(this).toggleClass('active');
		$('.zdo_drawer_bg').fadeToggle();
		$('nav').toggleClass('open');
		$('html').toggleClass('fixed');
	});
	$('.zdo_drawer_bg').click(function () {
		$(this).fadeOut();
		$('.acc-open-btn').removeClass('active');
		$('nav').removeClass('open');
	});
});

/* !parts top ---------------------------------------------------------------- */
$(function() {
    $(".sectionInner").matchHeight();
    $(".matchHeight").matchHeight();
});


$(function() {
	function insurancelarea() {
		$(this).toggleClass("active").next().slideToggle(600);
	}
	$(".sectiontitle_sp").click(insurancelarea);
});

/* !Anchor link ---------------------------------------------------------------- */
$(function(){
	$('a[href^=#],area[href^=#]').click(function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var headerHeight = 65; 
		var position = target.offset().top - headerHeight; 
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

/* !sidenav ---------------------------------------------------------------- */
(function(){

$(window).on("load scroll resize",function(){
  var sidebarFix = function(){

    //スクロールバー込みの画面幅
    var w = window.innerWidth;

    //サイドバー有無の境界幅
    var x = 767;

    if(w >= x){

      //各要素の高さを取得 
      var $winH = $(window).height();//ウィンドウの高さ
      var $pageH = $('body').height();//bodyの高さ
      var $headerH = $('header').outerHeight(true);//ヘッダーの高さ
      var $mainH = $('.contentinner').outerHeight(true);//メインカラムの高さ
      var $sideH = $('#navfixed').outerHeight(true);//サイドバーの高さ
      var $footerH = $('.footWrapper').outerHeight(true);//フッターの高さ
      var $paddingH = $('.contentinner').outerHeight(true) - $('.contentinner').height();//余白の高さ

      //サイドバーの固定と解除条件を計算 
      var $fixedSide = ($headerH + $paddingH + $sideH) - $winH;//サイドバーを固定するスクロール高さ
      var $scrollBtm = $pageH - $winH - $footerH ;//フッターが画面に表示されるスクロール高さ

      //スクロール値を取得 
      var $scrollTop = $(this).scrollTop();

      //記事がサイドバーより長い場合実行
      if($mainH > $sideH){

        //サイドバー下端までスクロールしたらサイドバー下端で追従
        if($scrollTop > $fixedSide){

          //サイドバー固定のクラス付与
          $('#navfixed').addClass('fixed-side');

          //サイドバー固定時のサイドバー幅を計算
          var $sidebarW = $('#nav-sidebar').width();

          //計算したサイドバー幅を付与
          $('#navfixed').css("width",$sidebarW);

        //条件から外れたら固定クラスを削除し幅をリセット
        }else{

          //サイドバー固定のクラス削除
          $('#navfixed').removeClass('fixed-side');

          //サイドバー幅リセット
          $('#navfixed').css('width','auto');
        }
        //フッターまでスクロールしたらサイドバー下端をフッター上端に連結
        if($scrollTop > $scrollBtm){
          $('#navfixed').removeClass('fixed-side').css({'position':'fixed','bottom':'0'});
          $('#navfixed').addClass('bottom-side').css('bottom',$footerH);

        //条件から外れたらクラスを削除
        }else{
          $('#navfixed').removeClass('bottom-side').css('bottom',0);
        }
      }

    //サイドバーがない場合に適用
    }else{
      $('#navfixed').css('width','auto');
    }
  };sidebarFix();
});
})(jQuery);

