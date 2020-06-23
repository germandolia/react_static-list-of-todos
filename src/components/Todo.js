import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

export const Todo = ({ user, id, title, completed }) => (
  <div className="todo__item">
    <small style={{ color: completed ? 'yellowgreen' : 'coral' }}>
      {completed ? 'done' : 'not done'}
    </small>
    <p>{`${id}. ${title}`}</p>
    <small>
      <br />
      {`For: ${user.name}`}
    </small>
  </div>
);

export const TodoShape = PropTypes.shape({
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

Todo.propTypes = { ...TodoShape };
