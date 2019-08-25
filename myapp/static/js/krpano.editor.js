var krpano = document.getElementById("krpanoSWFObject"),
	sceneList = [],
	toAddHotSpot = {}, currentSceneIndex = 0,
	movingSpot = {}, pbX = 0,
	movePx = 0,
	moveFastPx = 0,
	moveIntervalId, listIntervalId, listPx = 0,
	listFastPx = 0,
	canDownMove = !1,
	canLeftMove = !1,
	canRightMove = !1,
	canShowLeft = !0;
$(function() {
	$(".triangle-down").mouseup(function() {
		canDownMove = !1
	}).mouseout(function() {
		canDownMove = !1
	});

	$(".hot-style").click(function() {
		toAddHotSpot.style = $(this).attr("name");
		$(".hot-style").removeClass("hot-style-on");
		$(this).addClass("hot-style-on")
	});
	$(".my-open-out").click(function() {
		toAddHotSpot.dive ? (toAddHotSpot.dive = !1, $(this).css("background", "rgba(255,255,255,0.4)"), $(".my-open-in").removeClass("my-open-in-open").addClass("my-open-in-close")) : (toAddHotSpot.dive = !0, $(this).css("background", "#00a3d8"), $(".my-open-in").removeClass("my-open-in-close").addClass("my-open-in-open"))
	});
});

function onready() {
	var a, b = {
			list: []
		};
	krpano.get("scene").getArray().forEach(function(a) {
		b.list.push({
			title: a.title,
			name: a.name,
			index: a.index,
			thumburl: a.thumburl
		})
	});
	a = template("tplSceneList", b);
	 
	document.getElementById("sceneList").innerHTML = a;
	$("li[name=" + krpano.get("startscene") + "] .circle").css("background-color", "#FF9800");
	$("li[name=" + krpano.get("xml.scene") + "]").addClass("li-scene-hover");
	currentSceneIndex = krpano.get("scene").getItem(krpano.get("xml.scene")).index;
	var c = {
		list: []
	};
	krpano.get("hotspot").getArray().forEach(function(a) {
		"vr_cursor" != a.name && a.name.indexOf('tooltip_') < 0 && (c.list.push(a), hotSpotInitEvent(a.name))
	});
	a = template("tplHotSpotList", c);
	document.getElementById("hotSpotList").innerHTML = a;
	listIntervalId = setInterval(spotAutoGif, 30);
	$("#waitTime").val(krpano.get("autorotate.waittime"));
	krpano.get("autorotate.enabled") ? ($("#autoSpin").prop("checked", !0), $("#waitTimeInput").show()) : ($("#autoSpin").prop("checked", !1), $("#waitTimeInput").hide());
    if (krpano.get("autorotate.speed")===-5.0){
        $("#directionRight").prop('checked',false);
        $("#directionLift").prop('checked',true);
    }else {
        $("#directionRight").prop('checked',true);
        $("#directionLift").prop('checked',false);
    }
	$("#initFov").val(krpano.get("view.fov").toFixed(0));
	$("#initFovMax").val(krpano.get("view.fovmax").toFixed(0));
	$("#initFovMin").val(krpano.get("view.fovmin").toFixed(0));
	updatePbLine();
	initPbLineEvent();
	sceneList.length || krpano.get("scene").getArray().forEach(function(a) {
		var b = {};
		b.index = a.index;
		b.name = a.name;
		b.uuid = a.uuid;
		b.title = a.title;
		b.lat = a.lat;
		b.lng = a.lng;
		b.heading = a.heading;
		a.name == krpano.get("startscene") && (b.welcomeFlag = !0);
		sceneList.push(b)
	});
}

