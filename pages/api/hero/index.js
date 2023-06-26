import { addHero, editHero } from "@/prisma/hero";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST": {
        const { hero_title, hero_description, hero_image } = req.body;
        const new_hero = await addHero(
          hero_title,
          hero_description,
          hero_image
        );
        if (!new_hero) {
          res.status(402).json({
            status: "402",
            message: "Something Wrong!! ",
            error: error.message,
          });
        }
        return res
          .status(200)
          .json({ message: "Hero succesfully added", data: new_hero });
      }

      case "PUT": {
        const { id } = req.query;
        const { hero_title, hero_description, hero_image } = req.body;
        const updated_hero = await editHero(
          id,
          hero_title,
          hero_description,
          hero_image
        );
        if (!updated_hero) {
          res.status(402).json({
            status: "402",
            message: "Something went wrong",
          });
        }
        return res
          .status(200)
          .json({ message: "Hero successfully updated", data: updated_hero });
      }
    }
  } catch (error) {
    res.status(400).json({ status: "400", message: error.message });
  }
}
