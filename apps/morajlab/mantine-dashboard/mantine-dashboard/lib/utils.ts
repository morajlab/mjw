export const getTwoLetterUserName = (name: string): string =>
  ((nameArray: string[] = name.split('-')) =>
    nameArray.length >= 2
      ? nameArray
          .slice(0, 2)
          .map((value) => value[0].toUpperCase())
          .join('')
      : name[0].toUpperCase())();
