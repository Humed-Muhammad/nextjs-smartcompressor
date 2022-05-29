import { prisma } from '@/db';

export default async function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    // @ts-ignore
    const images: { compressedImages: Buffer; id?: string } = req.body;

    const result = await prisma.images.create({
      data: {
        ...images,
        compressedImages: Buffer.from(images.compressedImages),
      },
    });
    if (result) {
      // @ts-ignore
      return res.json(true);
    }
  } else if (req.method === 'GET') {
    return prisma.images.findMany();
  }
  return false;
}
