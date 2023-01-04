
/* return caller file path */
function getCallerFilePath (): string | undefined
{
    try {
        const err = new Error ();
        const regEx =  new RegExp(/at Object.<anonymous> (\(.*?\))/);
        return err.stack?.match(regEx)?.[0].match (/\(.*?\)/)?.[0]
            .replace (/\(|\)/g, "").split (":", 2).join (":");
    } catch (err) { return undefined;}
}

/* return current path with out extension */
export function getCallerPath (): string  {
    const callerPath:string = getCallerFilePath () as '';
    const target = callerPath.replaceAll (process.cwd (), '');
    return "/" + target.split ('.') [0].replace (/\\.*?\\/, '').replaceAll ("\\", "/");
}
