document.oncontextmenu = function(){return false};
currentdate = new Date();
var year = currentdate.getFullYear();
var yxzy = "";
var zyxh = "";
function showToday(){
	var weekdayindex = currentdate.getDay();
	var week = new Array("日", "一", "二", "三", "四", "五", "六");
	with(currentdate){
		str = getFullYear() + "年" + (getMonth() + 1) + "月" + getDate() + "日 星期" + week[weekdayindex];
	}
	document.write(str);
}
function validate(){
	for (var i = 0; i < document.form1.elements.length - 1; i++) {
		if (document.form1.elements[i].value == "") {
			alert("当前表单不能有空项");
			document.form1.elements[i].focus();
			return false;
		}
		return true;
	}
}
function urlClick(url){$("#content").attr("src",url);}
function doLogout(url){top.location.href=url+'?t='+Math.random();}

function getGkcjkItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		createGkcjcxTitleTable(json[0],title);
	}
}

/**
 *  民族试卷考生高考成绩表
 */
function getMysjksGkcjItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		createMysjksGkcjTable(json[0],title);
	}
}

function getGklqkItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		createGklqcxTable(json[0],title);
	}
}
function getYsxkbakItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		createTitleTable(json[0],title);
		createYsxkbakResult(json);
	}
}
function getYstytkcxItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		createTitleTable(json[0],title);
		createYstytkcjResult(json[0].tkkmcjs);
	}
}

function getYstytkzhcjcxItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		createTitleTable(json[0],title);
		createYstytkzhcjResult(json[0].tkkmcjs);
	}
}



function getCzcjkItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		var t = document.createElement('table');
		t.setAttribute('border','0');
		t.setAttribute('cellpadding','0');
		t.setAttribute('cellspacing','0');
		t.setAttribute('width','100%');
		json = json[0];
		//t.setAttribute('style','margin:20px 0;');
		var xm = json.xm;
		var ksh = json.ksh;
		var r = t.insertRow();
		var c = r.insertCell();c.className='t';c.width='100%';c.colSpan=2;
		c.innerHTML = title+'结果';
		r = t.insertRow();c = r.insertCell();
		r.setAttribute('bgcolor','#FFFFEE');
		c.style.paddingLeft='100px';c.height='50px'; c.className='STYLE6';c.width='50%';
		c.innerHTML = "考生号："+json.ksh;
		c = r.insertCell();
		c.style.paddingLeft='10px';c.className='STYLE6';
		c.innerHTML = "姓 名："+json.xm;
		
		r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
		c = r.insertCell();c.colSpan = 2;
		c.style.paddingLeft='100px';c.height='50px'; c.className='STYLE6';
		c.innerHTML = "报考科类："+json.bkkl;
		$('#loginplan').append(t);
		
		t = document.createElement('table');t.setAttribute('width','100%');
		t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
		r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML="总分";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = json.km1;c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = json.km2;c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML =json.km3;c.style.width='20%';c.align='center';
		var kmmc = json.km4;
		if(kmmc!=null && kmmc!='' && kmmc!='null'){
			c = r.insertCell();c.className='tableheader';c.innerHTML = kmmc;c.style.width='20%';c.align='center';
		}
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zf;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.cj1;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.cj2;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.cj3;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		if(kmmc!=null && kmmc!='' && kmmc!='null'){
			c = r.insertCell();c.className='tableheader';c.innerHTML = json.cj4;c.style.width='20%';c.align='center';
		}
		$('#loginplan').append(t);
	}
}
function getCzlqkItem(json,title){
	$("#loginplan").empty();
	if(json.length>0){
		json = json[0];
		
		var t = document.createElement('table');
		t.setAttribute('border','0');
		t.setAttribute('cellpadding','0');
		t.setAttribute('cellspacing','0');
		t.setAttribute('width','100%');
		
		var r = t.insertRow();
		var c = r.insertCell();c.className='t';c.width='100%';c.colSpan=4;c.innerHTML = title+'结果';
		r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
		c = r.insertCell();c.align='right';c.height='50px'; c.className='STYLE6';c.width='20%';c.innerHTML = "考生号：";
		c = r.insertCell();c.style.paddingLeft='10px';c.height='50px'; c.className='STYLE6';c.width='30%';c.innerHTML = json.ksh;
		c = r.insertCell();c.align='right';c.height='50px'; c.className='STYLE6';c.width='20%';c.innerHTML = "姓&nbsp;&nbsp;&nbsp;&nbsp;名：";
		c = r.insertCell();c.style.paddingLeft='10px';c.height='50px'; c.className='STYLE6';c.width='30%';c.innerHTML = json.xm;
		
		r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
		c = r.insertCell();c.align='right';c.height='50px'; c.className='STYLE6';c.width='20%';c.innerHTML = "录取学校：";
		c = r.insertCell();c.style.paddingLeft='10px';c.height='50px'; c.className='STYLE6';c.colSpan=3;c.innerHTML = json.yxmc;
		
		r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
		c = r.insertCell();c.align='right';c.height='50px'; c.className='STYLE6';c.width='20%';c.innerHTML = "录取专业：";
		c = r.insertCell();c.style.paddingLeft='10px';c.height='50px'; c.className='STYLE6';c.colSpan=3;c.innerHTML = json.zymc;
		
		r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
		c = r.insertCell();c.align='right';c.height='50px'; c.className='STYLE6';c.width='20%';c.innerHTML = "层&nbsp;&nbsp;&nbsp;&nbsp;次：";
		c = r.insertCell();c.style.paddingLeft='10px';c.height='50px'; c.className='STYLE6';c.width='30%';c.innerHTML = json.ccmc;
		c = r.insertCell();c.align='right';c.height='50px'; c.className='STYLE6';c.width='20%';c.innerHTML = "学习形式：";
		c = r.insertCell();c.style.paddingLeft='10px';c.height='50px'; c.className='STYLE6';c.width='30%';c.innerHTML = json.xxxsmc;
		$('#loginplan').append(t);
	}
}
function createTitleTable(json,title) {
	var t = document.createElement('table');
	t.setAttribute('border','0');
	t.setAttribute('cellpadding','0');
	t.setAttribute('cellspacing','0');
	t.setAttribute('width','100%');
	//t.setAttribute('style','margin:20px 0;');
	var xm = json.xm;
	var ksh = json.ksh;
	var r = t.insertRow();
	var c = r.insertCell();c.className='t';c.width='100%';c.colSpan=2;
	c.innerHTML = title+'结果';
	r = t.insertRow();c = r.insertCell();
	r.setAttribute('bgcolor','#FFFFEE');
	c.style.paddingLeft='100px';c.height='50px'; c.className='STYLE6';c.width='50%';
	c.innerHTML = "考生号："+json.ksh;
	c = r.insertCell();
	c.style.paddingLeft='10px';c.className='STYLE6';
	c.innerHTML = "姓 名："+json.xm;
	$('#loginplan').append(t);
}
function createGklqcxTable(json,title) {
	var t = document.createElement('table');t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
	t.setAttribute('width','100%');
	//t.setAttribute('style','margin:20px 0;');
	var xm = json.xm;
	var ksh = json.ksh;
	var r = t.insertRow();
	var c = r.insertCell();c.className='t';c.width='100%';c.colSpan=2;c.innerHTML = title+'结果';
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.height='40px'; c.className='STYLE6';c.width='50%';c.innerHTML = "考生号："+json.ksh;
	c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE6';c.innerHTML = "姓 名："+json.xm;
	
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.height='40px'; c.className='STYLE6';c.colSpan=2;c.innerHTML = "录取状态："+json.ksztmc;
	$('#loginplan').append(t);
	
	t = document.createElement('table');t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
	t.setAttribute('width','100%');
	r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');r.setAttribute('height','30px');
	c = r.insertCell();c.className='STYLE1';c.innerHTML="录取院校：";c.align='right';c.style.paddingRight='10px';c.width='200px';c.setAttribute('style','border-bottom:#EEE 1px solid;');
	c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yxdh+"&nbsp;"+json.yxmc;c.align='left';c.style.paddingLeft='10px';c.setAttribute('style','border-bottom:#EEE 1px solid;');
	r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');r.setAttribute('height','30px');
	c = r.insertCell();c.className='STYLE1';c.innerHTML="录取专业：";c.align='right';c.style.paddingRight='10px';c.setAttribute('style','border-bottom:#EEE 1px solid;');
	c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zydh+"&nbsp;"+json.zymc;c.setAttribute('style','border-bottom:#EEE 1px solid;text-alin:left;padding-right:10px;');
	r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');r.setAttribute('height','30px');
	c = r.insertCell();c.className='STYLE1';c.innerHTML="录取批次：";c.align='right';c.style.paddingRight='10px';c.setAttribute('style','border-bottom:#EEE 1px solid;');
	c = r.insertCell();c.className='STYLE1';c.innerHTML=json.pcdm+"段&nbsp;"+json.pcmc;c.setAttribute('style','border-bottom:#EEE 1px solid;text-alin:left;padding-right:10px;');
	
	$('#loginplan').append(t);
}
function createGkcjcxTitleTable(json,title) {
	var xm = json.xm;
	var ksh = json.ksh;
	//var zkzh = json.zkzh;
	var kslx = ksh.substr(8,1);
	var mzsjdm = json.mzsjdm;
	var t = document.createElement('table');
	t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');t.setAttribute('width','100%');
	var r = t.insertRow();
	var c = r.insertCell();c.className='t';c.width='100%';c.colSpan=2;c.innerHTML = title+'结果';
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.className='STYLE6';c.width='50%';c.innerHTML = "考&nbsp;生&nbsp;号："+ksh;
	c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE6';c.innerHTML = "姓&nbsp;&nbsp;&nbsp;&nbsp;名："+xm;
	/*
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.colSpan=2;c.style.paddingLeft='100px';c.className='STYLE6';c.width='50%';c.innerHTML="准考证号："+zkzh;
	*/
	
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.className='STYLE6';c.innerHTML = "总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分："+json.zf;
	c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE6';c.innerHTML = "排&nbsp;&nbsp;&nbsp;&nbsp;名："+json.mc;
	$('#loginplan').append(t);
	
	t = document.createElement('table');t.setAttribute('width','100%');
	t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
	if(mzsjdm=='0'){//民考汉
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML="语文";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "数学";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "综合";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "英语";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "加试藏语文";c.style.width='20%';c.align='center';
		
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.wy;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		
		r = t.insertRow();c = r.insertCell();
		c.style.paddingTop='10px';c.style.paddingLeft='100px';c.className='STYLE11';c.height='35px';c.align='left';
		c.colSpan= 5;c.innerHTML = '备注：英语 = 英语卷面成绩×1.25';
	}else if(mzsjdm=='2'){//蒙文答卷
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML = "汉语";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "蒙数学";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "蒙综合";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML="蒙语文";c.style.width='25%';c.align='center';
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
	}else if(mzsjdm=='3'){//哈文答卷
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML = "汉语";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "哈数学";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "哈综合";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML="哈语文";c.style.width='25%';c.align='center';
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
	}else if(mzsjdm=='1'){////藏族民考民
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML = "汉语";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "藏数学";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "藏综合";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "英语";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML="藏语文";c.style.width='20%';c.align='center';
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.wy;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		r = t.insertRow();c = r.insertCell();
		c.style.paddingTop='10px';c.style.paddingLeft='100px';c.className='STYLE11';c.height='35px';c.align='left';
		c.colSpan= 5;c.innerHTML = '备注：英语 = 英语卷面成绩×1.25';
	}else{
		if(kslx=='1'){
			var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
			var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML="语文";c.style.width='25%';c.align='center';
			c = r.insertCell();c.className='tableheader';c.innerHTML = "数学";c.style.width='25%';c.align='center';
			c = r.insertCell();c.className='tableheader';c.innerHTML = "综合";c.style.width='25%';c.align='center';
			c = r.insertCell();c.className='tableheader';c.innerHTML = "外语";c.style.width='25%';c.align='center';
			r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
			c = r.insertCell();c.height='35px';c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
			c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
			c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
			c = r.insertCell();c.className='STYLE1';c.innerHTML=json.wy;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
			r = t.insertRow();c = r.insertCell();
			c.style.paddingTop='10px';c.style.paddingLeft='100px';c.className='STYLE11';c.height='35px';c.align='left';
			c.colSpan= 4;c.innerHTML = '备注：外语 = 外语卷面成绩×1.25';
		}
	}
	$('#loginplan').append(t);
}

