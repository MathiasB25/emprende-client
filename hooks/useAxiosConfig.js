export default function useAxiosConfig() {
    const token = localStorage.getItem('WRkAxpZRq6Gv');
    const config = {
        headers: {
            "Content-Type": "application-json",
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}