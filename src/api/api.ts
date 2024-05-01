const HOST = 'http://127.0.0.1:8080'

export const fetcher = async (url: string) => {
    alert('assss')
    const res = await fetch(HOST + url)

    if (!res.ok) {
        const error = new Error('Произошла ошибка во время загрузки данных')
        error.message = await res.json()
        error.cause = res.status
        throw error
    }

    return res.json()
}