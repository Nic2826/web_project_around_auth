export async function register(email, password) {
    
        const response = await fetch('http://localhost:5000/users/signup',{
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
    
        const response = await fetch('http://localhost:5000/users/signin',{
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
