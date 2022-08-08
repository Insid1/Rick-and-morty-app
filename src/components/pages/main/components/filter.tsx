import React, { useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';
import { fetchEpisodesWithQuery } from '../../../../store/episodes/thunks';
import { useAppDispatch } from '../../../../store/hooks';
import TextfieldFilter from '../../../common/UI/textfield-filter/textfield-filter';
import { createQueryForEpisode } from '../../../../utils/episode';

function Filter() {
  const dispatch = useAppDispatch();

  const filter = async (inputText: string) => {
    const queryString = createQueryForEpisode(inputText);
    await dispatch(fetchEpisodesWithQuery(queryString));
  };

  // to don\'t recreate debounced function on everyRender
  const debouncedFilter = useRef(
    debounce(async (queryString: string) => {
      await filter(queryString);
    }, 300),
  ).current;

  useEffect(() => (() => {
    debouncedFilter.cancel();
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFilter(e.target.value)?.catch(() => {});
  };

  return (
    <TextfieldFilter
      onChange={handleChange}
      label="Filter by name or episode (ex. S01 or S01E02)"
    />
  );
}

export default Filter;