function changeScene(a) {
	window.clearInterval(listIntervalId);
	krpano.call("loadscene(" + krpano.get("scene").getItem(a).name + ")");
	a = sceneList[a];
	null != a.initH && krpano.set("view.hlookat", a.initH);
	null != a.initV && krpano.set("view.vlookat", a.initV);
	null != a.fov && krpano.set("view.fov", a.fov);
	null != a.fovmax && krpano.set("view.fovmax", a.fovmax);
	null != a.fovmin && krpano.set("view.fovmin", a.fovmin);
	null != a.autorotate && (krpano.set("autorotate.enabled", a.autorotate.enabled), krpano.set("autorotate.waittime", a.autorotate.waitTime),krpano.set("autorotate.speed",a.autorotate.speed));
	null != a.hotSpots && (krpano.get("hotspot").getArray().forEach(function(a) {
		"vr_cursor" != a.name && krpano.call("removehotspot(" + a.name + ")")
	}), a.hotSpots.forEach(function(a) {
		krpano.call("addhotspot(" + a.name + ");");
		krpano.set("hotspot[" + a.name + "].ath", a.ath);
		krpano.set("hotspot[" + a.name + "].atv", a.atv);
		krpano.set("hotspot[" + a.name + "].title", a.title);
		krpano.set("hotspot[" + a.name + "].linkedscene", a.linkedscene);
		krpano.set("hotspot[" + a.name + "].dive", a.dive);
		krpano.get("hotspot[" + a.name + "]").loadstyle(a.style)
	}));
	$(".li-scene-hover").removeClass("li-scene-hover");
	$("li[name=" + krpano.get("xml.scene") + "]").addClass("li-scene-hover");
	$(".circle").css("background-color", "#292827");
	sceneList.forEach(function(a) {
		a.welcomeFlag && ($(".circle:eq(" + a.index + ")").css("background-color", "#FF9800"), krpano.set("startscene", a.name))
	})
}

function rename(a) {
	a.prev().hide();
	a.attr("type", "text");
	var b = a.val();
	a.val("");
	a.focus();
	a.val(b)
}

function doRename(c) {
	var d = c.parent().attr('key');
	var e = c.val();
	var f = krpano.get("scene").getItem(d).title;
	var g = krpano.get("scene").getItem(d).name;
	var h = true;
	sceneList.forEach(function(a) {
		if (a.index != d) {
			if (a.title == e) {
				h = false;
				return false
			}
		}
	});
	if (h) {
		sceneList[d].title=e;
		krpano.get("scene").getItem(d).title = e;
		sceneList.forEach(function(b) {
			if (b.index != d && b.hotSpots) {
				b.hotSpots.forEach(function(a) {
					if (a.linkedscene == g) {
						a.title = e;
						krpano.set("hotspot[" + a.name + "].title", e)
					}
				})
			}
		});
		$(".hot-spot-text").each(function() {
			if ($(this).text() == f) {
				$(this).text(e)
			}
		});
		$("#isEdited").text('未 保 存');
        $("#isEdited").css('background-color','red');
		c.prev().text(e)
	} else {
		c.val(f);
		alert("名前が存在しています。")
		// document.getElementById("sampleModal").style.display="block";
		// document.getElementById("result").style.display="block";
	}
	c.prev().show();
	c.attr("type", "hidden")
}

function selectWelcomeScene(a) {
	$(".circle").css("background-color", "#292827");
	$(".circle:eq(" + a + ")").css("background-color", "#FF9800");
	sceneList.forEach(function(a) {
		a.welcomeFlag = 0
	});
	sceneList[a].welcomeFlag = 1;
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
}

function setAsDefaultView() {
	sceneList[currentSceneIndex].initH = krpano.get("view.hlookat");
	sceneList[currentSceneIndex].initV = krpano.get("view.vlookat");
	sceneList[currentSceneIndex].fov = krpano.get("view.fov");
	$("#initFov").val(krpano.get("view.fov").toFixed(0));
	updatePbLine();
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
}
function setAsDefaultView2() {
    sceneList[currentSceneIndex].initHT = krpano.get("view.hlookat");
    sceneList[currentSceneIndex].initVT = krpano.get("view.vlookat");
    sceneList[currentSceneIndex].fovT = krpano.get("view.fov");
    $("#initFov").val(krpano.get("view.fov").toFixed(0));
    updatePbLine();
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
}

