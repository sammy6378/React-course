import handleApiResponse from "../utils/ApiResponse";



const baseUrl = "https://resolveit.onrender.com/api/users";

export interface TUser {
    id: string;
    full_name: string;
    username: string;
    phone_number: string;
    email: string;
    password: string;
}


// get users
export const getUsers = async () =>{
    const response = await fetch(`${baseUrl}`);
    console.log(response)
    await handleApiResponse(response);
    return response.json()
}

// create user
export const createUser = async (user: FormData): Promise<TUser> =>{
    const response = await fetch(`'${baseUrl}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    await handleApiResponse(response);
    return response.json();
}

// update user 
