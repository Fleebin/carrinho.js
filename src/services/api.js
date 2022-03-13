export const fetchCarts = async () => {
    const response = await fetch('localhost:3001');
    const data = await response.json();
    return data;
}