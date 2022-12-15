const fs = require('fs');

export default function Page() {
  console.log(__dirname);
  const data = fs.readFileSync('app/intro/with-file/my.json', 'utf8');

  return (
    <>
      <h1>Serverside component file read demo</h1>
      <br />
      <p>
        Next JS 13 server side components enables system calls within components
      </p>
      <br />
      <p>
        This data is ready directly from a systefile. No more
        getServerSideProps.{' '}
      </p>
      <br />
      <pre>{data}</pre>
    </>
  );
}
