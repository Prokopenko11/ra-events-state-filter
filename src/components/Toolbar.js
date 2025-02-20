import React from 'react';

class Toolbar extends React.Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;

    return (
      <div className="toolbar">
        {filters.map(filter => (
          <button
            key={filter}
            className={filter === selected ? 'active' : ''}
            onClick={() => onSelectFilter(filter)}
            >
            {filter}
          </button>
        ))}
      </div>
    )
  }
}

export default Toolbar;