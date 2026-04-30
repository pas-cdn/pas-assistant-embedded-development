import { y as l, z as d } from "./embed-entry-DNbXY835.js";
import { u } from "./list-threads.graphql-Dq-RIEMK.js";
const P = l`
  query GetUserPermissions($token: String!, $userId: ID!) {
    getUserPermissions(token: $token, userId: $userId) {
      userId
      accountId
      isAdmin
      permissions {
        solutionId
        solutionType
        features
      }
    }
  }
`;
l`
  query GetUserSolutionPermissions(
    $token: String!
    $userId: ID!
    $solutionId: ID!
    $solutionType: SolutionType
  ) {
    getUserSolutionPermissions(
      token: $token
      userId: $userId
      solutionId: $solutionId
      solutionType: $solutionType
    ) {
      userId
      accountId
      isAdmin
      permissions {
        solutionId
        solutionType
        features
      }
    }
  }
`;
const a = {
  userPermissions: null,
  isLoading: !1,
  error: null
}, o = d()((s) => ({
  ...a,
  actions: {
    setPermissions: (n) => s({
      userPermissions: n,
      isLoading: !1,
      error: null
    }),
    clearPermissions: () => s({
      userPermissions: null,
      error: null
    }),
    setLoading: (n) => s({ isLoading: n }),
    setError: (n) => s({ error: n, isLoading: !1 })
  }
})), c = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch {
      return {};
    }
  return s;
}, p = () => o((s) => s.userPermissions?.isAdmin ?? !1), f = () => {
  const s = o((i) => i.userPermissions), n = u((i) => i.assistants), r = u(
    (i) => i.selectedAssistantId
  );
  if (!s || !r)
    return null;
  const e = n.find((i) => i.id === r);
  if (!e?.solutionId)
    return null;
  const t = s.permissions.find(
    (i) => i.solutionId === e.solutionId
  );
  return t ? {
    userId: s.userId,
    accountId: s.accountId,
    solutionId: e.solutionId,
    solutionType: t.solutionType,
    isAdmin: s.isAdmin,
    features: c(t.features)
  } : null;
}, S = () => o((s) => s.isLoading), g = () => o((s) => s.actions);
export {
  P as G,
  f as a,
  S as b,
  p as c,
  g as u
};
