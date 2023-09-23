import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilms,
  searchFilm,
  selectFilms,
  selectStatus,
  selectValue
} from './counterSlice';
import './Counter.scss';
import Film from '../../components/film/Film';
import { useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import { Skeleton, Stack } from '@mui/material';
import Header from '../../components/header/Header';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

export function Counter() {
  const films = useSelector(selectFilms);
  const value = useSelector(selectValue);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const {category} = useParams();
  
  useEffect(()=>{
    if(value){
      setCurrentPage(1);
    }
  },[value])

  useEffect(()=>{   
    window.scrollTo(0, 0);
    if(value){
      console.log(value,currentPage)
      dispatch(searchFilm({value:value, pageNumber:currentPage})); 
    }else{
      dispatch(getFilms({pageNumber:currentPage,category: category}));
    }
  },[value,category,currentPage])

  const skeletonArray = Array.from({ length: 20 });

    return (
    <>
    <Header />
    <Search />
    {
      status === 'loading' ? 
      <div className='filmInfo'>
        <Stack spacing={0.5}>
          {skeletonArray.map((index,i) => (
            <React.Fragment key={Math.random() * 100 * i}>
              <Skeleton variant="rectangular" width={250} height={350} />
              <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
            </React.Fragment>
          ))} 
          </Stack> 
      </div>
      :
      films && films.length !== 0 ? //checks if films is not null or undefined or 0 before checking length of films so code is not executed if films is null
      <>
        <div className = 'filmInfo'>
          {films.map((film)=>{
            return(
              <Film movie={film} key={film.id}/> 
            )
          })} 
        </div> 
        <ResponsivePagination
          current={currentPage}
          total={50}
          nextLabel=">>"
          previousLabel="<<"
          breakLabel="..."
          renderOnZeroPageCount={null}
          onPageChange={setCurrentPage}
          className="pagination"
          activeClassName="active-page"
          previousClassName="previous-page"
          nextClassName="next-page"
        />
      </>
      :
      <span>No result...</span>
    }
  </>
  );

};