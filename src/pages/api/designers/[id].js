// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { main } from "@/database/connection";
import { DesignerModel } from "@/database/schema";

// git lfs migrate
export default async function handler(req, res) {
  main()
    .then((s) => {
      console.log(s, "YESSSS");
    })
    .catch((err) => console.log(err, "NOOOOOOO"));

  const { id } = req.query || "6452b6f9ccd386cadf9b8c56";
  console.log(id, "ID");

  if (req.method === "POST") {
    // TODO: UPDATE
    const designer = new DesignerModel(req.body);
    designer.save().then(() => {
      res.status(200).json(designer);
    });
  } else if (req.method === "GET") {
    const designer = DesignerModel;
    try {
      const item = await designer.findById(id).exec();
      console.log(item);
      res.status(200).json({ data: item, message: "Success" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
