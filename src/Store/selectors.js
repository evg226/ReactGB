const getProfiles = (state) => state.profile;

const getChatsByUserId = (userId) => {
    return (state) => state.chats[userId];
}

module.exports = { getProfiles,getChatsByUserId };