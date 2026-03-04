import { getUserDataKey, CacheKeys } from "./keys.js"
import { setQuery, getQuery } from "./query.js";
import cache from "./index.js";

async function saveUser(userId, todos) {
    const key = getUserDataKey(userId);
    return await setQuery(key, { data: todos }, new Date(Date.now() + Number(process.env.CONTENT_CACHE_DURATION)));
}

async function fetchUser(userId) {
    const key = getUserDataKey(userId);
    const result = await getQuery(key);
    if (!result) return null;
    return result.data;
}

async function deleteUser(userId) {
    const key = getUserDataKey(userId);
    return await setQuery(key, null, new Date(Date.now() + Number(process.env.CONTENT_CACHE_DURATION)));
}

async function savePrograms(programs) {
    const key = CacheKeys.PROGRAMS_ALL;
    return await setQuery(key, programs, new Date(Date.now() + Number(process.env.CONTENT_CACHE_DURATION)));
}

async function fetchPrograms() {
    const key = CacheKeys.PROGRAMS_ALL;
    return await getQuery(key);
}

async function saveProgramDetail(id, program) {
    const key = `${CacheKeys.PROGRAM_DETAIL}:${id}`;
    return await setQuery(key, program, new Date(Date.now() + Number(process.env.CONTENT_CACHE_DURATION)));
}

async function fetchProgramDetail(id) {
    const key = `${CacheKeys.PROGRAM_DETAIL}:${id}`;
    return await getQuery(key);
}

async function invalidateProgramsCache(id = null) {
    await cache.del(CacheKeys.PROGRAMS_ALL);
    if (id) {
        await cache.del(`${CacheKeys.PROGRAM_DETAIL}:${id}`);
    }
}


export default {
    saveUser,
    fetchUser,
    deleteUser,
    savePrograms,
    fetchPrograms,
    saveProgramDetail,
    fetchProgramDetail,
    invalidateProgramsCache
}