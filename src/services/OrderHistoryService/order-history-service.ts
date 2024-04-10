import $api from '../../http';

export default class OrderHistoryService {
	static async getHistory() {
		return $api.get(`api/order/history`)
	}

}
