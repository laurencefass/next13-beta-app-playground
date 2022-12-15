import Link from 'next/link';
import { ClickCounter } from '#/ui/ClickCounter';

export default function Layout({ children }) {
  let count = 0;
  const links = ['checkout', 'shop', 'blog', 'news'];

  return (
    <>
      <div className="red">
        {/* <ClickCounter /> */}
        <div className="nav">
          <Link href={`/intro/route-groups`}>home</Link>
          {links.map((link: string) => (
            <Link href={`/intro/route-groups/${link}`}>{link}</Link>
          ))}
        </div>
        <h4>Template content persists across all sub-routes</h4>
        {children}
      </div>
    </>
  );
}
