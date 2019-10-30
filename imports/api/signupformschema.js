//our uniforms schema
import SimpleSchema from 'simpl-schema';

import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
const ajv = new Ajv({ allErrors: false, useDefaults: true });

const schema = {
  title: 'Guest',
  type: 'object',
  properties: {
    email: { type: 'string' },
    // firstname: { type: 'string' },
    // lastname: { type: 'string'},
    
    // reemail: { type: 'string' },
    password: {
      type: 'string',
      uniforms: {
        type: 'password'
      }
    },
    // repassword: {
    //   type: 'string',
    //   errorMessage: {
    //     type: 'Passwords doesnt match'
    //   },
    //   const: { $data: '1/password' },
    //   uniforms: {
    //     type: 'password'
    //   }
    // },
    // acceptTermsOfUse: { type: 'boolean' }
  },
  required: [
    // 'firstname',
    'email',
    // 'reemail',
    'password',
    // 'repassword',
    // 'acceptTermsOfUse'
  ]
};
function createValidator(schema) {
  const validator = ajv.compile(schema);
  return model => {
    validator(model);
    if (validator.errors && validator.errors.length) {
      throw { details: validator.errors };
    }
  };
}
const schemaValidator = createValidator(schema);
export default new JSONSchemaBridge(schema, schemaValidator);