function createMysjksGkcjTable(json,title) {
	var xm = json.xm;
	var ksh = json.ksh;
	var zkzh = json.zkzh;
	var kslx = ksh.substr(8,1);
	var mzsjdm = json.mzsjdm;
	var t = document.createElement('table');t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');t.setAttribute('width','100%');
	var r = t.insertRow();
	var c = r.insertCell();c.className='t';c.width='100%';c.colSpan=2;c.innerHTML = title+'结果';
	
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.className='STYLE6';c.width='50%';c.innerHTML = "考&nbsp;生&nbsp;&nbsp;号："+ksh;
	c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE6';c.innerHTML = "姓&nbsp;&nbsp;&nbsp;&nbsp;名："+xm;
	
	/*
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.className='STYLE6';c.width='50%';c.innerHTML = "准考证号："+zkzh;
	c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE6';
	var klmc = json.kldm=='1'?'理科':'文史';c.innerHTML = "科&nbsp;&nbsp;&nbsp;&nbsp;类："+ klmc;
	*/
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.className='STYLE6';c.innerHTML = "普通类总分："+json.zf;
	c = r.insertCell();c.style.paddingLeft='10px'; c.className='STYLE6'; c.innerHTML = "普通类排名："+json.mc;
	/**
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.colSpan='2';c.style.paddingLeft='100px';c.height='35px';c.className='STYLE6';c.width='50%';c.innerHTML="试卷类型："+json.mzsjmc;
	**/
	r = t.insertRow();r.setAttribute('bgcolor','#FFFFEE');
	c = r.insertCell();c.style.paddingLeft='100px';c.className='STYLE6';c.innerHTML = "民语类总分："+json.myzf;
	c = r.insertCell();c.style.paddingLeft='10px'; c.className='STYLE6'; c.innerHTML = "民语类排名："+json.mc2;

	$('#loginplan').append(t);
	t = document.createElement('table');t.setAttribute('width','100%');
	t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
	if(mzsjdm=='0'){//民考汉
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML="语文";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "数学";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "综合";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "英语";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "加试藏语文";c.style.width='20%';c.align='center';
		
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.wy;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		
		r = t.insertRow();c = r.insertCell();
		c.style.paddingTop='10px';c.style.paddingLeft='100px';c.className='STYLE11';c.height='35px';c.align='left';
		c.colSpan= 5;c.innerHTML = '备注：英语 = 英语卷面成绩×1.25';
	}else if(mzsjdm=='2'){//蒙文答卷
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML = "汉语";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "蒙数学";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "蒙综合";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML="蒙语文";c.style.width='25%';c.align='center';
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
	}else if(mzsjdm=='3'){//哈文答卷
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML = "汉语";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "哈数学";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "哈综合";c.style.width='25%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML="哈语文";c.style.width='25%';c.align='center';
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
	}else if(mzsjdm=='1'){////藏族民考民
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.height='35px'; c.className='tableheader';c.innerHTML = "汉语";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "藏数学";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "藏综合";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML = "英语";c.style.width='20%';c.align='center';
		c = r.insertCell();c.className='tableheader';c.innerHTML="藏语文";c.style.width='20%';c.align='center';
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.yw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.sx;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.zh;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.wy;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json.jsyw;c.setAttribute('style','border-bottom:#EEE 1px solid;text-align:center;');
		r = t.insertRow();c = r.insertCell();
		c.style.paddingTop='10px';c.style.paddingLeft='100px';c.className='STYLE11';c.height='35px';c.align='left';
		c.colSpan= 5;c.innerHTML = '备注：英语 = 英语卷面成绩×1.25';
	}
	$('#loginplan').append(t);
}

