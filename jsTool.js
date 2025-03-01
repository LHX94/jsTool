/*
 * @Author: LHX
 * @Date: 2025年2月7日
 * 使用方式 main.js  import "ax-tooljs";
 */
/**
 * @description: 格式化日期
 * @param {*} formatStr 日期格式
 */
Date.prototype.Format = function (formatStr) {
    const Week = ['日', '一', '二', '三', '四', '五', '六'];
    const replacements = {
        'yyyy': this.getFullYear(),
        'YY': String(this.getFullYear()).slice(-2).padStart(2, '0'),
        'MM': String(this.getMonth() + 1).padStart(2, '0'),
        'M': this.getMonth() + 1,
        'w': Week[this.getDay()],
        'dd': String(this.getDate()).padStart(2, '0'),
        'd': this.getDate(),
        'hh': String(this.getHours()).padStart(2, '0'),
        'h': this.getHours(),
        'mm': String(this.getMinutes()).padStart(2, '0'),
        'm': this.getMinutes(),
        'ss': String(this.getSeconds()).padStart(2, '0'),
        's': this.getSeconds()
    };
    return formatStr.replace(/yyyy|YY|MM|M|w|dd|d|hh|h|mm|m|ss|s/g, match => replacements[match]);
};
// new Date().Format("yyyy-MM-dd 星期w hh:mm:ss");