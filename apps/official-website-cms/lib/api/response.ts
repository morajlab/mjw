import type { NextApiResponse } from 'next';

export interface IErrorResponseProps {
  response: NextApiResponse<{ type: 'error'; content: string | Error }>;
  error: Error;
}

export interface ISuccessResponseProps<ContentType> {
  response: NextApiResponse<{ type: 'success'; content: ContentType }>;
  content: ContentType;
  extraFields?: Object;
}

export const errorResponse = ({ response, error }: IErrorResponseProps) => {
  response.status(500).json({
    type: 'error',
    content: error.message,
  });
};

export const successResponse = <ContentType>({
  response,
  content,
  extraFields = {},
}: ISuccessResponseProps<ContentType>) => {
  response.status(200).json({
    type: 'success',
    content,
    ...extraFields,
  });
};
