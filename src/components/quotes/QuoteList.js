import { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const [params, setParams] = useSearchParams();
  const sortAscending = params.get('sort') === 'asc';
  console.log(sortAscending);

  const changeSortingHandler = () => {
    params.delete('sort');
    const sortDescription = !sortAscending ? 'asc' : 'dsc';
    setParams({
      sort: sortDescription,
    });
  };

  const quotes = sortAscending ? props.quotes : props.quotes.sort((el1, el2) => {
    if (el1.text > el2.text) {
      return 1;
    } else {
      if (el1.text < el2.text) {
        return -1;
      } else return 0;
    }
  });

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {sortAscending ? 'Ascending' : 'Descending'}</button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