function createYsxkbakResult(json) {
	var t = document.createElement('table');t.setAttribute('width','100%');
	t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
	var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
	var c = r.insertCell();c.height='30px'; c.className='tableheader';c.innerHTML="考试院校";c.style.width='30%';c.style.paddingLeft='15px';
	c = r.insertCell();c.className='tableheader';c.innerHTML = "专业名称";c.style.width='50%';
	//c = r.insertCell();c.className='tableheader';c.innerHTML = "考试科目";c.style.width='30%';
	c = r.insertCell();c.className='tableheader';c.innerHTML = "成绩";c.style.width='10%';
	c = r.insertCell();c.className='tableheader';c.innerHTML = "排名";c.style.width='10%';
	for(var k=0;k<json.length;k++){
		r = t.insertRow();r.setAttribute('bgcolor','#FEFEFE');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json[k].yxmc;c.style='border-bottom:#EEE 1px solid;padding-left:10px;';r.setAttribute('style','border-bottom:#EEE 1px solid;padding-left:10px;');
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json[k].zymc;c.style='border-bottom:#EEE 1px solid;';
		//c = r.insertCell();c.className='STYLE1';c.innerHTML=json[k].yxkskm;c.style='border-bottom:#EEE 1px solid;';
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json[k].yxskcsf;c.style='border-bottom:#EEE 1px solid;text-align:center;';
		c = r.insertCell();c.className='STYLE1';c.innerHTML=json[k].yxzymc;c.style='border-bottom:#EEE 1px solid;text-align:center;';
	}
	/*
	r = t.insertRow();c = r.insertCell();
	c.style.paddingTop='10px';c.style.paddingLeft='20px';c.className='STYLE11';c.height='35px';c.align='left';c.colSpan = '5';
	c.innerHTML = '备注：总分为所有考试科目成绩相加后小数点四舍五入！';
	*/
	$('#loginplan').append(t);
}

