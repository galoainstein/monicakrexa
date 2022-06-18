import { Injectable } from '@angular/core';

import * as styles from 'src/_exports.scss'

@Injectable({
  providedIn: 'root'
})
export class ScssImportsService {

  constructor() { }

  public getScssImports(): object {
    return JSON.parse(styles.default
    .slice(styles.default.indexOf('{'),styles.default.indexOf('}')+1)
    .replaceAll(': ','": "')
    .replaceAll(';','",')
    .replaceAll('\n  ','\n  "')
    .replace(',\n}','\n}')
    )
  }
}
