import { AxiosResponse } from "axios";
import { AuthResponse } from "../../interface/AuthResponse";
import $api from "../../http";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/auth/authenticate', {email, password})
    }

    // static async logout(): Promise<void> {
    //     return $api.post('/api/auth/logout')
    // }
}