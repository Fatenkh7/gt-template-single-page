import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addAbout = async (about_content, about_image) => {
  const about = await prisma.about.create({
    data: {
      about_content,
      about_image,
    },
  });
  return about;
};

export const editAbout = async (aboutId, about_content, about_image) => {
  const updatedAbout = await prisma.about.update({
    where: {
      id: aboutId,
    },
    data: {
      about_content,
      about_image,
    },
  });

  return updatedAbout;
};
