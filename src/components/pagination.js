"use client";

export default function Pagination({ totalRows = 0, rowsPerPage = 7, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange?.(page); // parent yang handle state
        }
    };

    return (
        <div className="flex justify-center items-center gap-3 mt-10">
            {/* Prev */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`cursor-pointer w-12 h-12 flex items-center justify-center border rounded-sm transition 
                ${
                    currentPage === 1
                        ? "text-gray-400 border-gray-200"
                        : "hover:bg-gray-100 hover:text-background"
                }`}
            >
                «
            </button>

            {/* Page Numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`cursor-pointer w-12 h-12 flex items-center justify-center border rounded-sm transition font-semibold
            ${
                currentPage === page
                    ? "text-white border-background"
                    : "hover:bg-gray-100 hover:text-background"
            }`}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`cursor-pointer w-12 h-12 flex items-center justify-center border rounded-sm transition 
                ${
                    currentPage === totalPages
                        ? "text-gray-400 border-gray-200"
                        : "hover:bg-gray-100 hover:text-background"
                }`}
            >
                »
            </button>
        </div>
    );
}
