function triple(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

function printLetter(word: string | null): string {
  if (!word) {
    return "word is not provided";
  }
  return word;
}

const printeLette2 = (word?: string): string[] => {
  if (word) {
    const array: string[] = [];
    for (const char of word) {
      array.push(char);
    }
    return array;
  } else {
    throw new Error("word is undefined");
  }
};

const el = document.querySelector<HTMLInputElement>(".idk");

if (el) {
  el.value = "HYA";
} else {
  el;
}

interface Movie {
  title: string;
  duration: number;
}

interface TvShow {
  title: string;
  numEpisode: number;
  episodeDuration: number;
}

const getDuration = (media: Movie | TvShow): number => {
  if ("numEpisode" in media) {
    return media.numEpisode * media.episodeDuration;
  }
  return media.duration;
};

const printFullDate = (date: string | Date) => {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString);
  }
};

class User {
  constructor(public name: string) {}
}

class Admin {
  constructor(public name: string) {}
}

function printName(entity: User | Admin) {
  if (entity instanceof Admin) {
    entity;
  } else {
    entity;
  }
}

function isString(input: any): input is string {
  return (input as string).toLowerCase() !== undefined;
}

interface Pig {
  type: "pig";
  sound: "oink";
}

interface Rooster {
  type: "rooster";
  sound: "cock";
}

interface Cow {
  type: "cow";
  sound: "mooo";
}

type FarmAnimal = Pig | Rooster | Cow;

function getAnimalSound(animal: FarmAnimal): string {
  switch (animal.type) {
    case "pig":
      return "pig says " + animal.sound;
    case "rooster":
      return "rooster says " + animal.sound;
    case "cow":
      return "cow says " + animal.sound;
    default:
      // we should never make it here
      const shouldNeverGet: never = animal;
      return shouldNeverGet
  }
}
