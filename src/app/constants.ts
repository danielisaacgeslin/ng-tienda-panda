export const constants = {
    STORAGE: {
        PREFIX: '__tienda-panda-storage:',
        get TOKEN() { return `${constants.STORAGE.PREFIX}__token`; }
    }
};
