import { AxiosResponse } from "axios";
import httpClient from "../utils/httpClient";

export interface ErrorProperties {
    side: 'client',
    name: string,
    message: string,
    stack: string,
    componentStack: string
}

class LogService {

    //register user
    public async logError(errorObject: ErrorProperties) {
        await httpClient.post(`/api/v1/admin/errors`, errorObject);
    }

}

export default new LogService();
