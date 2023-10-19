import moment from 'moment';

/**
 * @param {string} str string to format
 * @return {string} data -> Data
 */
export const toTitleCase = (str: string) => {
	return str.replace(/[^\s]+/g, function (word) {
		return word.replace(/^./, function (first) {
			return first.toUpperCase();
		});
	});
};

/**
 * @param {string} str string to format
 * @return {string} data Need format -> DNF
 */
export const toAbbr = (str: string) => {
	if (!/(?<=(\s|^))[a-z]/gi.test(str)) {
		return 'U';
	}
	const result = str.match(/(?<=(\s|^))[a-z]/gi);
	return result == null ? 'U' : result.join('').toUpperCase();
};
/**
 * @param {string} fileName file name
 * @return {string} fileName + datetime
 */
export const generateFileName = (fileName: string) => {
	return fileName + '_' + moment().format('DD_MM_YY_hh_mm_ss');
};

/**
 * @param {string}} value
 * @param {string} precision
 * @return {string} fixed number
 */
export const toFixed = (value: number, precision: number) => {
	const power = Math.pow(10, precision || 0);
	return String(Math.round(value * power) / power);
};

/**
 * @param {object} obj Object string
 */
export const paramSerialise = (obj: object) => {
	return Object.entries(obj)
		.map((pair) =>
			Array.isArray(pair[1])
				? pair[1].map((x) => `${encodeURIComponent(pair[0])}=${encodeURIComponent(x)}`).join('&')
				: typeof pair[1] === 'object'
				? Object.entries(pair[1])
						.map((x: any) => `${encodeURIComponent(pair[0])}${x[0]}=${encodeURIComponent(x[1])}`)
						.join('&')
				: pair.map(encodeURIComponent).join('=')
		)
		.join('&');
};

export const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

export const randomStr = () => (Math.random() + 1).toString(36).substring(7);

export const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

export const renderItemLabel = (str = '') => {
	return `<div class="pitem pitem-small pitem-circle pitem-label mx-auto me-1" style="background-color:${randomRGB()};" title="${str}">
	${toAbbr(str)}
	</div>`;
};

export const removeDuplicate = (arr: []) => {
	let s = new Set(arr);
	let it = s.values();
	return Array.from(it);
};

export const parseName = (obj: any) => {
	return (obj.last_name + ' ' + obj.middle_name + ' ' + obj.first_name).trim();
};

export const parseDuration = (time: string) => {
	if (time.length < 1) {
		return 0;
	} else if (moment(time).isBefore(moment('1997-01-01 00:00:00'))) {
		return 0;
	}
	return moment.duration(moment().diff(moment(time))).asSeconds();
};

export const parseUserFullname = (user: any) => {
	let name = (user.last_name + ' ' + user.middle_name + ' ' + user.first_name).trim();
	return name.length > 0 ? name : user.username;
};

export const toString = (value: any) => JSON.stringify(value, null, 2);
export const toObject = (str: any) => JSON.parse(str);

export const currencyInput = (value: string) => {
	const onlyNumbers = value.replace(/[^\d]/g, '');
	return onlyNumbers.replace(/(.)(?=(\d{3})+$)/g, '$1.');
};

export const format = (node: any, formatFunction: any) => {
	function updateValue(e: any) {
		node.value = formatFunction(node.value);
	}

	node.addEventListener('input', updateValue);
	node.addEventListener('paste', updateValue);

	// Format on intial hydration
	node.value = formatFunction(node.value);

	return {
		destroy() {
			node.removeEventListener('input', updateValue);
			node.removeEventListener('paste', updateValue);
		}
	};
};

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms ?? 200));
}