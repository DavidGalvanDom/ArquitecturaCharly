import { Menu } from "./menu.model";

export class Modulo {
    constructor(
    public id?: number,
    public descripcion?: string,
    public nombre?: string,
    public idaplicacion?: string,
    public Menus?: Menu[]
) {  }
}