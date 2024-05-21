export class Celular {
    constructor(
        public marca?: string | null,
        public serial?: string | null,
        public fechaDeCompra?: string | null,
        public anioDeLanzamiento?: number | null,
        public precio?: number | null,
        public sistemaOperativo?: string | null, 
        public gama?: string | null,
    ) {}
}