import randomWords from 'random-words';

export async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(req, res) {
  if (req.query.delay) await delay(req.query.delay);

  res.status(200).json({ name: randomWords({ exactly: 3, join: ' ' }) });
}
