//For posting the data from guestbook to server
"use server";

import { prisma } from "./db";

export async function postEntry(formdata: FormData) {
  "use server";

  const data = await prisma.guestBook.create({
    data: {
      message: formdata.get('entry') as string,
      username: "hello",
    },
  });
}
