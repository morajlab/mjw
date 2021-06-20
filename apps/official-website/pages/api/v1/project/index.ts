import { getAllPosts, errorResponse, successResponse } from '../../../../lib/.';
import type { IProjectPost } from '../../../../types/project';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, response: NextApiResponse) => {
  try {
    const content = getAllPosts(['slug', 'title', 'coverImage', 'excerpt']);

    successResponse<Partial<IProjectPost>[]>({
      response,
      content,
      extraFields: {
        projectsCount: content.length,
      },
    });
  } catch (error) {
    errorResponse({ response, error });
  }
};
