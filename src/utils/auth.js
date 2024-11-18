export async function login(email, password) {
    try{
        const response = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        return data;
    }catch (err) {
        console.log('error en el login',err);
    }
} 

