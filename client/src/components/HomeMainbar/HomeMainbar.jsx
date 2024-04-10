import React from 'react'
import { Link , useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {
  const location = useLocation ();
   const user = 1;
    const navigate= useNavigate()
    const questionList = [
      {
      id: 1,
      votes: 1,
      noOfAnswers: 0,
      questionTitle: "what is a function?",
      questionBody:"It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "manav",
      askedOn:"jan 1"
      },
      {
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is a function?",
      questionBody:"It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "manav",
      askedOn:"jan 1"
    },{
      id: 3,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is a function?",
      questionBody:"It meant to be", 
      questionTags: ["javascript", "R", "python"],
      userPosted: "manav",
      askedOn:"jan 1"
      }]

    const checkAuth = () =>{
      if(user === null){
        alert("Login or signup to ask a question")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }
    
    }

  return (
    <div className='main-br'>   
      <div className='main-bar-header'>
      {location.pathname === "/" ? 
          <h1>Top Questions</h1>: <h1>All Questions</h1>
        }
         <button onClick={checkAuth} className="ask-btn">Ask Question</button>
      </div>
      <div >
        {
          questionList === null ?
          <h1>Loading...</h1> :
          <>
            <p> {questionList.length } questions</p>
           <QuestionList questionList={questionList}/>
           </>
        }
      </div>


    </div>
  )
}

export default HomeMainbar
