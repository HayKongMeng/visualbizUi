import Image from 'next/image';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className="px-2">
          <button
            onClick={() => onPageChange(i)}
            className={`w-14 h-14 rounded-md border ${i === currentPage ? 'border-[#6D9773] bg-primary text-white' : 'bg-[#F5F5F5] hover:border-cyan-500 hover:text-indigo-500'}`}
          >
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="inline-flex rounded-xl w-full text-normal justify-end mt-3 absolute bottom-11 right-14">
      <ul className="flex items-center">
        <li className="px-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="w-14 h-14 flex items-center justify-center rounded-md border disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              <Image
                className="rotate-180"
                src="/images/service_provider/icon/arrow_right.svg"
                alt="Previous"
                width={10}
                height={10}
              />
            </span>
          </button>
        </li>
        {renderPageNumbers()}
        <li className="px-2">
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="w-12 h-12 flex items-center justify-center rounded-md border hover:text-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              <Image
                src="/images/service_provider/icon/arrow_right.svg"
                alt="Next"
                width={10}
                height={10}
              />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
