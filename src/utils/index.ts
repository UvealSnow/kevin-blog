type ConditionalClassObject = Record<string, boolean | (() => boolean)>

function evalRecords(record: ConditionalClassObject): string[] {
  return Object.keys(record).reduce((acc, key) => {
    const value = record[key]
    if (typeof value === 'function') {
      if (value()) acc.push(key);
    } else if (value) {
      acc.push(key)
    }

    return acc;
  }, [] as string[])
}

function groupClassNames(...classNames: (string | ConditionalClassObject)[]): string {
  return classNames.reduce((acc, curr) => {
    if (typeof curr === 'object') {
      acc.push(...evalRecords(curr))
    }

    if (typeof curr === 'string') {
      acc.push(
        curr.replaceAll('\n', '')
        .replace(/\s+/g, ' ')
        .trim()
      )
    }

    return acc;
  }, [] as string[]).join(' ')
}

export {
  evalRecords,
  groupClassNames,
}
