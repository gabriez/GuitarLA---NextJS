const BASEURL = process.env.API_URL;

export async function getGuitars () {
    const response = await fetch(`${BASEURL}api/guitars?populate=image`);
    return await response.json();
}

export async function getGuitar (url) {
    const response = fetch(`${BASEURL}api/guitars?filters[url]=${url}&populate=image`)
    .then( response => response.json()).catch(error => console.log(error));

    // if (!response.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    //   }
    // const resultado = await response.json();
    return response;
}

export async function getPosts () {
    const response = await fetch(`${BASEURL}api/posts?populate=image`);
    return await response.json();
}

export async function getPost (url) {
    const response = await fetch(`${BASEURL}api/posts?filters[url]=${url}&populate=image`);
    const respuesta = await response.json();


    return respuesta;
}

export const getCourse = async () => {
    const response = await fetch(`${BASEURL}api/course?populate=image`);
    return await response.json();
}