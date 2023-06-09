interface nativeName {
    nativeName: string[];
}

interface callingCode {
    suffixes: string[];
}

interface flag {
    alt: string;
}

interface native {
    ara: string[];
}

export interface ICountry {
    sort: any;
    paginator: any;
    name: nativeName[];
    cca2: string;
    cca3: string;
    idd: callingCode[];
    altSpellings: string[];
    flags: flag[];
    translations: native[];
    firstName: string;
    lastName: string;
    score: string;
}
