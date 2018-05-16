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
	}
}

export default Util;
