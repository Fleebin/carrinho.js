const fetchCarts = async () => {
    const response = await fetch('');
    const data = await response.json();
    console.log(data);
    return data;
}

export default fetchCarts;