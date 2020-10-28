import "dotenv/config";

const { REACT_APP_FORUM_BASE_URL } = process.env;

const backend = { reactUrl: REACT_APP_FORUM_BASE_URL };

export { backend };
