import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addContact = async (
  facebook,
  instagra,
  linkedin,
  phone,
  email
) => {
  const contact = await prisma.contact.create({
    data: {
      facebook,
      instagra,
      linkedin,
      phone,
      email,
    },
  });
  return contact;
};

export const editContact = async (
  facebook,
  instagra,
  linkedin,
  phone,
  email
) => {
  const updatedContact = await prisma.contact.update({
    where: {
      id: contactId,
    },
    data: {
      facebook,
      instagra,
      linkedin,
      phone,
      email,
    },
  });

  return updatedContact;
};
