import useSWR from "swr"
import { fetcher } from "../api/api"

export default function useCompatibility() {
    const { data, error, isLoading } = useSWR(`/check_gpu_driver`, fetcher, {
        shouldRetryOnError: true
    })

    const compatible = data?.supported
    const message = data?.message || error.data

    return {
        compatible,
        message,
        isLoading,
    }
}