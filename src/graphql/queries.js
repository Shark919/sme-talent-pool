/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
      id
      userId
      postId
      createdAt
      updatedAt
    }
  }
`;
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
