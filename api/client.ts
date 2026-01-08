import { GraphQLClient } from "graphql-request";

const GRAPHQL_API_ENDPOINT = `https://beta.pokeapi.co/graphql/v1beta`;

export const graphQLClient = new GraphQLClient(GRAPHQL_API_ENDPOINT);
