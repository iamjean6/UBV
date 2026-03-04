export const CacheKeys = {
  USER_DATA: "user_data",
  USER_PROFILE: "user_profile",
  USER_SETTINGS: "user_settings",
  PROGRAMS_ALL: "programs:all",
  PROGRAM_DETAIL: "programs:detail",
};

function getCacheKey(key, userId) {
  return `${key}:${userId}`;
}

export function getUserDataKey(userId) {
  return getCacheKey(CacheKeys.USER_DATA, userId);
}