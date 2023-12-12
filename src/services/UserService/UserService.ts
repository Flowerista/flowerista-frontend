import { AxiosResponse } from "axios";
import $api from "../../http";
import { IAddress, IChangePassword, IPersonalInfo, IUser } from "../../interface/global";

export default class UserService {
    static async profile(): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>('/api/user/profile')
    }

    static async changeAddress(address: IAddress): Promise<AxiosResponse> {
        const data = JSON.stringify(address)
        return $api.patch('/api/user/changeAddress', data)
    }

    static async changePersonalInfo(personalInfo: IPersonalInfo): Promise<AxiosResponse> {
        const data = JSON.stringify(personalInfo)
        return $api.patch('/api/user/changePersonalInfo', data)
    }

    static async changePassword(passwords: IChangePassword): Promise<AxiosResponse> {
        const data = JSON.stringify(passwords)
        return $api.patch('/api/user/changePassword', data)
    }

}