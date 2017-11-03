import * as Index from "./Index";

export class Foo {
    public baz = new Index.Baz();
    
    public bazbaz() {
        return Index.Baz;
    }
}

