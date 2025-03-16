import { Pagination } from "react-bootstrap";

function CustomPagination(props) {
    const {currentPage, totalPages, onPageChange} = props;

    const handleNextPrev = (pageNumber) => {
        onPageChange(pageNumber)
    }

    const renderPageItems = () => {
        const pageItems = [];

        for(let i = 1; i <= totalPages; i++){
            pageItems.push(
                <Pagination.Item key={i} active={i === currentPage} 
                    onClick = {() => onPageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        };

        return pageItems;
    };

    return <div className="d-flex justify-content-center">
        <Pagination>
            <Pagination.Prev disabled={currentPage === 1} 
                onClick={() => handleNextPrev(currentPage - 1)}
            />
                {renderPageItems()}
            <Pagination.Next disabled={currentPage === totalPages} 
                onClick={() => handleNextPrev(currentPage + 1)}
            />
        </Pagination>
    </div>
}

export default CustomPagination;