function autoSpinClick() {
	var a = $("#autoSpin").is(":checked");
	a ? $("#waitTimeInput").show() : $("#waitTimeInput").hide();
	krpano.set("autorotate.enabled", a);
	krpano.set("autorotate.waittime", $("#waitTime").val());
    krpano.set("autorotate.speed", $("input[name='direction']:checked").val());
	a ?krpano.set("layer[autoSpinBtn].url","%SWFPATH%/stop.png"):	krpano.set("layer[autoSpinBtn].url","%SWFPATH%/start.png");
	krpano.get("scene").getArray().forEach(function(a) {
		sceneList[a.index].autorotate = {
			enabled: $("#autoSpin").is(":checked"),
			waitTime: $("#waitTime").val(),
			speed: $("input[name='direction']:checked").val()
		}
	});
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
}

function updateFov() {
	var a = $("#initFov").val(),
		b = $("#initFovMax").val(),
		c = $("#initFovMin").val();
	"" == a || 180 < Number(a) || 0 > Number(a) ? $("#initFov").val(krpano.get("view.fov").toFixed(0)) : "" == b || 180 < Number(b) || 0 > Number(b) ? $("#initFovMax").val(krpano.get("view.fovmax").toFixed(0)) : "" == c || 180 < Number(c) || 0 > Number(c) ? $("#initFovMin").val(krpano.get("view.fovmin").toFixed(0)) : (krpano.set("view.fov", a), krpano.set("view.fovmax", b), krpano.set("view.fovmin", c), sceneList[currentSceneIndex].fov = a, sceneList[currentSceneIndex].fovmax = b, sceneList[currentSceneIndex].fovmin = c, updatePbLine(), $("#isEdited").text("未 保 存"), $("#isEdited").css('background-color','red'))
}

function fovForAll() {
	sceneList.forEach(function(a) {
		a.fov = $("#initFov").val();
		a.fovmax = $("#initFovMax").val();
		a.fovmin = $("#initFovMin").val()
	});
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
	//alert("成功しました")
}

function updatePbLine() {
	var a = Number(krpano.get("view.fovmin")) / .9,
		b = Number(krpano.get("view.fovmax")) / .9 - a,
		c = Number(krpano.get("view.fov")) / .9 - a - 10;
	$(".triangle-down").css("margin-left", c.toFixed(0) + "px");
	$(".number-pb-shown").css("left", a.toFixed(0) + "px").css("width", b.toFixed(0) + "px").show()
}

function initPbLineEvent() {
	$(".triangle-down").unbind("mousedown").mousedown(function() {
		pbX = krpano.get("mouse.x");
		canDownMove = !0
	}).unbind("mousemove").mousemove(function() {
		canDownMove && moveDownLine()
	});
	/*$(".triangle-up-left").unbind("mousedown").mousedown(function() {
		pbX = krpano.get("mouse.x");
		canLeftMove = !0
	}).unbind("mousemove").mousemove(function() {
		canLeftMove && moveLeftLine()
	});
	$(".triangle-up-right").unbind("mousedown").mousedown(function() {
		pbX = krpano.get("mouse.x");
		canRightMove = !0
	}).unbind("mousemove").mousemove(function() {
		canRightMove && moveRightLine()
	})*/
}

function moveDownLine() {
	var a = Number(krpano.get("view.fovmin")) / .9,
		b = Number(krpano.get("view.fovmax")) / .9 - a,
		c = Number(krpano.get("view.fov")) / .9 - a - 10 + krpano.get("mouse.x") - pbX;
	0 > c + 10 && (canDownMove = !1, c = -10);
	c + 10 > b && (canDownMove = !1, c = b - 10);
	pbX = krpano.get("mouse.x");
	krpano.set("view.fov", .9 * (c + 10 + a));
	$(".triangle-down").css("margin-left", c.toFixed(0) + "px");
	$("#initFov").val(krpano.get("view.fov").toFixed(0));
	sceneList[currentSceneIndex].fov = krpano.get("view.fov");
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
}

