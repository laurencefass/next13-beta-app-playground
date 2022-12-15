import { Client } from './client';
import { Server } from './server';

export default function () {
  console.log('parent rendering on the server');
  return (
    <>
      <h1>Parent Server Component</h1>
      <p>I can pass components to server and client components</p>
      <Client value="hello" />
      <Server value="world" />
    </>
  );
}
