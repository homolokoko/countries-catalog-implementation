interface nativeName{
    nativeName:string[];
}

interface callingCode{
    suffixes:string[];
}

interface flag{
    alt:string;
}

export interface IContent{
    name:nativeName[];
    cca2:string;
    cca3:string;
    idd:callingCode[];
    altSpellings:string[];
    flags:flag[];
}