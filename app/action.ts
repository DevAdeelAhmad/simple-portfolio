//For posting the data from guestbook to server
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";

export async function postEntry(formdata: FormData) {
  "use server";

  const data = await prisma.guestBook.create({
    data: {
      message: formdata.get('entry') as string,
      username: "hello",
    },
  });

  revalidatePath('/guestbook')
}
