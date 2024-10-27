import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.searchWrapper}>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={event => onFilter(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
