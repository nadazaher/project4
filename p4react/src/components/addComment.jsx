import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddComment extends Component {
  constructor(props) {
      super(props);
      this.state = {
          content: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.toggle = this.toggle.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
        [name]: value,
    });
}


toggleModal(modal) {
    this.state[modal] === 'modal'
      ?
      this.setState({
        [modal]: 'modal is-active'
      })
      :
      this.setState({
        [modal]: 'modal'
      })
  }

toggle(evt) {
    evt.preventDefault();
    this.props.toggle('addComment_page');
}


render () {
return (

      <div className={this.props.addComment}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Add Comment</p>
            <FontAwesomeIcon icon={["fas", "times"]} onClick={() => this.props.toggleModal('addComment_page')}/>
              </header>
              <section className="modal-card-body">
              <div>

  
        <div className="createform">


<div className="field">
<label className="label">Comment:</label>
<div className="control">
  <textarea className="textarea" name="content" placeholder="Leave feedback on your service here"
  value={this.state.content} onChange={this.handleChange}/>
</div>
</div>


<div className="field is-grouped">
<div className="control">
  <button className="button is-primary" onClick={(e) => {
    console.log("CHECK", this.props.currentES.id)
            this.props.createComment({
              content: this.state.content,
              event_service_id: this.props.currentES.id,
              user_id: this.props.userInfo              
            })}}>Submit
            </button>

            
</div>

<div className="control">
  <button className="button is-text" onClick={() => this.props.toggleModal('addComment_page')}>Cancel</button>

</div>
</div>
</div>
</div>
</section>
</div>
</div>

    )
}}
export default AddComment;