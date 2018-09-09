import React, { Component } from 'react';

class EditEventService extends Component {
  constructor(props) {
    super(props);

    const { event_services} = props;
    this.state = {
      hostname: event_services.name,
      email: event_services.email,
      telephone: event_services.number,
      avgprice: event_services.avg_price,
      usefullinks: event_services.links,
      description: event_services.description,
      selectdropdown: event_services.type_of_service,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const data = {
      name: this.state,hostname,
      email: this.state.email,
      number: this.state.telephone,
      avgprice: this.state.avgprice,
      links: this.state.usefullinks,
      description: this.state.description,
      selectdropdown: this.state.selectdropdown,
      event_service_id: this.props.event_services.id
    }

    this.props.onSubmit(data);

  }

  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target;

    this.setState({
      [name]: value
    });
  }

  parseAuthorOptions(authors) {
    return authors.map(author => ({
      value: author.author_id,
      display: `${author.first_name} ${author.last_name}`
    }));
  }

  render() {
    const { title, author_id } = this.state;
    const { authors } = this.props;
    const options = this.parseAuthorOptions(authors);

    return (
      <div>
        <h2>Edit Event Service</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange} />

          <select
            value={this.state.author_id}
            onChange={this.handleChange}
            name="author_id"
          >
            {options.map(author => (
              <option 
                key={author.value}
                value={author.value}>
                {author.display}
              </option>
            ))}
          </select>

          <input type="submit" value="Update Book" />
        </form>
      </div>
    );
  }
}

export default EditEventService;
