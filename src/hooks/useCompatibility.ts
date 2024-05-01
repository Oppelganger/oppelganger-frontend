import useSWR from "swr"
import { fetcher } from "../api/api"

export default function useCompatibility() {
    const { data, error, isLoading } = useSWR(`/check_gpu_driver`, fetcher, {
        shouldRetryOnError: true
    })

    try {
        const compatible = data?.supported
        const message = data?.message || error.data

        return {
            compatible,
            message,
            isLoading : true,
        }
    } catch (error) {
        return {
            compatible: false,
            message: "",
            isLoading: false
        }
    }
}