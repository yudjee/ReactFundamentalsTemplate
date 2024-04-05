import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Courses } from '../components/Courses/Courses';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const store = mockStore({
	authors: [
		{
			id: 1,
			name: 'Test Name 1',
		},
		{
			id: 2,
			name: 'Test Name 2',
		},
	],
	courses: [
		{
			title: 'Test Title',
			description: 'Test Description',
			authors: [1, 2],
			duration: 60,
			creationDate: '20/03/2012',
			id: 1,
		},
		{
			title: 'Test Title 2',
			description: 'Test Description 2',
			authors: [1, 2],
			duration: 60,
			creationDate: '20/03/2012',
			id: 2,
		},
		{
			title: 'Test Title 3',
			description: 'Test Description 3',
			authors: [1, 2],
			duration: 60,
			creationDate: '20/03/2012',
			id: 3,
		},
	],
	user: {
		name: 'userName',
		role: 'admin',
	},
});

describe('Courses component', () => {
	test('should render list of courses with data-testid="courseCard" from store (use getCoursesSelector inside <Courses />)', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Courses />
				</MemoryRouter>
			</Provider>
		);

		const courseElements = screen.getAllByTestId('courseCard');

		expect(courseElements[0]).toBeInTheDocument();
		expect(courseElements).toHaveLength(3);
	});

	test('should render "ADD NEW COURSE" button as a <Link /> to="/courses/add"', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Courses />
				</MemoryRouter>
			</Provider>
		);

		const link = screen.queryByText(/add new/i).closest('a');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/courses/add');
	});

	test('should render EmptyCoursesList component if no courses with "ADD NEW COURSE" button with data-testid="addCourse" for admin', () => {
		const emptyStore = mockStore({
			authors: [],
			courses: [],
			user: {
				name: 'userName',
				role: 'admin',
			},
		});
		render(
			<Provider store={emptyStore}>
				<MemoryRouter>
					<Courses coursesList={[]} />
				</MemoryRouter>
			</Provider>
		);

		const emptyText = screen.queryByText(/your list Is empty/i);
		const addButtonElement = screen.getByTestId('addCourse');

		expect(emptyText).toBeInTheDocument();
		expect(addButtonElement).toBeInTheDocument();
	});
	test('should render EmptyCoursesList component if no courses with info about "permissions" and NOT render button with data-testid="addCourse"', () => {
		const emptyStore = mockStore({
			authors: [],
			courses: [],
			user: {
				name: 'userName',
			},
		});
		render(
			<Provider store={emptyStore}>
				<MemoryRouter>
					<Courses coursesList={[]} />
				</MemoryRouter>
			</Provider>
		);

		const emptyText = screen.queryByText(/permissions/i);
		const addButtonElement = screen.queryByTestId('addCourse');

		expect(emptyText).toBeInTheDocument();
		expect(addButtonElement).not.toBeInTheDocument();
	});
});
