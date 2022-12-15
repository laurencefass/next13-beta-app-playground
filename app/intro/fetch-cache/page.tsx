import { Suspense } from 'react';
export default async function Page() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ForceCache />

      {/* @ts-expect-error Async Server Component */}
      <RevalidateInterval />

      {/* @ts-expect-error Async Server Component */}
      <NoCache />

      {/* @ts-expect-error Async Server Component */}
      <Parallel />
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

async function getUsers() {
  const users = await fetch('http://localhost:3201/api/mydata?delay=1000&id=5');
  return await users.json();
}

async function getPosts() {
  const posts = await fetch('http://localhost:3201/api/mydata?delay=6000&id=6');
  return await posts.json();
}

export async function Parallel() {
  return (
    <>
      <h2>parallel data fetching waiting for multiple promises</h2>
      <Suspense fallback={<Loader name="parallel data fetching" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item5 />
      </Suspense>
    </>
  );
}

export async function Item5() {
  const userData = await getUsers();
  const postData = await getPosts();

  const [users, posts] = await Promise.all([userData, postData]);

  return (
    <div className="item">
      <h2>Parallel data fetching</h2>
      <p>Users: {users.name} </p>
      <p>Posts: {posts.name} </p>
    </div>
  );
}

export async function ForceCache() {
  return (
    <>
      <h2>Default behaviour - forced cacheing</h2>
      <Suspense fallback={<Loader name="quick data" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item1 />
      </Suspense>
      <Suspense fallback={<Loader name="slow data" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item2 />
      </Suspense>
    </>
  );
}

async function Item1() {
  const result = await fetch(
    'http://localhost:3201/api/mydata?delay=1000&id=1',
    { cache: 'force-cache' },
  );
  const mydata = await result.json();
  return (
    <div className="item">
      <h2>{mydata.name}</h2>
    </div>
  );
}

async function Item2() {
  const result = await fetch(
    'http://localhost:3201/api/mydata?delay=2000&id=2',
    { cache: 'force-cache' },
  );
  const mydata = await result.json();
  return (
    <div className="item">
      <h2>{mydata.name}</h2>
    </div>
  );
}

export async function RevalidateInterval() {
  return (
    <>
      <h2>revalidate at specific interval</h2>
      <Suspense fallback={<Loader name="revalidate at interval" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item3 />
      </Suspense>
    </>
  );
}

async function Item3() {
  const result = await fetch(
    'http://localhost:3201/api/mydata?delay=3000&id=3',
    { next: { revalidate: 1 } },
  );
  const mydata = await result.json();
  return (
    <div className="item">
      <h2>{mydata.name}</h2>
    </div>
  );
}

export async function NoCache() {
  return (
    <>
      <h2>Fetch data refresh on every fetch</h2>
      <Suspense fallback={<Loader name="force no cache" />}>
        {/* @ts-expect-error Async Server Component */}
        <Item4 />
      </Suspense>
    </>
  );
}

async function Item4() {
  const result = await fetch(
    'http://localhost:3201/api/mydata?delay=4000&id=4',
    { cache: 'no-store' },
  );
  const mydata = await result.json();
  return (
    <div className="item">
      <h2>{mydata.name}</h2>
    </div>
  );
}
