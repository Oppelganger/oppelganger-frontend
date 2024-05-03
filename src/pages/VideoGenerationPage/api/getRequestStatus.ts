import { fetcherGET } from "../../../api/api"

export type requestStatusResponse = {
    "stage": string,
    "last_update": string
}

export const getRequestStatus = async () => {
    return fetcherGET<requestStatusResponse>('/request_status')
}