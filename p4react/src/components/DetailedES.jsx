import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddComment from './addComment';
import EditEventService from './editEventService';
// import ShowComments from './showComments';


function DetailedES(props) {
  return (


    <div className="ESOneContent">
      <div className="box detailed-info">
              <FontAwesomeIcon icon={["fas", "trash"]} className="delete" onClick={() => {
              props.deleteEventService(props.currentES)
              props.handleLinks('logged in landing');}}/>
        
              <EditEventService 
              toggleModal={props.toggleModal}
              updateEventService={props.updateEventService}
              handleLinks={props.handleLinks}
              userInfo={props.userInfo}
              editESPage={props.editESPage}
              currentES={props.oneService}
              />

  
        <article className="media">
          <div className="media-left">
    
            <div className="media-content">
              <div className="content"> 
                <div>
                  <div className="description">

                    <strong>Host Name:</strong><p>{props.currentES.host}</p>
                    <strong>Email:</strong><p>{props.currentES.email}</p>
                    <strong>Phone Number:</strong><p>{props.currentES.number}</p>
                    <strong>Description of Service:</strong><p> {props.currentES.description}</p>
                    <strong>Average price: </strong><p>{props.currentES.avg_price}</p>
                    <strong>Useful links: </strong><p><a href={props.currentES.link}>{props.currentES.link}</a></p>

                    <strong>Created at:</strong><p>{props.currentES.created_at}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <a className="level-item" aria-label="like"> */}
            {/* <span className="icon is-small heart-icon">
              <FontAwesomeIcon icon={["far", "heart"]} />
            </span> */}
            {/* </a> */}

            <button className="button is-light comment-button" onClick={() => {
              props.toggleModal('addComment_page')
            }}
            >Add Comment</button>
            <AddComment createComment={props.createComment} toggleModal={props.toggleModal} addComment={props.addComment} userInfo={props.userInfo} currentES={props.oneService}/>

{/* <ShowComments currentES={props.oneService} userInfo={props.userInfo} showComments={props.ShowComments} */}


          </div>
        </article>
      </div>
    </div>
  )
}

export default DetailedES;