function moveLeftLine() {
	var a = Number(krpano.get("view.fovmin")) / .9 + krpano.get("mouse.x") - pbX,
		b = Number(krpano.get("view.fovmax")) / .9;
	0 > a && (a = 0, canLeftMove = !1);
	20 > b - a && (a = b - 20, canLeftMove = !1);
	krpano.get("view.fov") < krpano.get("view.fovmin") && krpano.set("view.fov", krpano.get("view.fovmin"));
	pbX = krpano.get("mouse.x");
	krpano.set("view.fovmin", .9 * a);
	updatePbLine();
	$("#initFovMin").val(krpano.get("view.fovmin").toFixed(0));
	sceneList[currentSceneIndex].fovmin = krpano.get("view.fovmin");
	$("#isEdited").text("未 保 存");
	$("#isEdited").css('background-color','red')
}

function moveRightLine() {
	var a = Number(krpano.get("view.fovmin")) / .9,
		b = Number(krpano.get("view.fovmax")) / .9 + krpano.get("mouse.x") - pbX;
	200 < b && (b = 200, canRightMove = !1);
	20 > b - a && (b = a + 20, canRightMove = !1);
	krpano.get("view.fov") > krpano.get("view.fovmax") && krpano.set("view.fov", krpano.get("view.fovmax"));
	pbX = krpano.get("mouse.x");
	krpano.set("view.fovmax", .9 * b);
	updatePbLine();
	$("#initFovMax").val(krpano.get("view.fovmax").toFixed(0));
	sceneList[currentSceneIndex].fovmax = krpano.get("view.fovmax");
	$("#isEdited").text("未 保 存");
	$("#isEdited").css('background-color','red')
}

function updateHotSpotData() {
	var a, b = {
			list: []
		}, c = [];
	krpano.get("hotspot").getArray().forEach(function(a) {
		if ("vr_cursor" != a.name && a.name.indexOf('tooltip_') < 0) {
			b.list.push(a);
			var d = {};
			d.ath = a.ath.toString();
			d.atv = a.atv.toString();
			d.linkedscene = a.linkedscene;
			d.name = a.name;
			d.style = a.style;
			d.title = a.title;
			d.dive = a.dive;
			c.push(d)
		}
	});
	sceneList[currentSceneIndex].hotSpots = c;
	a = template("tplHotSpotList", b);
	document.getElementById("hotSpotList").innerHTML = a
}

function getQueryString(a) {
	a = a ? a : window.location.search;
	var b = {};
	if (-1 != a.indexOf("?")) {
		a = a.split("?")[1].split("&");
		for (var c = 0; c < a.length; c++) {
			var e = a[c].split("=")[1].replace(/\+/g, "%20");
			b[a[c].split("=")[0]] = decodeURIComponent(e)
		}
	}
	return b
}

function save() {
	if ("保 存 済" != $("#isEdited").text()) {
		var a = JSON.stringify(sceneList);
		//var host=location.pathname.split('/');
		var host = location.origin + ":8080/myapp-backend/api/editor";
		$.ajax({
			type: "POST",
			contentType: "application/json; charset=utf-8",
			url: host,
			data: a,
			async: false,
			dataType: "jsonp",
            crossDomain: true,
			success: function(a) {
				// alert(a);
				console.log(a);
				showMessage();
                $("#isEdited").text("保 存 済");
                $("#isEdited").css('background-color','#2185D0');
				//"成功しました" == a && $("#isEdited").text("保存")
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
			    console.log("XMLHttpRequest : " + XMLHttpRequest.status);
				console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
				alert("エラー")
			}
		})
	}
}

