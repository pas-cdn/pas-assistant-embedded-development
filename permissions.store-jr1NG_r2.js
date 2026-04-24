import { y as l, z as d } from "./embed-entry-B68VGA8B.js";
import { u } from "./list-threads.graphql-DnOAwy1M.js";
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
}, e = d()((s) => ({
  ...a,
  actions: {
    setPermissions: (o) => s({
      userPermissions: o,
      isLoading: !1,
      error: null
    }),
    clearPermissions: () => s({
      userPermissions: null,
      error: null
    }),
    setLoading: (o) => s({ isLoading: o }),
    setError: (o) => s({ error: o, isLoading: !1 })
  }
})), I = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch {
      return {};
    }
  return s;
}, p = () => e((s) => {
  var o;
  return ((o = s.userPermissions) == null ? void 0 : o.isAdmin) ?? !1;
}), f = () => {
  const s = e((i) => i.userPermissions), o = u((i) => i.assistants), t = u(
    (i) => i.selectedAssistantId
  );
  if (!s || !t)
    return null;
  const n = o.find((i) => i.id === t);
  if (!(n != null && n.solutionId))
    return null;
  const r = s.permissions.find(
    (i) => i.solutionId === n.solutionId
  );
  return r ? {
    userId: s.userId,
    accountId: s.accountId,
    solutionId: n.solutionId,
    solutionType: r.solutionType,
    isAdmin: s.isAdmin,
    features: I(r.features)
  } : null;
}, S = () => e((s) => s.isLoading), g = () => e((s) => s.actions);
export {
  P as G,
  f as a,
  S as b,
  p as c,
  g as u
};
