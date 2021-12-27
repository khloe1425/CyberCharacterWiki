import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ info, pageNumber, setPageNumber }) {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimension = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension);
    }, [])

    return (
        <>
            <style jsx="true">
                {`
                    @media (max-width: 576px){
                        .prev, .next{
                            display:none;
                        }
                        .pagination{
                            font-size: 14px;    
                        }
                    }
                `}
            </style>
            <ReactPaginate
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                onPageChange={data => setPageNumber(data.selected + 1)}
                pageCount={info?.pages}
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                className="pagination justify-content-center gap-4 my-4"
                breakLabel="..."
                previousLabel="Prev"
                nextLabel="Next"
                previousClassName="btn btn-primary prev"
                nextClassName="btn btn-primary next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="text-white text-decoration-none"
                nextLinkClassName="text-white text-decoration-none"
                activeClassName="active"
            />
        </>
    )
}

export default Pagination;
