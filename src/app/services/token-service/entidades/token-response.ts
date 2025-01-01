export class TokenResponse{
    Token: string | null;
    NomeUsuario: string | null
    EmpresaUsuario: number;
    constructor() {
        this.Token = null;    
        this.NomeUsuario = null;
        this.EmpresaUsuario = 0;     
    }
}