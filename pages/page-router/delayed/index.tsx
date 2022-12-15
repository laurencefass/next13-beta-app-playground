import { quartersInYear } from 'date-fns/esm/fp';

export async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getServerSideProps(context) {
  let wait = context?.query?.wait;
  await delay(wait);
  console.log('test');

  return {
    props: {
      user: 'user name',
      email: 'user@domain.com',
      contact: '1234 5678',
    },
  };
}

export default function Page(props) {
  return (
    <>
      <h1>Delayed page</h1>
      <p>Page renders props from server with getServerSideProps</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}
