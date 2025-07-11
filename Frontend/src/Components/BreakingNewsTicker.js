import useBreakingNews from "../hooks/breakingNews";

const BreakingNewsTicker = () => {
    const headlines = useBreakingNews();

    return (
        <div className="bg-gray-900 text-white rounded-lg shadow p-3 sm:p-4 space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold border-b border-gray-700 pb-2">
                🚨 Breaking News
            </h3>
            {headlines.length === 0 ? (
                <p className="text-sm text-gray-300">Loading latest headlines...</p>
            ) : (
                headlines.map((news) => (
                    <a
                        key={news.url}
                        href={news.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded transition duration-150 ease-in-out"
                    >
                        <span className="text-sm sm:text-base">{news.title}</span>
                    </a>
                ))
            )}
        </div>
    );
};

export default BreakingNewsTicker;