function createYstytkcjResult(json){
	for(var k=0;k<json.length;k++){
		var t = document.createElement('table');t.setAttribute('width','100%');
		t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
		var tklbdm = json[k].tklbdm;
		tklbdm = tklbdm.toUpperCase();
		var tklbmc = json[k].tklbmc;
		var zf = json[k].zf;
		var pm = json[k].pm;
		var tkhg = json[k].tkhg;
		var tkkmcj = json[k].tkkmcj;
		var kms = 1;
		if(tkkmcj!=null) kms = tkkmcj.length;
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.style.paddingLeft='100px';c.height='30px';c.className='STYLE1';c.innerHTML="统考类别："+tklbmc;
		if(kms>1) c.colSpan = kms - 1;
		if(tklbdm!='T'){
			c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE1';c.innerHTML = "总分："+zf;
		}else if(tklbdm=='T'){
			c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE1';c.innerHTML = "综合成绩："+zf;
		}
		
		r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		c = r.insertCell();c.style.paddingLeft='100px';c.height='30px';c.className='STYLE1';
		if(tklbdm!='T'){
			if(pm==null || pm=='0' || pm=='null'){
				c.innerHTML = "排名：&nbsp;";
			}else{
				c.innerHTML = "排名："+pm;
			}
		}else if(tklbdm=='T'){
			if(pm==null || pm=='0' || pm=='null'){
				c.innerHTML = "综合排名：&nbsp;";
			}else{
				c.innerHTML = "综合排名："+pm;
			}
		}
		c = r.insertCell(); if(kms>1) c.colSpan = kms - 1;
		
		/*if(tklbdm=='D' || tklbdm=='J' || tklbdm=='P'){
			c.style.paddingLeft='10px';c.className='STYLE1';
			c.innerHTML = tkhg=='1'?'合格标志：统考合格':'';
		}else if(tklbdm=='T'){
			c.style.paddingLeft='10px';c.className='STYLE1';c.innerHTML = "&nbsp;";
		}else{
			c.style.paddingLeft='10px';c.className='STYLE1';
			c.innerHTML = "&nbsp;";
		}20200116*/
		
		c.style.paddingLeft='10px';c.className='STYLE1';
		c.innerHTML = tkhg=='1'?'合格标志：统考合格':'';		
		
		$('#loginplan').append(t);
		
		t = document.createElement('table');t.setAttribute('width','100%');t.setAttribute('style','margin:10px 0;');
		t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
		var colwidth = Math.floor(100/kms);
		//if(tklbdm!='T' && tklbdm!='I'){
		if(tklbdm!='I'){
			r = t.insertRow();
			for (var i = 0;i<kms;i++) {
				var c = r.insertCell();c.className='tableheader';c.height='30px';c.align='center';c.width=colwidth;
				c.innerHTML = tkkmcj[i].tkkmmc;
			}
			r = t.insertRow();
			for (var i = 0;i<kms;i++) {
				var c = r.insertCell();c.className='STYLE6';c.height='30px';c.align='center';
				c.innerHTML = tkkmcj[i].tkkmcj;
			}
		}
		r = t.insertRow();c = r.insertCell();
		c.style.paddingTop='10px';c.style.paddingLeft='100px';c.className='STYLE11';c.height='35px';c.align='left';
		c.colSpan= kms;
		if(tklbdm!='T'){
			c.innerHTML = '备注：总分为所有考试科目成绩相加后小数点四舍五入！';
		}else{
			c.innerHTML = '备注：总分为所有考试科目成绩相加后小数点四舍五入，排名按文理科单独排名！';
		}
		$('#loginplan').append(t);
	}
}


