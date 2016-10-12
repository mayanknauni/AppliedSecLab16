export interface CertificateInterface {
    name: string;
    certificate?: string;
    hash?: string;
    privateKey?: string;
}

export class Certificate implements CertificateInterface {
    public name: string;
    public certificate?: string;
    public hash?: string;
    public privateKey?: string;

    public constructor(jsonObject: any) {
        this.name = jsonObject.name;
        this.certificate = jsonObject.certificate;
        this.hash = jsonObject.hash;
        this.privateKey = jsonObject.privateKey;
    }
}