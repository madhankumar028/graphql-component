import { chai } from 'chai';
import * as assert from 'assert';

import * as github from '../client/app.js';

describe('GraphQL test', function() {

    it('test for graphql user query', function() {

        let user = {
           madhankumar028: {
              id: 19890874,
              name: "Madhankumar",
              login: "madhankumar028",
              location: "Chennai",
              bio: "I am a passionate JavaScript developer  | Scotch Author",
              created_at: {
                 month: 6,
                 day: 12,
                 year: 2016,
                 format: "2016-06-12"
              }
           }
        };

        var actualUser = github.getUser();
        // assert.deepEqual(user, actualUser, 'both the users are not same');
    });
});