function createYstytkzhcjResult(json){
	for(var k=0;k<json.length;k++){
		var t = document.createElement('table');t.setAttribute('width','100%');
		t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
		var tklbdm = json[k].tklbdm;
		tklbdm = tklbdm.toUpperCase();
		var tklbmc = json[k].tklbmc;
		var zf = json[k].zf;
		var pm = json[k].pm;
		var tkhg = json[k].tkhg;
		var tkkmcj = json[k].tkkmcj;
		var kms = 1;
		if(tkkmcj!=null) kms = tkkmcj.length;
		var r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		var c = r.insertCell();c.style.paddingLeft='100px';c.height='30px';c.className='STYLE1';c.innerHTML="统考类别："+tklbmc;
		if(kms>1) c.colSpan = kms - 1;
		if(tklbdm!='T'){
			c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE1';c.innerHTML = "总分："+zf;
		}else if(tklbdm=='T'){
			c = r.insertCell();c.style.paddingLeft='10px';c.className='STYLE1';c.innerHTML = "综合成绩："+zf;
		}
		
		r = t.insertRow();r.setAttribute('bgcolor','#EEEEEE');
		c = r.insertCell();c.style.paddingLeft='100px';c.height='30px';c.className='STYLE1';
		if(tklbdm!='T'){
			if(pm==null || pm=='0' || pm=='null'){
				c.innerHTML = "排名：&nbsp;";
			}else{
				c.innerHTML = "排名："+pm;
			}
		}else if(tklbdm=='T'){
			if(pm==null || pm=='0' || pm=='null'){
				c.innerHTML = "综合排名：&nbsp;";
			}else{
				c.innerHTML = "综合排名："+pm;
			}
		}
		
		
		c = r.insertCell(); if(kms>1) c.colSpan = kms - 1;
		
		/*if(tklbdm=='D' || tklbdm=='J' || tklbdm=='P'){
			c.style.paddingLeft='10px';c.className='STYLE1';
			c.innerHTML = tkhg=='1'?'合格标志：统考合格':'';
		}else if(tklbdm=='T'){
			c.style.paddingLeft='10px';c.className='STYLE1';c.innerHTML = "&nbsp;";
		}else{
			c.style.paddingLeft='10px';c.className='STYLE1';
			c.innerHTML = "&nbsp;";
		}20200116wl*/
		
		c.style.paddingLeft='10px';c.className='STYLE1';
		c.innerHTML = tkhg=='1'?'合格标志：统考合格':'';		
		
		r = t.insertRow();r.setAttribute('bgcolor','#DDD');
		c = r.insertCell();c.style.paddingLeft='100px';c.height='40px';c.className='STYLE2';
		c.innerHTML = "综合成绩："+json[k].zhcj;
		
		c = r.insertCell(); if(kms>1) c.colSpan = kms - 1;c.style.paddingLeft='10px';c.className='STYLE2';
		c.innerHTML = "综合排名："+json[k].zhpm;
		
		
		$('#loginplan').append(t);
		
		t = document.createElement('table');t.setAttribute('width','100%');t.setAttribute('style','margin:10px 0;');
		t.setAttribute('border','0');t.setAttribute('cellpadding','0');t.setAttribute('cellspacing','0');
		var colwidth = Math.floor(100/kms);
		//if(tklbdm!='T' && tklbdm!='I'){
		if(tklbdm!='I'){
			r = t.insertRow();
			for (var i = 0;i<kms;i++) {
				var c = r.insertCell();c.className='tableheader';c.height='30px';c.align='center';c.width=colwidth;
				c.innerHTML = tkkmcj[i].tkkmmc;
			}
			r = t.insertRow();
			for (var i = 0;i<kms;i++) {
				var c = r.insertCell();c.className='STYLE6';c.height='30px';c.align='center';
				c.innerHTML = tkkmcj[i].tkkmcj;
			}
		}
		r = t.insertRow();c = r.insertCell();
		c.style.paddingTop='10px';c.style.paddingLeft='100px';c.className='STYLE11';c.height='35px';c.align='left';
		c.colSpan= kms;
		if(tklbdm!='T'){
			c.innerHTML = '备注：总分为所有考试科目成绩相加后小数点四舍五入！';
		}else{
			c.innerHTML = '备注：总分为所有考试科目成绩相加后小数点四舍五入，排名按文理科单独排名！';
		}
		$('#loginplan').append(t);
	}
}


