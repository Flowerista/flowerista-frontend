import { AxiosResponse } from "axios";
import $api from "../../http";
import { IAddress, IChangePassword, IPersonalInfo, IUser } from "../../interface/global";

export default class UserService {
    static async profile(): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>('/api/user/profile')
    }

    static async changeAddress(address: IAddress): Promise<AxiosResponse> {
        return $api.patch('/api/user/changeAddress', address)
    }

    static async changePersonalInfo(personalInfo: IPersonalInfo): Promise<AxiosResponse> {        
        return $api.patch('/api/user/changePersonalInfo', personalInfo)
    }

    static async changePassword(passwords: IChangePassword): Promise<AxiosResponse> {
        return $api.patch('/api/user/changePassword', passwords)
    }

}