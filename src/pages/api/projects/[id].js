// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDatabase from "@/utils/db"
import Project from "@/models/project"

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        await connectToDatabase();
      
        try {
          const { id } = req.query;
          await Project.findByIdAndDelete(id);
          res.status(204).end();
        } catch (error) {
          res.status(500).json({ error: 'Something went wrong.' });
        }
    }
    if (req.method === 'PUT') {
        await connectToDatabase();

        try {
            const { id } = req.query;
            const { title, detail, img, repo, prev } = req.body;
        
            if (!id) {
                return res.status(400).json({ error: 'Missing project ID.' });
            }
        
            if (!title && !detail && !img && !repo && !prev) {
                return res.status(400).json({ error: 'Need at least 1 field to update.' });
            }
        
            const updatedProject = await Project.findByIdAndUpdate(
                id,
                { title, detail, img, repo, prev },
                { new: true } // To return the updated document instead of the original one
            );
        
            res.status(200).json(updatedProject);
        }
        catch (error) {
            res.status(500).json({ error: 'Something went wrong.' });
        }
    }
    else {
        res.status(405).end(); // Method Not Allowed
    }
}