function autoMove() {
	krpano.call("screentosphere(mouse.x, mouse.y, mouseath, mouseatv);");
	krpano.set("hotspot[" + movingSpot.name + "].ath", krpano.get("mouseath") + movingSpot.athDis);
	krpano.set("hotspot[" + movingSpot.name + "].atv", krpano.get("mouseatv") + movingSpot.atvDis);
	krpano.set("hotspot[tooltip_" + movingSpot.name + "].ath", krpano.get("mouseath") + movingSpot.athDis);
	krpano.set("hotspot[tooltip_" + movingSpot.name + "].atv", krpano.get("mouseatv") + movingSpot.atvDis)
}

function showAddHotSpot() {
	moveIntervalId = setInterval(addSpotAutoGif, 30);
	$(".hot-style").removeClass("hot-style-on");
	$(".hot-style").first().addClass("hot-style-on");
	toAddHotSpot.style = $(".hot-style").first().attr("name");
	toAddHotSpot.dive = !0;
	$(".my-open-out").css("background", "#00a3d8");
	$(".my-open-in").removeClass("my-open-in-close").addClass("my-open-in-open");
	$("#hotToolButton").hide();
	$(".add-hot-pot").show();
	$("#selectStyle").show();
	$("#goToScene").hide();
	$("#writeTitle").hide();
	$("#selectStyleTitle").addClass("progress-title-on");
	$("#goToSceneTitle").removeClass("progress-title-on");
	$("#writeTitleTitle").removeClass("progress-title-on")
}

function spotAutoGif() {
	listPx -= 32;
	listFastPx -= 32; - 1280 == listFastPx && (listFastPx = 0); - 3200 == listPx && (listPx = 0);
	$(".hot-spot-img").each(function() {
		"hotspot_3" == $(this).attr("spot-style") ? $(this).css("background-position", "0 " + listFastPx + "px") : $(this).css("background-position", "0 " + listPx + "px")
	})
}

function addSpotAutoGif() {
	movePx -= 64;
	moveFastPx -= 64; - 1280 == moveFastPx && (moveFastPx = 0); - 3200 == movePx && (movePx = 0);
	$(".hot-style").each(function() {
		"hotspot_3" == $(this).attr("name") ? $(this).css("background-position", "0 " + moveFastPx + "px") : $(this).css("background-position", "0 " + movePx + "px")
	})
}

function hideAddHotSpot() {
	window.clearInterval(moveIntervalId);
	toAddHotSpot = {};
	$(".add-hot-pot").hide();
	$("span[data-target=#toolHot]").click()
}

function nextToSelectTargetScene() {
	if (null == toAddHotSpot.style){
		alert("スタイルを選択してください");
	}else if('hotspot_txt' == toAddHotSpot.style){
		toAddHotSpot.linkedscene="noscence"
		nextToWriteTitle();
	}else if('hotspot_url' == toAddHotSpot.style){
		toAddHotSpot.linkedscene="noscence"
		nextToWriteTitle();
	}else{
		window.clearInterval(moveIntervalId);
		var a, b = {
				list: []
			};
		krpano.get("scene").getArray().forEach(function(a) {
			a.name != krpano.get("xml.scene") && b.list.push({
				name: a.name,
				title: a.title,
				index: a.index + 1,
				thumburl: a.thumburl
			})
		});
		a = template("tplTargetScene", b);
		document.getElementById("targetScene").innerHTML = a;
		$(".select-scene-div").removeClass("select-scene-div-on");
		$(".select-scene-div").first().addClass("select-scene-div-on");
		toAddHotSpot.linkedscene = $(".select-scene-div").first().attr("name");
		$(".select-scene-div").unbind("click").click(function() {
			toAddHotSpot.linkedscene = $(this).attr("name");
			$(".select-scene-div").removeClass("select-scene-div-on");
			$(this).addClass("select-scene-div-on")
		});
		$("#selectStyle").hide();
		$("#goToScene").show();
		$("#writeTitle").hide();
		$("#goToSceneTitle").addClass("progress-title-on");
		$("#selectStyleTitle").removeClass("progress-title-on");
		$("#writeTitleTitle").removeClass("progress-title-on")
	}
}

