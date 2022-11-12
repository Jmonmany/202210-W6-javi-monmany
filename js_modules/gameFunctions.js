//
export const isArray = (value) => {
    if( value === null ) return false
    if (typeof value === typeof []) return true;
    return false;
};
