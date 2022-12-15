import Error from './error';
import ErrorBoundary from 'next/error';

export default function Layout({ children }) {
  return (
    <>
      <div>
        <h2>Layout wrapper</h2>
        {children}
      </div>
    </>
  );
}
