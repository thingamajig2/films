export async function fetchFilms({pageNumber,category}) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${category === 'films' ? 'popular' : category}?api_key=5503f91f557746ba3ac3cbbfc5cba872&language=en-US&page=${pageNumber || "1"}`);
  const result = await data.json();
  return result.results;
}

export async function fetchSearch({value,pageNumber}) {
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=${pageNumber || "1"}&api_key=5503f91f557746ba3ac3cbbfc5cba872`);
  const result = await data.json();
  return result.results;
}

