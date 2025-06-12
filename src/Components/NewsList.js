import { useState } from "react";
import "../App.css";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div className="text-center mt-5 loading-animation"></div>;
  }

  if (error) {
    return <div className="text-red-600 text-center">Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticle = newsData.slice(startIndex, endIndex);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticle?.map((article) => (
          <div key={article.url} className="flex">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{article.description}</p>
                <a
                  href={article.url}
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default NewsList;