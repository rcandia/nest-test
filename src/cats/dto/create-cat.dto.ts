// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('joi');

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
