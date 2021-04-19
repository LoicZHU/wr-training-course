import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUtilsService {

  constructor() { }

  /**
   * Converts bytes from: bytes to yotta bytes (byte, KB, MB, GB, TB, PB, EB, ZB, YB)
   * @param bytes
   * @param decimals
   */
  formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 byte';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
