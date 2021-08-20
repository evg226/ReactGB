const getProfiles = (state) => state.profile;

const getChats = (state) => state.chats;

const takeGistList = (state) => state.gists.gistList;
const takeGistLoading = (state) => state.gists.loading;
const takeError = (state) => state.gists.error;

module.exports = { getProfiles,getChats,takeGistList,takeGistLoading,takeError };