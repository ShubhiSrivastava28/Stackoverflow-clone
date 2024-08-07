import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})
API.interceptors.request.use((req)=>{
  if(localStorage.getItem("Profile")){
    req.headers.Authorization=`Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`
  }
  return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);
export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get('/questions/get')

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });

export const getallusers=()=> API.get("/users/getallusers");
export const updateprofile=(id,updateprofile)=>API.patch(`user/update/${id}`,updateprofile)