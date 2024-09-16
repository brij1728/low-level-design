import React from 'react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
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

  return (
    <div className="flex justify-center mt-6">
      {currentPage > 1 && (
        <button
          onClick={handlePrevPage}
          className="p-2 mx-2 border rounded-lg text-blue-500"
        >
          Prev
        </button>
      )}

      {[...Array(totalPages).keys()].map((_, page) => (
        <button
          key={page}
          onClick={() => onPageChange(page + 1)}
          className={`p-2 mx-2 border rounded-lg ${
            currentPage === page + 1
              ? 'font-bold text-white bg-blue-500'
              : 'text-blue-500'
          }`}
        >
          {page + 1}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={handleNextPage}
          className="p-2 mx-2 border rounded-lg text-blue-500"
        >
          Next
        </button>
      )}
    </div>
  );
};
