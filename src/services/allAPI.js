import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// register API

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// login

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add-project
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}

// home project

export const homeProjectsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}

// user project

export const userProjectsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}
 // all project

export const allProjectsAPI = async(reqHeader,searchKey)=>{
    // query parameter of url ?search=${searchKey} & query stored in search
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}

// update project api

export const updateProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

// remove projecct: projects/:id/remove

export const deleteProjectAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/projects/${id}/remove`,{},reqHeader)
}


// edit user /user/edit
export const editUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader)
}

