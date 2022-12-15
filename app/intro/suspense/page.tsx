import { Suspense } from 'react';

export async function fetch(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  return (
    <>
      <h2>
        Data is fetched on the server and streamed to the client when its ready
        to render!
      </h2>
      <Suspense fallback={<Loader name="item 1" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item1 />
      </Suspense>
      <Suspense fallback={<Loader name="item 2" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item2 />
      </Suspense>
      <Suspense fallback={<Loader name="item 3" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item3 />
      </Suspense>
    </>
  );
}

function Loader({ name }) {
  return (
    <div className="loader item">
      <div>{name} loading</div>
    </div>
  );
}

async function Item1() {
  console.log('Item 1 rendering');
  await fetch(2000);
  return (
    <div className="item">
      <h2>Item 1</h2>
    </div>
  );
}

async function Item2() {
  await fetch(4000);
  return (
    <div className="item">
      <h2>Item 2</h2>
    </div>
  );
}

async function Item3() {
  await fetch(6000);
  return (
    <div className="item">
      <h2>Item 3</h2>
    </div>
  );
}
