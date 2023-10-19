import type { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { toTitleCase } from '../data/data';

/**
 * @param {string} message Message string
 */
export const notifyError = (message: string) => {
	Swal.fire({
		icon: 'error',
		title: 'Error',
		text: message
	});
};

/**
 * @param {string} message Message string
 */
export const notifySuccess = (message: string, timer: number = 0) => {
	Swal.fire({
		icon: 'success',
		title: 'Success',
		timer: timer,
		text: message
	});
};

/**
 * @param {string} message Message string
 */
export const notifyInfo = (message: string) => {
	Swal.fire({
		icon: 'info',
		title: 'Info',
		text: message
	});
};

/**
 * @param {string} message Message string
 */
export const notifyWarning = (message: string) => {
	Swal.fire({
		icon: 'warning',
		title: 'Warning',
		text: message
	});
};

export const notifyErrorAxios = (error: AxiosError) => {
	try {
		let message = 'Error when execute!';
		if (error.response) {
			let data: any = error.response.data;
			if (data.error != null && data.error != undefined && data.error != '') {
				if (typeof data.error === 'string') {
					message = toTitleCase(data.error);
				} else if (Array.isArray(data.error)) {
					message = '';
					data.error.forEach((err: { [s: string]: unknown } | ArrayLike<unknown>) => {
						for (let [k, v] of Object.entries(err)) {
							message += `${k} : ${v} \n`;
						}
					});
				}
			}
			notifyError(message);
		}
	} catch (error) {
		console.log('error', error);
	}
};

export const notifyApiError = async (error: any) => {
	try {
		let message: string = 'Error when execute!';
		if (error.message?.length > 0) {
			message = error.message;
		} else {
			let data = await error.json();
			if (data) {
				if (data.error != null && data.error != undefined && data.error != '') {
					if (typeof data.error === 'string') {
						message = toTitleCase(data.error);
					} else if (Array.isArray(data.error)) {
						message = '';
						data.error.forEach((err: { [s: string]: unknown } | ArrayLike<unknown>) => {
							for (let [k, v] of Object.entries(err)) {
								message += `${k} : ${v} \n`;
							}
						});
					}
				}
			}
		}
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: message
		});
	} catch (error) {
		console.log('error', error);
	}
};