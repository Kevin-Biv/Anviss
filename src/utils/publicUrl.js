/*
export default (assetPath)=>{
    return process.env.PUBLIC_URL+assetPath;
}
*/
function publicUrl(assetPath) {
    return process.env.PUBLIC_URL + assetPath;
}
export default publicUrl