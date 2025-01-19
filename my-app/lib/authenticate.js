import {jwtDecode} from "jwt-decode";

function setToken(token){
  localStorage.setItem('access_token', token);
}

export function getToken(){
    return localStorage.getItem('access_token');
}

export function readToken(){
    const token = getToken();
    return (token) ? jwtDecode(token) : null;
}

export function isAuthenticated(){
  const token = readToken();  
  return (token) ? true : false;
}

export function removeToken(){
  localStorage.removeItem('access_token');
}

export async function authenticateUser(user, password) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email_phone: user, password: password }),
    headers: {
      "content-type": "application/json"
    }
  });

  const data = await res.json();

  if(res.status === 200){
    console.log("authenticated")
    return true;
  }else{
    throw new Error(data.message);
  } 
}

export async function registerUser(firstName,lastName,emailPhone, password, password2) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ first_name: firstName, last_name : lastName, email_phone : emailPhone, password: password, password2: password2 }),
      headers: {
        "content-type": "application/json"
      }
    });
  
    const data = await res.json();
  
    if(res.status === 200){
      return true;
    }else{
      throw new Error(data.message);
    } 
  }