import * as Index from "./Index";

export class Foo {
    public baz: Index.Baz = new Index.Baz();
    
    public bazbaz(): Index.Baz {
        return Index.Baz;
    }
}

