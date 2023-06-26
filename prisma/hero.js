import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addHero = async (hero_title, hero_description, hero_image) => {
  const hero = await prisma.hero.create({
    data: {
      hero_title,
      hero_description,
      hero_image,
    },
  });
  return hero;
};

export const editHero = async (
  heroId,
  hero_title,
  hero_description,
  hero_image
) => {
  const updatedHero = await prisma.hero.update({
    where: {
      id: heroId,
    },
    data: {
      hero_title,
      hero_description,
      hero_image,
    },
  });

  return updatedHero;
};
