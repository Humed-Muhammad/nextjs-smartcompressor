import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/db';
import { CompressedResultTypes } from '@/utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const compressedImages: CompressedResultTypes[] = req.body;
      const result = compressedImages.map(async (image) => {
        await prisma.images.create({
          data: {
            ...image,
            compressedImage: Buffer.from(
              JSON.stringify(image?.compressedImage)
            ),
          },
        });
      });

      return res.json(result);
    } catch ({ message }) {
      throw new Error(`Faild to save image: ${message}`);
    }
  } else if (req.method === 'GET') {
    return prisma.images.findMany();
  }
  return false;
}
