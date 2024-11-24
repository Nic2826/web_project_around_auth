export async function register(email, password) {
    
    const response = await fetch('https://register.nomoreparties.co/signup',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if(!response.ok)throw new Error("Este usuario ya existe");
    const data = await response.json();
    localStorage.setItem('jwt', data.token);
    return data;

} 

export async function login(email, password) {

    const response = await fetch('https://register.nomoreparties.co/signin',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if(!response.ok)throw new Error("usuario no encontrado");
    const data = await response.json();
    
    localStorage.setItem('jwt', data.token);

    return data;

}