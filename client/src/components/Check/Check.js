import React, { Fragment } from 'react'

export default (props) => {
  
  let options = <div className="answers select-options">
                  <div className="col-md-5 btn-ans">
                    <p onClick={()=>props.checkAnswer('True')}>True</p>
                  </div>
                  <div className="col-md-2 btn-ans"></div>
                  <div className = "col-md-5 btn-ans" >
                    <p onClick={()=>props.checkAnswer('False')}>False</p>
                  </div>
                </div> 

  let answerOptions = props.answerComponent ? props.continue() : options

  return (
    <Fragment>
      {answerOptions}
    </Fragment>
  )
}