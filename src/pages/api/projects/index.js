// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDatabase from "@/utils/db"
import Project from "@/models/project"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await connectToDatabase();

    try {
      const projects = await Project.find({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } if (req.method === 'POST') {
    await connectToDatabase();

    try {
      const {title, detail, img, repo, prev} = req.body
      if(!title || !detail || !img || !repo || !prev) res.status(400).json({error: "Missing required Fields."})
      const addedProject = await Project.create({title, detail, img, repo, prev})
      res.status(200).json(addedProject);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}