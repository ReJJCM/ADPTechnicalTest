import React, { Fragment } from 'react'

export default (props) => {
  
  let options = <div className="answers selectOptions row">
                  <div className="col-md-5 btn-ans">
                    <p onClick={()=>props.checkAns('True')}>True</p>
                  </div>
                  <div className="col-md-2 btn-ans"></div>
                  <div className = "col-md-5 btn-ans" >
                    <p onClick={()=>props.checkAns('False')}>False</p>
                  </div>
                </div> 

  let res = props.answerComponent ? props.continue() : options

  return (
    <Fragment>
      {res}
    </Fragment>
  )
}