function doExit(){
	window.location.href='/logout.jsp';
}
function CloseWebPage(){
	if (navigator.userAgent.indexOf("MSIE") > 0) {
		if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
			window.opener = null;
			window.close();
		} else {
			window.open('', '_top');
			window.top.close();
		}
	}else if (navigator.userAgent.indexOf("Firefox") > 0) {
		window.location.href = 'about:blank ';
	} else {
		window.opener = null;
		window.open('', '_self', '');
		window.close();
	}
}

function  GetWaterMarked(targetObj,jpgUrl,targetStr ) {
		var windowobj=targetObj;
		var waterMarkPicUrl=jpgUrl;
		var controlWindowStr=targetStr;
		if(windowobj.document.getElementById("waterMark") != null)
			return;
		var m = "waterMark";
		var newMark = windowobj.document.createElement("div");
		newMark.id = m;
		newMark.style.position = "absolute";
		newMark.style.zIndex = "9627";
		newMark.style.top = "0px";
		newMark.style.left = "0px";
		newMark.style.width = windowobj.document.body.clientWidth;

		if( parseInt(windowobj.document.body.scrollHeight) > parseInt(windowobj.document.body.clientHeight) )
		{
			newMark.style.height = windowobj.document.body.scrollHeight;
		}else
		{
			newMark.style.height = windowobj.document.body.clientHeight;
		}
		newMark.style.backgroundImage = "url("+ waterMarkPicUrl +")";
		newMark.style.filter = "alpha(opacity=50)";
		windowobj.document.body.appendChild(newMark);

			var markStr = "var sobj ="+controlWindowStr+".document.getElementById('waterMark');sobj.style.width ="+controlWindowStr+".document.body.clientWidth;sobj.style.height ="+controlWindowStr+".document.body.clientHeight;";
		if(windowobj.document.body.onresize != null)
		{
			var oldResiae = windowobj.document.body.onresize.toString();
		 	var oldResiaeStr = oldResiae.substr(oldResiae.indexOf("{")+1);
		 	var oldResiaeStr= oldResiaeStr.substr(0,oldResiaeStr.lastIndexOf("}"));
		 	oldResiaeStr+=";"+markStr;
		 	windowobj.document.body.onresize = new Function(oldResiaeStr);
		}
		else
		{
			windowobj.document.body.onresize = new Function(markStr);
		}
 }