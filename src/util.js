let Util = {
	addEvent: function(elem, type, fn) {

		if (elem.addEventListener) //judge 

		{

			elem.addEventListener(type, fn, false); //默认是冒泡

		} else if (elem.attachEvent) {

			elem[type + fn] = function() {

				fn.call(elem);

			};

			elem.attachEvent('on' + type, elem[type + fn]);

		} else {

			elem['on' + type] = fn;

		}
	},
	getOffset : {
    top: function (obj) {
        return obj.offsetTop + (obj.offsetParent ? this.top(obj.offsetParent) : 0)
    },
    left: function (obj) {
        return obj.offsetLeft + (obj.offsetParent ? this.left(obj.offsetParent) : 0)
    }
}
}

export default Util;
