export default function () {
  console.log('server component loaded', Date.now().toString());
  return (
    <>
      <h1>This is a react server component </h1>
      <p>console.log renders to server, not browser</p>
    </>
  );
}
