import { Component } from 'react';
import css from '../Filter/Filter.module.css';

class Filter extends Component {
  handleChange = e => {
    const filter = e.currentTarget.value;
    this.props.onFilterChanged(filter);
  };

  render() {
    return (
      <label htmlFor="" className={css.description}>
        Find contacts by name
        <input
          onChange={this.handleChange}
          type="text"
          name="filter"
          className={css.input}
        />
      </label>
    );
  }
}

export default Filter;
