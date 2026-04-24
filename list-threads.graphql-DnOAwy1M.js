import { z as n, y as e } from "./embed-entry-B68VGA8B.js";
const a = {
  assistants: [],
  selectedAssistantId: void 0,
  isLoading: !0
}, i = n()((t) => ({
  ...a,
  actions: {
    setAssistants: (s) => t({ assistants: s, isLoading: !1 }),
    setSelectedAssistantId: (s) => t({ selectedAssistantId: s }),
    clearAssistants: () => t(a)
  }
})), o = () => i((t) => t.assistants), r = () => i((t) => t.actions), c = e`
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
          type
          text
          id
          name
          mimeType
          filename
          source
          toolCallId
          toolName
          state
          input
          approval
          output
          errorText
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
`, I = e`
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
  c as G,
  r as a,
  I as b,
  o as c,
  i as u
};
