import React from 'react';
import { Card, Heading } from '@8base/boost';
import gql from 'graphql-tag';
import { useSubscription, useQuery } from 'react-apollo';

const abc = gql `subscription {
    Posts(filter: {mutation_in: update}) {
      node {
        body
        title
      }
      updatedFields
    }
}`;

const CURRENT_USER_QUERY = gql`
  query MyQuery {
    user {
      id
      roles {
        items {
          name
          id
        }
      }
    }
  }
`;

const Brokers = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  console.log(data);

  useSubscription(abc, {
    onSubscriptionData: async ({ subscriptionData }) => {
      console.log(subscriptionData);
    },
  });
  return (
    <Card padding="md" stretch>
      abc
    </Card>
  );
};

export { Brokers };
