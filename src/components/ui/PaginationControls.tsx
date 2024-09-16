import React from 'react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  visiblePages?: number;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  visiblePages = 5,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-6 space-x-2">
      {/* Prev Button */}
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`px-3 py-1 border rounded-lg ${
          currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'
        }`}
      >
        Prev
      </button>

      {/* First Page */}
      {currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-1 border rounded-lg text-blue-500"
          >
            1
          </button>
          <span className="px-2">...</span>
        </>
      )}

      {/* Visible Pages */}
      {getVisiblePages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded-lg ${
            currentPage === page ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {currentPage < totalPages - 2 && (
        <>
          <span className="px-2">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 border rounded-lg text-blue-500"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border rounded-lg ${
          currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'
        }`}
      >
        Next
      </button>
    </div>
  );
};
