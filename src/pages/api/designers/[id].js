// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DesignerModel, { designerModelDB } from "@/database/schema";
import { main } from "@/database/connection";

// git lfs migrate
export default async function handler(req, res) {
  main().catch((err) => console.log(err));

  const { id } = req.query || "6452ccdcccd386cadf9b8cae";
  console.log(id, "ID");

  if (req.method === "POST") {
    // TODO: UPDATE
    const designer = new DesignerModel(req.body);
    designer.save().then(() => {
      res.status(200).json(designer);
    });
  } else if (req.method === "GET") {
    const designer = designerModelDB;
    try {
      const item = await designer.findById(id).exec();
      console.log(item);
      res.status(200).json({ data: item, message: "Success" });
    } catch (error) {
      res.status(res.status).json({ error: error });
    }
  }
}
