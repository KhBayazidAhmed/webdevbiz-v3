"use server";
import { contactCollectionID, dataBaseID } from "@/lib/config";
import database from "@/utils/db/appwrite";
import { ID } from "node-appwrite";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function CreateContact(_previous: any, formData: FormData) {
  const { name, email, subject, message } = Object.fromEntries(
    formData.entries()
  );
  try {
    await database.createDocument(
      dataBaseID,
      contactCollectionID,
      ID.unique(),
      { name, email, subject, message }
    );
    return {
      success: true,
      message: "Message Sent",
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
    return {
      success: false,
      message: "failed to send message",
    };
  }
}
