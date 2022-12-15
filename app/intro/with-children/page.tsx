import { Client } from './client';
import { Server } from './server';

export default function () {
  console.log('I am a parent (page) server component');
  return (
    <>
      <h1>Parent (page) Server Component</h1>
      <p>I render on the server. Check the server console log!</p>
      <br />
      <Client />
      <Server />
    </>
  );
}
