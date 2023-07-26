export const CreateGUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c) {
        var uuid = Math.random() * 16 | 0
        var v = c === 'x' ? uuid : ((uuid & 0x3) | 0x8);
        return v.toString(16);
    });
}