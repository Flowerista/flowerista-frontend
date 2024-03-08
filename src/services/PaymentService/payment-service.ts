import $api from '../../http';

interface RequestPaypalInit {
	payId: string,
	redirectUrl: string,
	status: string
}

export default class PaymentService {
	static async paymentInit(paymentId: number) {
		try {
			return await $api.post<RequestPaypalInit>(`/api/payment/init?orderId=${paymentId}`)
		} catch (e) {
			console.log(e)
		}
	}

	static async paymentCapture(token: string) {
		try {
			return $api.post<{ status: string }>(`/api/payment/capture?token=${token}`)
		} catch (e) {
		}
	}

}
