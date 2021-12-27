import React, { useState, useEffect } from 'react';
import Filters from "../../components/Filters/Filters";
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Search from '../../components/Search/Search';

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [fetchedData, updateFetchedData] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const { info, results } = fetchedData;
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;
  
    useEffect(() => {
      (async function () {
        const data = await fetch(api).then(res => res.json());
        updateFetchedData(data);
      })();
    }, [api])
  
    return (
      <div className="App">
        <h1 className="text-center">Characters</h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch} />
  
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-5">
              <Filters setPageNumber={setPageNumber} setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} />
            </div>
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards page="" results={results} />
              </div>
            </div>
          </div>
        </div>
  
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    );
  }

export default Home
