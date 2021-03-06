/**
 * This file for testing purpose only.
 */

import { normalizeForSearch } from '.'

type ID = string
interface User {
  firstName: string
  lastName: string
  fullName_search: string
  fullName_search_reverse: string
}

export class Database {
  private _db: Map<ID, User> = new Map()

  private makeId(): string {
    let id = ''
    while (id.length < 8) id = Math.random().toString(16).substring(2)
    return id
  }

  public set(firstName: string, lastName: string): ID {
    firstName = firstName.trim()
    lastName = lastName.trim()

    const id = this.makeId()

    this._db.set(id, {
      firstName,
      lastName,
      fullName_search: normalizeForSearch(firstName + ' ' + lastName),
      fullName_search_reverse: normalizeForSearch(lastName + ' ' + firstName)
    })

    return id
  }

  public get(id: ID): User | undefined {
    return this._db.get(id)
  }

  public search(str: string): User[] {
    str = normalizeForSearch(str)

    const reg = new RegExp('^' + str)

    let users: User[] = []

    this._db.forEach(user => {
      if (reg.test(user.fullName_search) || reg.test(user.fullName_search_reverse)) users.push(user)
    })

    return users
  }
}
