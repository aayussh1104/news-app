import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) =>{
    const {category, searchTerm} = props;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    const {newsData, loading, error} = useNewsData(category, searchTerm); 
    if(loading){
        return <div className="text-center mt-5 loading-animation"></div>;
    }

    if(error){
        return <div>Error: {error.message}</div>;
    }

    // page slider

    const totalArticles = newsData.length;
    const totalPages = Math.ceil(totalArticles / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = (startIndex + pageSize);
    const currentArticle = newsData.slice(startIndex, endIndex);

    // returns cards that contain news infromation

    return (
        <Container>
        <Row>
            {currentArticle?.map((article) => (
                <Col xs={12} md={6} lg={4} key={article.url} className="d-flex">

                    <Card className="custom-card flex-grow-1">
                        <Card.Img src={article.image} variant="top"/>

                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{article.title}</Card.Title>

                            <Card.Text>{article.description}</Card.Text>

                            <Card.Link href={article.url} className="btn btn-primary mt-auto">Read More</Card.Link>
                        </Card.Body>

                    </Card>
                </Col>
            ))}
        </Row>


        <CustomPagination 
        currentPage={currentPage} 
        totalPages={totalPages}
        onPageChange={onPageChange}
        />
    </Container>
    );
    
}

export default NewsList;