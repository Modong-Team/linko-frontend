type MainPageProps = {
	applicationId: number;
};

type MainPageButtonsProps = {
	currentPage: number;
	totalPages: number;
	onChangePage: (page: number) => void;
};
