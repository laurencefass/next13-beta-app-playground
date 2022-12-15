export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Intro',
    items: [
      {
        name: 'Server component',
        slug: 'intro/basic-sc',
        description: 'Basic server side component',
      },
      {
        name: 'With file',
        slug: 'intro/with-file',
        description: 'Server side component reading directly from file',
      },
      {
        name: 'With children',
        slug: 'intro/with-children',
        description: 'Server side component rendering children',
      },
      {
        name: 'With error',
        slug: 'intro/with-error',
        description: 'Triggering error boundaries',
      },
      {
        name: 'route groups',
        slug: 'intro/route-groups',
        description: 'layout grouping with route groups',
      },
      {
        name: 'With props',
        slug: 'intro/with-props',
        description: 'Server side component rendering props',
      },
      {
        name: 'suspense',
        slug: 'intro/suspense',
        description: 'basic async suspense demo',
      },
      {
        name: 'fetch cacheing',
        slug: 'intro/fetch-cache',
        description: 'fetch cacheing',
      },
      {
        name: 'nested suspense',
        slug: 'intro/nested-suspense',
        description: 'nested async suspense demo',
      },
    ],
  },
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create error UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Static-Site Generation',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Server-Side Rendering',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      // TODO: Re-add this page once hooks have been updated.
      // {
      //   name: 'Hooks',
      //   slug: 'hooks',
      //   description:
      //     'Preview the hooks available for Client and Server Components',
      // },
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Styling',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];
