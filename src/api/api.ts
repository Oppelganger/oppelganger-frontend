const HOST = 'http://127.0.0.1:8080'

const reponseHandler = (res: Response) => {
    if (res) {
        if (!res.ok) {
            const error = new Error('Произошла ошибка во время загрузки данных')
            error.cause = res.status
            throw error
        }

        return res.json()
    }
}

const errorHandler = (error: unknown) => {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new Error('Ошибка сети. Проверьте ваше интернет-соединение.')
    }
    throw new Error('Произошла ошибка во время загрузки данных')
}

export const fetcherGET = async <T>(url: string): Promise<T | void> => {
    if (url === null) {
        return
    }

    try {
        const res = await fetch(HOST + url)
        return reponseHandler(res)
    } catch (error) {
        errorHandler(error)
    }
}

export const fetcherPOST = async <T>(url: string, data: any): Promise<T | void> => {
    if (url === null) {
        return
    }

    try {
        const res = await fetch(HOST + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        return reponseHandler(res)
    } catch (error) {
        errorHandler(error)
    }
}