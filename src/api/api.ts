const HOST = 'http://127.0.0.1:8080'

export const fetcher = async (url: string) => {
    if (url === null) {
        return
    }

    try {
        const res = await fetch(HOST + url)

        if (!res.ok) {
            let errorMessage = 'Произошла ошибка во время загрузки данных'

            const error = new Error(errorMessage)
            error.cause = res.status
            throw error
        }

        return res.json()
    } catch (error) {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            throw new Error('Ошибка сети. Проверьте ваше интернет-соединение.')
        }
        throw new Error('Произошла ошибка во время загрузки данных')
    }
}
