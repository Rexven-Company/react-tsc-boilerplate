let API_URL: string;

if (process.env.REACT_APP_ENV === 'production') {
  API_URL = process.env.REACT_APP_BASE_URL_PROD!;
} else if (process.env.REACT_APP_ENV === 'test') {
  API_URL = process.env.REACT_APP_BASE_URL_TEST!;
} else if (process.env.REACT_APP_ENV === 'development') {
  API_URL = process.env.REACT_APP_BASE_URL_DEV!;
}

export default API_URL!;
