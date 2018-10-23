

export class Todo {
public id: number;
public texto: String;
public completado: boolean;

constructor(text: String) {
    this.texto = text.charAt(0).toUpperCase() + text.substring(1);
    this.completado = false;
    this.id = Math.random();
}
}
