export async function register(email, password) {
    try{
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
        const data = await response.json();
        console.log(data);
        return data;
    }catch (err) {
        console.log('error en el signup',err);
    }
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
        
        return data;
 
    }
