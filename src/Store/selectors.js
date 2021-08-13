const getProfiles = (state) => state.profile;

const getChatsByUserId = (userId) => {
    return (state) => state.chats[userId];
}

const takeGistList = (state) => state.gists.gistList;
const takeGistLoading = (state) => state.gists.loading;
const takeError = (state) => state.gists.error;

module.exports = { getProfiles,getChatsByUserId,takeGistList,takeGistLoading,takeError };