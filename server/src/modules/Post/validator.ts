import Joi from '@hapi/joi';

export const PostSerializer = Joi.object({
  title: Joi.string().min(3).required(),
  comments: Joi.array(),
  creator: Joi.string(),
  content: Joi.string().min(3).required(),
});
