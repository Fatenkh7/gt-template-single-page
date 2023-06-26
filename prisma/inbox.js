import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addInbox = async (
  first_name,
  last_name,
  email_from,
  email_to,
  message
) => {
  const inbox = await prisma.inbox.create({
    data: {
      first_name,
      last_name,
      email_from,
      email_to,
      message,
    },
  });
  return inbox;
};

export const getById = async (id) => {
  const inbox = await prisma.inbox.findUnique({
    where: { id: id },
  });
  return inbox;
};

export const getAllInbox = async () => {
  const inboxs = await prisma.inbox.findMany({
    orderBy: [
      {
        email_to: "asc",
      },
      { first_name: "asc" },
      { last_name: "asc" },
      { id },
    ],
  });
  return inboxs;
};

export const deleteInbox = async (id) => {
  const deleteInbox = await prisma.contact.delete({
    where: {
      id: id,
    },
  });

  return deleteInbox;
};