function nextToWriteTitle() {
	null == toAddHotSpot.linkedscene&&toAddHotSpot.style!="hotspot_txt" ? alert("目標を選択してください。") : (/*$("#addHotTitle").val(toAddHotSpot.linkedscene), */$("#selectStyle").hide(),$("#viewChange").hide(), $("#goToScene").hide(), $("#writeTitle").show(), $("#writeTitleTitle").addClass("progress-title-on"), $("#selectStyleTitle").removeClass("progress-title-on"), $("#goToSceneTitle").removeClass("progress-title-on"));
	if(toAddHotSpot.style=="hotspot_txt"){
		$("#fontcolorselect").show();
        $("#fontsizeselect").show();
		$("#urlselect").hide();
        $("#viewChange").hide();
        $("#text").html("テキスト");
        $("#viewText").html();
	}else if(toAddHotSpot.style!="hotspot_url"){
		$("#fontcolorselect").show();
		$("#fontsizeselect").show();
		$("#urlselect").hide();
        $("#viewChange").show();
        $("#text").html("スポット文字");
        $("#viewText").html("視点設定");
	}else{
		$("#fontcolorselect").show();
		$("#fontsizeselect").show();
		$("#urlselect").show();
        $("#viewChange").hide();
        $("#text").html("URL文字");
        $("#urlText").html("URL入力");
	}
}

function addHotSpot() {
	krpano.set("halfHeight", krpano.get("stageheight") / 2);
	krpano.set("halfWidth", krpano.get("stagewidth") / 2);
	krpano.call("screentosphere(halfWidth,halfHeight,init_h,init_v);");
	var a = krpano.get("init_h"),
		b = krpano.get("init_v"),
		c = "spot" + (new Date).getTime();
	krpano.call("addhotspot(" + c + ");");
	krpano.set("hotspot[" + c + "].ath", a);
	krpano.set("hotspot[" + c + "].atv", b);
	krpano.set("hotspot[" + c + "].title", $("#addHotTitle").val());
	
	if(toAddHotSpot.style=="hotspot_url"){
		toAddHotSpot.style+=($("input[name='radiogroup']:checked").val()+$("input[name='radiosize']:checked").val());
		
		if($("#addHotUrl").val().substring(7,0)=="http://" || $("#addHotUrl").val().substring(8,0)=="https://"){
			krpano.set("hotspot[" + c + "].linkedscene", $("#addHotUrl").val());
		}else{
			krpano.set("hotspot[" + c + "].linkedscene", "http://"+$("#addHotUrl").val());
		}
		
	}else{
		krpano.set("hotspot[" + c + "].linkedscene", toAddHotSpot.linkedscene);
        krpano.get("hotspot[" + c + "]").loadstyle(toAddHotSpot.style+=$("input[name='radiogroup']:checked").val()+$("input[name='radiosize']:checked").val()+$("input[name='radioview']:checked").val());
	}
	krpano.set("hotspot[" + c + "].dive", toAddHotSpot.dive);
	krpano.get("hotspot[" + c + "]").loadstyle(toAddHotSpot.style);
	hotSpotInitEvent(c);
	updateHotSpotData();
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
	hideAddHotSpot();
	$("span[data-target=#toolHot]").click()
}

function selectHotSpot() {
	krpano.call("screentosphere(mouse.x, mouse.y, mouseath, mouseatv);");
	var a = {};
	krpano.get("hotspot").getArray().forEach(function(b) {
		var c = krpano.get("hotspot[" + b.name + "]").ath - krpano.get("mouseath"),
			e = krpano.get("hotspot[" + b.name + "]").atv - krpano.get("mouseatv"),
			d = Math.abs(c) + Math.abs(e);
		null == a.name ? a = {
			name: b.name,
			athDis: c,
			atvDis: e,
			dis: d
		} : d < a.dis && (a = {
			name: b.name,
			athDis: c,
			atvDis: e,
			dis: d
		})
	});
	return a
}

