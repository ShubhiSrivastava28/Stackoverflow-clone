import React from 'react'
import { useParams } from 'react-router-dom'
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
const QuestionsDetails = () => {

    const { id } = useParams()
    console.log(id)
    var questionList = [{
        _id:"1",
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionBody:"It meant to be",
        questionTags:["java", "nodde js","react-js","mongodb" ],
        userPosted:"mano",
        userId:1,
        askedOn:"jan 1",
        answer:[{
          answerBody: "Answer",
          userAnswered:"Kumar",
          answeredOn:"jan 2",
          userId:2,
        }]
      },{
        _id:"2",
        upVotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a function",
        questionBody:"It meant to be",
        questionTags:["java", "nodde js","react-js","mongodb" ],
        usePosted:"mano",
        askedOn:"jan 1",
        userId:1,
        answer:[{
          answerBody: "Answer",
          userAnswered:"Kumar",
          answeredOn:"jan 2",
          userId:2,
        }]
      },{
        _id:"3",
        upVotes:1,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionBody:"It meant to be",
        questionTags:["java", "nodde js","react-js","mongodb" ],
        usePosted:"mano",
        askedOn:"jan 1",
        userId:3,
        answer:[{
          answerBody: "Answer",
          userAnswered:"Kumar",
          answeredOn:"jan 2",
          userId:2,
        }]
      }]
  return (
    <div className='question-details-page'>
       {
        questionList === null ?
        <h1>Loading..</h1>:
        <>
        {
            questionList.filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                {console.log(question)}
                <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <img src={upvote} alt=""/>
                      <p>{question.upVotes - question.downVotes}</p>
                     <img src={downvote} alt=""/>
                    </div>
                    </div>
                </section>
              </div>
        ))
        }
        </>
       }
    </div>
  )
}

export default QuestionsDetails
