/**
 *
 * @param {string} timestamp
 * @returns {Date}
 */
export const parseBigInt = function(timestamp:string) {
    var t = new Date();
    timestamp += "";
    var aa = "year_4,month_2,day_2,hours_2,minutes_2,seconds_2,microseconds_3";
    var bb:any = [];
    var s = 0;
    for (var i = 0; i < aa.split(",").length; i++) {
        var tt = aa.split(",")[i].split("_");
        bb[tt[0]] = parseInt(timestamp.substr(s, parseInt(tt[1])))
        s += parseInt(tt[1]);
    }
    return new Date(bb['year'], bb['month'] - 1, bb['day'], bb['hours'],
        bb['minutes'], bb['seconds'], bb['microseconds']);
}



/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 * @param fmt
 * @returns {any}
 * @constructor
 */
// export const formatDate = function(fmt:string) { // author: meizz
//     var o = {
//         "M+" : this.getMonth() + 1, // 月份
//         "d+" : this.getDate(), // 日
//         "h+" : this.getHours(), // 小时
//         "m+" : this.getMinutes(), // 分
//         "s+" : this.getSeconds(), // 秒
//         "q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
//         "S" : this.getMilliseconds()
//         // 毫秒
//     };
//     if (/(y+)/.test(fmt))
//         fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
//             .substr(4 - RegExp.$1.length));
//     for ( var k in o)
//         if (new RegExp("(" + k + ")").test(fmt))
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
//                 : (("00" + o[k]).substr(("" + o[k]).length)));
//     return fmt;
// }

/**
 *+-------------------------------------------------
 *| 帐号格式化
 *| 格式为：1234 5678 9012 3456
 *--------------------------------------------------
 */
export const formatCardNo = function(value:string) {
    if (value == "" || value == null || value == undefined) {
        return "";
    }
    let account = new String(value);
    account = account.substring(0, 29); /* 帐号的总数, 包括空格在内 */
    let reg = /\s{1,}/g;
    let card_ = "";
    // 去除空格
    value = account.replace(reg, "");
    for (let i = 0; i < value.length; i++) {
        if (i % 4 == 3) {
            card_ = card_ + value.charAt(i) + " ";
        } else {
            card_ = card_ + value.charAt(i);
        }
    }
    return card_;
}

/**
 * 常用正则
 */
let Regex = {
    name: [/^[a-zA-Z]([a-zA-Z0-9_]){5,19}$/, "6-20位，可使用字母、数字、下划线，需以字母开头"],
    pwd: [/^[A-Za-z0-9\^$\.\+\*_@!#%~=-]{8,32}$/,
        "密码只能为 8 - 32 位数字，字母及常用符号组成"],
    phone: [/^(13[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/,
        "请输入正确手机号"],
    email: [/^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,
        "请输入正确的邮箱"],
    bankCard: [/^[0-9]{15,19}$/, "请输入正确的银行卡号"],
    idCard: [/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, "请输入正确的身份证号"],
    cmsCode: [/^[0-9]{6}$/, "请输入正确的验证码"],
    unionBankCode: [/^[0-9]{12}$/, "请输入正确的开户行号"],
    payPwd: [/^\d{6}$/, "提现密码只能为6 位数字"],
}

/**
 * 金额转大写
 *
 * @author dongzj
 * @param num:小写金额
 * @return
 */
export const upperAmount = function (num:any) {
    let strOutput = "";
    let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
    num += "00";
    let intPos = num.indexOf('.');
    if (intPos >= 0)
        num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    strUnit = strUnit.substr(strUnit.length - num.length);
    for (let i = 0; i < num.length; i++)
        strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1)
            + strUnit.substr(i, 1);
    return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(
        /零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元')
        .replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
};

/**
 * 获取随机范围内整数
 *
 * @author dongzj
 * @param min:最小值；max:最大值
 * @return
 */
export const random = function (min:number, max:number) {
    let c = max - min + 1;
    return Math.floor(Math.random() * c + min);
}




/**
 * 获取两个日期相差几个月
 *
 * @author dongzj
 * @param st:开始时间；et：结束时间
 * @return
 */
export const getdifMonth = function (st:string, et:string) {
    let m1 = parseInt(st.split("-")[0]) * 12
        + parseInt(st.split("-")[1].replace(/^0+/, ""));
    let m2 = parseInt(et.split("-")[0]) * 12
        + parseInt(et.split("-")[1].replace(/^0+/, ""));
    return m2 - m1;
}

/**
 * 获取增加几天后的日期
 *
 * @author dongzj
 * @param date:日期；days：天数
 * @return
 */
export const addDate = function (date:string, days:number) {
    let objD = new Date(date);
    objD.setDate(objD.getDate() + days);

    let yy = objD.getFullYear();
    let MM:any = objD.getMonth() + 1;
    if (MM < 10)
        MM = '0' + MM;
    let dd:any = objD.getDate();
    if (dd < 10)
        dd = '0' + dd;
    let hh:any = objD.getHours();
    if (hh < 10)
        hh = '0' + hh;
    let mm:any = objD.getMinutes();
    if (mm < 10)
        mm = '0' + mm;
    let ss:any = objD.getSeconds();
    if (ss < 10)
        ss = '0' + ss;

    return yy + '-' + MM + '-' + dd + " " + hh + ":" + mm + ":" + ss;

}
/**
 * js日期格式化为yyyy-MM-dd
 */
export const dateFormat = function (d:string) {
    let date = new Date(d);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = (date.getDate()).toString();
    if (month.length == 1) {
        month = "0" + month;
    }
    if (day.length == 1) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}

/**
 * 判断闰年代码
 */
export const isLeapYear = function (year:number) {
    if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) {
        return (true);
    } else {
        return (false);
    }
}

/**
 * 格式化数字千分位逗号分割
 */
export const formatNumberRgx = function (num:string) {
    let parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};
/**
 * 格式化数字千分位逗号分割(可限制小数位保留位数)
 * s  金额
 * n  保留位数
 */
export const formatNumber = function (s:string, n:number) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\\.-]/g, "")).toFixed(n) + "";
    let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    let t = "";
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}
/**
 * 收益计算器
 */
/**
 * 校验是否是数字,保留两位小数
 * @param {string} amount
 * @returns {boolean}
 */
export const validateAmount = function (amount:string) {
    if (!(/^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(amount))) {
        return false;
    }
    return true;
}


