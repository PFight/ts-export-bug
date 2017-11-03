### Minimal reproducing example of the typescript bug

    error TS4029: Public property 'baz' of exported class has or is using name 'Baz' from external module "C:/Main/Work/ts-export-bug/A" but cannot be named.

### Steps to reproduce

1. Clone repository
2. Compile sources with typescript version 2.7.0-dev.20171101

        tsc
    
3. See errors

        $ tsc
        B.ts(4,5): error TS4029: Public property 'baz' of exported class has or is using name 'Baz' from external module "C:/Main/Work/ts-export-bug/A" but cannot be named.
        B.ts(6,12): error TS4053: Return type of public method from exported class has or is using name 'Baz' from external module "C:/Main/Work/ts-export-bug/A" but cannot be named.

### Critical details to reproduce

1. Enabled flag `declaration` in compiler options (see `.tsconfig`)
2. Type of field or return type of method are not specified explicit (see workaround)
3. B.ts do not imports A.ts directly, but over Index.ts. So, we have B.ts <- Imports.ts <- A.ts

### Workaround

To see workaround add exlicit type to field and specify return type for method. See branch `workaround` for example.
