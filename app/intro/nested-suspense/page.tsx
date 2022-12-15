import { Suspense } from 'react';

export async function fetch(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  return (
    <div className="item">
      <h1>Nested Streaming Suspense demo</h1>
      <p>
        static data is available immediately no waiting for nested fetches to
        complete!
      </p>
      <Suspense fallback={<Loader name="item 3" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item3 />
      </Suspense>
    </div>
  );
}

function Loader({ name }) {
  return (
    <div className="loader item">
      <div>{name} loading</div>
    </div>
  );
}

async function Item3() {
  await fetch(3000);
  return (
    <>
      <div className="item">
        <h2>Item 3</h2>
        <p>
          Static Data and Components will load instantly - same as for Next 12!
        </p>
        <Suspense fallback={<Loader name="item 4" />}>
          {/* @ts-expect-error Async Server Component */}
          <Item4 />
        </Suspense>
        <Suspense fallback={<Loader name="item 4" />}>
          {/* @ts-expect-error Async Server Component */}
          <Item5 />
        </Suspense>
      </div>
    </>
  );
}

async function Item4() {
  await fetch(3000);
  return (
    <>
      <div className="item">
        <h2>Item 4</h2>
        <p>
          multiple async components wrapped in a single suspense boundary will
          render after the last one fulfils
        </p>
        <div className="item row">
          <Suspense fallback={<Loader name="items" />}>
            {/* @ts-expect-error Async Server Component */}
            <Item name={4.1} wait={3000} />
            {/* @ts-expect-error Async Server Component */}
            <Item name={4.2} wait={8000} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

async function Item5() {
  await fetch(3000);
  return (
    <>
      <div className="item">
        <h2>Item 5</h2>
        <p>
          multiple async components wrapped in separate suspense boundary will
          render independently
        </p>
        <div className="item row">
          <Suspense fallback={<Loader name="items" />}>
            {/* @ts-expect-error Async Server Component */}
            <Item name={5.1} wait={3000} />
          </Suspense>
          <Suspense fallback={<Loader name="items" />}>
            {/* @ts-expect-error Async Server Component */}
            <Item name={5.2} wait={6000} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

async function Item({ name, wait }) {
  await fetch(wait);
  return (
    <div className="item">
      <h2>Item {name}</h2>
    </div>
  );
}

async function Sidebar() {
  await fetch(10000);
  return (
    <div className="item">
      <h2>Sidebar</h2>
    </div>
  );
}
