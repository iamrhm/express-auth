import Joi from '@hapi/joi';

export const CommentSerializer = Joi.object({
  post: Joi.string().required(),
  creator: Joi.string(),
  content: Joi.string().min(3).required(),
});