function hotSpotInitEvent(a) {
	krpano.get("hotspot[" + a + "]").ondown = function() {
		movingSpot = selectHotSpot();
		var a = setInterval(autoMove, 1E3 / 30);
		krpano.set("autoMoveIntervalId", a);
		canShowLeft = !1
	};
	krpano.get("hotspot[" + a + "]").onup = function() {
		window.clearInterval(krpano.get("autoMoveIntervalId"));
		movingSpot = {};
		updateHotSpotData();
		canShowLeft = !0;
        $("#isEdited").text('未 保 存');
        $("#isEdited").css('background-color','red');
	};
	krpano.get("hotspot[" + a + "]").onclick = null;
	krpano.get("hotspot[" + a + "]").onover = function() {
		if (movingSpot == {}) {
			var a = selectHotSpot();
			$("[name=" + a.name + "Hover]").addClass("hot-spot-list-hover")
		}
	};
	krpano.get("hotspot[" + a + "]").onout = function() {
		$(".hot-spot-list").removeClass("hot-spot-list-hover")
	}
}

function removeHotSpot(a) {
	if (krpano.get("hotspot[" + a + "]").style.indexOf("hotspot_url") < 0) {
		krpano.call("removehotspot(tooltip_" + a + ")");
	} else {
		krpano.call("removeplugin(tooltip_" + a + ",true)");
	}
	krpano.call("removehotspot(" + a + ")");
	updateHotSpotData();
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
};

function showEditPanel(btnselect,select) {
	window.clearInterval(moveIntervalId);
	$(".add-hot-pot").hide();
	
	$('.J-tool-btn').not(btnselect).removeClass("btn-blue");
	$('.editGroup').not(select).hide(300);
	
	$(btnselect).toggleClass("btn-blue");
	$(select).toggle(300);
};

function showMap() {
	  var map = new GMaps({
	        div: "#google_map",//id名
	        lat: sceneList[currentSceneIndex].lat,//緯度
	        lng: sceneList[currentSceneIndex].lng,//経度
	        zoom: 15//縮尺
	  });

    map.addMarker({
      lat: sceneList[currentSceneIndex].lat,
      lng: sceneList[currentSceneIndex].lng
    });
	  $('#geocoding_form').submit(function(e){
	    e.preventDefault();
	    GMaps.geocode({
	      address: $('#address').val().trim(),
	      callback: function(results, status){
	        if(status=='OK'){
	          var latlng = results[0].geometry.location;
	          map.setCenter(latlng.lat(), latlng.lng());
	          map.removeMarkers();
	          map.addMarker({
	            lat: latlng.lat(),
	            lng: latlng.lng()
	          });
          		sceneList[currentSceneIndex].lat = latlng.lat();
	    		sceneList[currentSceneIndex].lng = latlng.lng();
                $("#isEdited").text('未 保 存');
                $("#isEdited").css('background-color','red');
	        }
	      }
	    });
	  });
};

function mapForAll(){
	sceneList.forEach(function(a) {
		a.lat=sceneList[currentSceneIndex].lat;
		a.lng=sceneList[currentSceneIndex].lng;
	});
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
}

function setDirection(){
	sceneList[currentSceneIndex].heading=-krpano.get("view").hlookat;
	//console.log(-krpano.get("view").hlookat);
	//console.log(krpano.get("view.hlookat"));
    $("#isEdited").text('未 保 存');
    $("#isEdited").css('background-color','red');
}

function showMessage(){
	$(".messagepanel").show();
	window.setTimeout(refresh,4000);
}

function showScencePanel(){
	if(canShowLeft){
		canShowLeft=0;
		$('#scenceBtn').addClass("btn-blue");
		$(".left-column").css("-webkit-animation", "showLeft 0.8s infinite").css("-webkit-animation-iteration-count", "1").css("left", "0");

	}else{
		canShowLeft=1;
		$('#scenceBtn').removeClass("btn-blue");
		$(".left-column").css("-webkit-animation", "hideLeft 0.8s infinite").css("-webkit-animation-iteration-count", "1").css("left", "-250px");
	}
}

function refresh(){
	location.reload();
}