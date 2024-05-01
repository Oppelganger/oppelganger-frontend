import useSWR from "swr"
import { fetcher } from "../api/api"
import { checkMobile } from "../utils/checkMobile"

export default function useCompatibility() {
    const isMobile = checkMobile()
    
    const { data, isLoading } = useSWR(isMobile ? null : `/check_gpu_driver`, fetcher, {
        shouldRetryOnError: !isMobile,
        errorRetryInterval: 1000,
    })

    if (isMobile) {
        return {
            compatible: false,
            message: "Приложение недоступно на мобильных устройствах",
            isLoading: false
        }
    }

    if (data) {
        return {
            compatible: data.supported,
            message: data.message,
            isLoading
        }
    }

    return {
        compatible: false,
        message: "Проверка совместимости компьютера и ПО...",
        isLoading: true
    }
}