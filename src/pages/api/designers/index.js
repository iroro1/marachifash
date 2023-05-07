// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { main } from "@/database/connection";
import { DesignerModel } from "@/database/schema";

export default async function handler(req, res) {
  main().catch((err) => console.log(err));

  if (req.method === "POST") {
    // Working
    const designer = new DesignerModel(req.body);
    designer.save().then(() => {
      res.status(200).json(designer);
    });
  } else if (req.method === "GET") {
    const designer = DesignerModel;

    try {
      const list = await designer.find({});
      res
        .status(200)
        .json({ data: list, count: list.length, message: "Success" });
    } catch (error) {
      res.json({ error: error.err });
    }
  }
}
const recall = (rq, rs) => handler(rq, rs);
