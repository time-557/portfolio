
import { readFile } from 'fs/promises';

export async function getFile(path: string): Promise <string> {
    const file = await readFile(path, 'utf-8');
    return file;
}

// export async function getDirectory() {

// }