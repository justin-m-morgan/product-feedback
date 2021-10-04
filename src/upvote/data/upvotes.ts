const upvotes = [
  {
    requestId: 1,
    userId: 1,
  },
  {
    requestId: 1,
    userId: 2,
  },
  {
    requestId: 2,
    userId: 1,
  },
  {
    requestId: 2,
    userId: 2,
  },
  {
    requestId: 4,
    userId: 8,
  },
  {
    requestId: 4,
    userId: 7,
  },
  {
    requestId: 4,
    userId: 2,
  },
  {
    requestId: 6,
    userId: 5,
  },
  {
    requestId: 6,
    userId: 6,
  },
  {
    requestId: 9,
    userId: 4,
  },
  {
    requestId: 9,
    userId: 7,
  },
  {
    requestId: 11,
    userId: 11,
  },
  {
    requestId: 12,
    userId: 4,
  },
  {
    requestId: 12,
    userId: 8,
  },
].map((upvote, i) => ({ ...upvote, id: i + 1 }));

export default upvotes;
