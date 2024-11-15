import sdk from "node-appwrite";

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_PROJECT!)
  .setKey(process.env.APPWRITE_API_KEY!);
const database = new sdk.Databases(client);
export default database;
