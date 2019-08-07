import * as fs from 'fs';

export async function readFile(
  path: string,
  encoding = 'utf8',
): Promise<Buffer | string> {
  return new Promise<Buffer | string>((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}
