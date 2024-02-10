const BASE_URL: string = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';
const API_KEY = 'ncygvR1JPAjcud5IkDGht691aVBgGwro';

// Generic function to make API requests
async function request<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(url, options);
    if (!response.ok) {
        const errorMessage = `${response.status} - ${response.statusText}`;
        throw new Error(errorMessage);
    }
    return response.json();
}

// Generic function to handle GET requests
export async function get<T>(endpoint: string): Promise<T> {
    const url: string = `${BASE_URL}/${endpoint}?api-key=${API_KEY}`;
    return await request<T>(url, { method: 'GET' });
}

// Generic function to handle POST requests
export async function post<T>(endpoint: string, data: any): Promise<T> {
    const url: string = `${BASE_URL}/${endpoint}?api-key=${API_KEY}`;
    return await request<T>(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

// Generic function to handle PUT requests
export async function put<T>(endpoint: string, data: any): Promise<T> {
    const url: string = `${BASE_URL}/${endpoint}?api-key=${API_KEY}`;
    return await request<T>(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

// Generic function to handle DELETE requests
export async function del<T>(endpoint: string): Promise<T> {
    const url: string = `${BASE_URL}/${endpoint}?api-key=${API_KEY}`;
    return await request<T>(url, { method: 'DELETE' });
}
