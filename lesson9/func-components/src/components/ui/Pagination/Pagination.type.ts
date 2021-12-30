export type PaginationPropType = {
    className?: string;
    currentPage: number;
    totalPages: string;
    setPage: (i: number) => void;
    onPrevClick: () => void;
    onNextClick: () => void;
}