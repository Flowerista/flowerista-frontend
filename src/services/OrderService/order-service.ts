import $api from '../../http';
import {OrderResponseInterface} from '../../interface/order/orderResponseInterface';
import {OrderInterface} from '../../interface/order/order-interface';

export default class OrderService {
	static async createOrder(order: OrderInterface) {
		console.log(order)
		return $api.post<OrderResponseInterface>(`/api/order`, order)
	}

}
