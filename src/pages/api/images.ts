// import { prisma } from '@/db';
// import { CompressedResultTypes } from '@/utils/types';

// export default function handler(req: Request, res: Response) {
//   if (req.method === 'POST') {
//     const images: CompressedResultTypes[] = req.body;
//     images.map(async (item) =>
//       prisma.images.create({
//         data: item,
//       })
//     );
//     return res.json({ saved: true });
//   }
// }
