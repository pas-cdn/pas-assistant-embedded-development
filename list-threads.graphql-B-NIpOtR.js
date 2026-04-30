import { b as i, a as e } from "./embed-entry-Ba0tPvER.js";
const a = {
  assistants: [],
  selectedAssistantId: void 0,
  isLoading: !0
}, n = i()((t) => ({
  ...a,
  actions: {
    setAssistants: (s) => t({ assistants: s, isLoading: !1 }),
    setSelectedAssistantId: (s) => t({ selectedAssistantId: s }),
    clearAssistants: () => t(a)
  }
})), d = () => n((t) => t.assistants), r = () => n((t) => t.actions), I = e`
  query ThreadMessagesList($token: String!, $threadId: ID!, $assistantId: ID!) {
    threadMessagesList(token: $token, threadId: $threadId, assistantId: $assistantId) {
      id
      assistantId
      title
      isFavorite
      messages {
        id
        role
        runId
        sequence
        isActive
        editedFromId
        createdAt
        updatedAt
        content {
          __typename
          ... on AGUITextContentItem {
            type
            text
          }
          ... on AGUIBinaryContentItem {
            type
            id
            mimeType
            filename
          }
          ... on AGUIReasoningContentItem {
            type
            text
            source
          }
          ... on AGUIToolInvocationContentItem {
            type
            toolCallId
            toolName
            state
            input
            approval
            output
            errorText
          }
          ... on AGUIVideoContentItem {
            type
            id
          }
        }
        artifacts {
          id
          messageId
          artifactType
          artifactId
          artifactMetadata
          displayOrder
          createdAt
        }
      }
    }
  }
`, c = e`
  query ThreadsByAssistant($token: String!, $assistantId: ID!, $pagination: PaginationInput) {
    threadsByAssistant(token: $token, assistantId: $assistantId, pagination: $pagination) {
      currentPage
      totalPages
      totalRows
      perPage
      page {
        id
        title
        assistantId
        isFavorite
        createdAt
        updatedAt
      }
    }
  }
`;
export {
  I as G,
  r as a,
  c as b,
  d as c,
  n as u
};
