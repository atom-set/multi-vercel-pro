import { json, LoaderFunction, useLoaderData } from 'remix';

export const loader: LoaderFunction = async () => {
  return json({ message: "Hello from Remix" });
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
