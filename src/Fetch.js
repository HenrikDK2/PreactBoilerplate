export default async (resource, options) => {
  const data = await fetch(process.env.API_ENDPOINT + resource, options).then((res) => res.json());
  return data;
};
