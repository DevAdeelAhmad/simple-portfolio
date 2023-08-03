import { createClient } from "next-sanity";

const projectId = "";
const dataset = "";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
