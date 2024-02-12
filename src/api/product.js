export const productsUpload = async uploadData  => {
   
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(uploadData) 
    })
    const data = await response.json()
    return data

}
// Get all rooms
export const getAllProducts = async ()  => {
   
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await res.json()
    return data

}