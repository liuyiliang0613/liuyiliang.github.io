(function($){
	// 验证规则
	
	$.fn.validationEngineLanguage = function(){};
	$.validationEngineLanguage = {
		newLang:function(){
			$.validationEngineLanguage.allRules = {
				"required":{ // Add your regex rules here, you can take telephone as an example
					"regex":"none",
					"alertText":"* 此处不可空白",
					"alertTextCheckboxMultiple":"* 请选择一个项目",
					"alertTextCheckboxe":"* 该选项为必选",
					"alertTextDateRange":"* 日期范围不可空白"
				},
				"dateRange":{
					"regex":"none",
					"alertText":"* 无效的 ",
					"alertText2":" 日期范围"
				},
				"dateTimeRange":{
					"regex":"none",
					"alertText":"* 无效的 ",
					"alertText2":" 时间范围"
				},
				"minSize":{
					"regex":"none",
					"alertText":"* 最少 ",
					"alertText2":" 个字符"
				},
				"maxSize":{
					"regex":"none",
					"alertText":"* 最多 ",
					"alertText2":" 个字符"
				},
				"groupRequired":{
					"regex":"none",
					"alertText":"* 至少填写其中一项"
				},
				"min":{
					"regex":"none",
					"alertText":"* 最小值为 "
				},
				"max":{
					"regex":"none",
					"alertText":"* 最大值为 "
				},
				"past":{
					"regex":"none",
					"alertText":"* 日期需在 ",
					"alertText2":" 之前"
				},
				"future":{
					"regex":"none",
					"alertText":"* 日期需在 ",
					"alertText2":" 之后"
				},	
				"maxCheckbox":{
					"regex":"none",
					"alertText":"* 最多选择 ",
					"alertText2":" 个项目"
				},
				"minCheckbox":{
					"regex":"none",
					"alertText":"* 最少选择 ",
					"alertText2":" 个项目"
				},
				"equals":{
					"regex":"none",
					"alertText":"* 两次输入的密码不一致"
				},
                "creditCard": {
                    "regex": "none",
                    "alertText": "* 无效的信用卡号码"
                },
				"phone":{
					// credit:jquery.h5validate.js / orefalo
					"regex":/^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
					"alertText":"* 无效的电话号码"
				},
				"email":{
					// Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
					"regex":/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
					"alertText":"* 无效的邮件地址"
				},
				"integer":{
					"regex":/^[\-\+]?\d+$/,
					"alertText":"* 无效的整数"
				},
				"number":{
					// Number, including positive, negative, and floating decimal. credit:orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
					"alertText":"* 无效的数值"
				},
				"date":{
					"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
					"alertText":"* 无效的日期，格式必需为 YYYY-MM-DD"
				},
				"ipv4":{
					"regex":/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
					"alertText":"* 无效的 IP 地址"
				},
				"url":{
					"regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
					"alertText":"* 无效的网址"
				},
				"onlyNumberSp":{
					"regex":/^[0-9\ ]+$/,
					"alertText":"* 只能填写数字"
				},
				"onlyLetterSp":{
					"regex":/^[a-zA-Z\ \']+$/,
					"alertText":"* 只能填写英文字母"
				},
				"onlyLetterNumber":{
					"regex":/^[0-9a-zA-Z]+$/,
					"alertText":"* 只能填写数字与英文字母"
				},
				//tls warning:homegrown not fielded 
				"dateFormat":{
					"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
					"alertText":"* 无效的日期格式"
				},
				//tls warning:homegrown not fielded 
				"dateTimeFormat":{
					"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
					"alertText":"* 无效的日期或时间格式",
					"alertText2":"可接受的格式： ",
					"alertText3":"mm/dd/yyyy hh:mm:ss AM|PM 或 ", 
					"alertText4":"yyyy-mm-dd hh:mm:ss AM|PM"
				},
				
				/**
				 * 正则验证规则补充
				 * Author: ciaoca@gmail.com
				 * Date: 2013-10-12
				 */
				"chinese":{
					"regex":/^[\u4E00-\u9FA5]+$/,
					"alertText":"* 只能填写中文汉字"
				},
				"chinaId":{
					/**
					 * 2013年1月1日起第一代身份证已停用，此处仅验证 18 位的身份证号码
					 * 如需兼容 15 位的身份证号码，请使用宽松的 chinaIdLoose 规则
					 * /^[1-9]\d{5}[1-9]\d{3}(
					 * 	(
					 * 		(0[13578]|1[02])
					 * 		(0[1-9]|[12]\d|3[01])
					 * 	)|(
					 * 		(0[469]|11)
					 * 		(0[1-9]|[12]\d|30)
					 * 	)|(
					 * 		02
					 * 		(0[1-9]|[12]\d)
					 * 	)
					 * )(\d{4}|\d{3}[xX])$/i
					 */
					"regex":/^[1-9]\d{5}[1-9]\d{3}(((0[13578]|1[02])(0[1-9]|[12]\d|3[0-1]))|((0[469]|11)(0[1-9]|[12]\d|30))|(02(0[1-9]|[12]\d)))(\d{4}|\d{3}[xX])$/,
					"alertText":"无效的身份证号码"
				},
				"chinaIdLoose":{
					"regex":/^(\d{18}|\d{15}|\d{17}[xX])$/,
					"alertText":"* 无效的身份证号码"
				},
				"chinaZip":{
					"regex":/^\d{6}$/,
					"alertText":"* 无效的邮政编码"
				},
				"qq":{
					"regex":/^[1-9]\d{4,10}$/,
					"alertText":"* 无效的 QQ 号码"
				},
				/*
				'loginCheck': { 
					'url': '/loginCheck',
					"extraData": "dt="+(new Date()).getTime(),
					'alertTextOk': '验证通过时的提示信息', 
					'alertText': '验证不通过时的提示信息'
				},
				*/
				"checkUsername": {
					"alertText": "* 考生号格式错误！"
				},
				"verifyIdentityCode":{
					"alertText": "* 身份证号码格式错误！"
				}
				/**
				 * 自定义公用提示信息：
				 * 外部通过 $.validationEngineLanguage.allRules.validate2fields.alertText 可获取
				 *
				 * 	"validate2fields": {
				 * 		"alertText": "* 请输入 HELLO"
				 *	 },
				 * 	
				 *
				 * 自定义规则示例：
				 * 	"requiredInFunction": { 
				 * 		"func": function(field,rules,i,options){
				 * 			return (field.val()=="test") ? true : false;
				 * 		},
				 * 		"alertText": "* Field must equal test"
				 * 	},
				 *
				 *
				 * Ajax PHP 验证示例
				 * 	"ajaxUserCallPhp": {
				 * 		"url": "phpajax/ajaxValidateFieldUser.php",
				 * 		// you may want to pass extra data on the ajax call
				 * 		"extraData": "name=eric",
				 * 		// if you provide an "alertTextOk", it will show as a green prompt when the field validates
				 * 		"alertTextOk": "* 此帐号名称可以使用",
				 * 		"alertText": "* 此名称已被其他人使用",
				 * 		"alertTextLoad": "* 正在确认帐号名称是否有其他人使用，请稍等。"
				 * 	},
				 * 	"ajaxNameCallPhp": {
				 * 		// remote json service location
				 * 		"url": "phpajax/ajaxValidateFieldName.php",
				 * 		// error
				 * 		"alertText": "* 此名称已被其他人使用",
				 * 		// speaks by itself
				 * 		"alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
				 * 	}
				 */
			};
			
		}
	};
	$.validationEngineLanguage.newLang();
})(jQuery);

/*
根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位数字本体码和一位数字校验码组成。排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
    地址码表示编码对象常住户口所在县(市、旗、区)的行政区划代码。
    出生日期码表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。
    顺序码表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。顺序码的奇数分给男性，偶数分给女性。
    校验码是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。

出生日期计算方法。
    15位的身份证编码首先把出生年扩展为4位，简单的就是增加一个19或18,这样就包含了所有1800-1999年出生的人;
    2000年后出生的肯定都是18位的了没有这个烦恼，至于1800年前出生的,那啥那时应该还没身份证号这个东东，⊙﹏⊙b汗...
下面是正则表达式:
 出生日期1800-2099  (18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])
 身份证正则表达式    /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i      
 15位校验规则 6位地址编码+6位出生日期+3位顺序号
 18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位

 校验位规则     公式:∑(ai×Wi)(mod 11)……………………………………(1)
                公式(1)中： 
                i----表示号码字符从由至左包括校验码在内的位置序号； 
                ai----表示第i位置上的号码字符值； 
                Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。
                i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
                Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1

*/
//身份证号合法性验证 
//支持15位和18位身份证号
//支持地址编码、出生日期、校验位验证
function IdentityCodeValid(code) { 
	var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
	var tip = "";
	var pass= true;
	if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
		tip = "身份证号格式错误";
		pass = false;
	}else if(!city[code.substr(0,2)]){
		tip = "地址编码错误";
		pass = false;
	}else{
		//18位身份证需要验证最后一位校验位
		if(code.length == 18){
			code = code.split('');
			//∑(ai×Wi)(mod 11)
			//加权因子
			var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
			//校验位
			var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for (var i = 0; i < 17; i++){
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if(parity[sum % 11] != code[17]){
				tip = "* 校验位错误";
				pass =false;
			}
		}
	}
	if(!pass) alert(tip);
	return pass;
}

function checkUsername(field, rules, i, options){
	var ksh = field.val();
	var today = new Date();
	var year = today.getFullYear() +"";
	var preksh1 = year.substr(2,2)+"62";
	var preksh = ksh.substr(0,4);
	if(ksh.length==14 || ksh.length==16){
		//if(preksh!=preksh1){
		if(false){
			rules.push('required');
			return "* 考生号格式错误！";
		}
	}else{
		rules.push('required');
		return "* 考生号格式错误！";
	}
}
function verifyIdentityCode(field, rules, i, options){
	var idCode = field.val();
	if(!IdentityCodeValid(idCode)){
		rules.push('required');
		return "* 身份证号码格式错误！";
	}
}