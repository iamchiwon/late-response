import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Images: a.model({
      title: a.string(),
      imageUrl: a.string(),
    })
    .authorization(allow => [allow.guest()])
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema
});