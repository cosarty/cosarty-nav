import LZString from 'lz-string'
import defaultDb from './db.mjs'
import fs from 'fs'

export const generateDefaultDb = (dbPath) => {
  let db = []
  try {
    const strings = fs.readFileSync(dbPath).toString().trim()
    if (!strings) {
      throw new Error('empty')
    }
    if (strings[0] === '[' && strings.at(-1) === ']') {
      db = JSON.parse(strings)
    } else {
      db = JSON.parse(LZString.decompressFromBase64(strings))
      if (!db) {
        db = JSON.parse(LZString.decompressFromBase64(defaultDb))
      }
    }
  } catch (e) {
    db = JSON.parse(LZString.decompressFromBase64(defaultDb))
  }

  return db
}
