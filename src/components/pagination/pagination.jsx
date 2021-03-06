import "./pagination.css"

export const Pagination = ({ perPage, postsLength, paginate }) => {
    const pageNumbers = []
    for(let i=1; i<=Math.ceil(postsLength/perPage); i++ ) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button type="click" onClick={() => paginate(number)} className="page-link" >{number}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )               
}