import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="space-y-4 max-w-md">
        <span className="text-6xl font-ext500 font-black text-indigo-600 tracking-wider">
          404
        </span>
        
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Page Not Found
        </h1>
        
        <p className="text-base text-slate-600">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            GoBack Home
          </Link>
        </div>
      </div>
    </main>
  );
};