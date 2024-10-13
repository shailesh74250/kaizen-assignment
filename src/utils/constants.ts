export const APP_HEADING = 'Kaizen Assignment';
export const USER_LIST = 'Users List';
export const USER_DETAILS = 'User Details';
export const NO_DATA_FOUND = 'No Data Found!';
export const SOMETHING_WENT_WRONG = 'Something went wrong!';
export const PAGE_NOT_FOUND = 'Page not found!';
export const GO_BACK_HOME = 'Go Back To Home Page';
export const MOCK_USER = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  company: {
    name: 'Tech Corp',
    title: 'Software Engineer',
    department: 'Engineering',
    address: {
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      postalCode: '10001',
    }
  } 
};
export const USER_TABLE_COLUMN = [
  { Header: 'First Name', accessor: 'firstName' },
  { Header: 'Last Name', accessor: 'lastName' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Company Name', accessor: 'company.name' },
];