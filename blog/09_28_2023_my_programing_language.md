# How does my programming language work?

[My programming](https://github.com/Glowman554/FireStorm/tree/old) language is
both compiled and interpreted. I support targeting riscv64, x86_64, and custom
bytecode.

## How does the interpreter work?

The interpreter is a simple Tree-Walking interpreter and was only meant to test
the lexer/parser before implementing compilation to assembly. The interpreter
uses a Uint32Array as memory. This isn't efficient at all and very limited.

## How does the compiler work?

For all 3 targets, the compiler works in very similar ways.

1. The compiler iterates through the AST and compiles functions.
2. The compiler iterates through the compiled functions and removes unused
   functions.
3. The generated code is saved/assembled/linked.

The bytecode target works a little bit differently. ~~Please note: the source
code for the bytecode has not yet been released. The source code will be
released soon (tm).~~

The bytecode target first does all the same things as the other targets. After
that, the target encodes the bytecode as binary and doing that also generates a
function called \_global which initializes global variables. Internally, the
encoded bytecode is in a format which is able to be assembled using the nasm
assembler. It only uses the db, dq and label functionality from nasm. The
compiler internally contains the code to parse this format and convert it to an
actual binary.

## How does the bytecode runtime work?

The runtime is pretty simple. It is a stack-based VM. It implements a function
called "invoke" which contains the main switch case executing the instructions.

The VM starts up by (Please note that the underscore at the beginning of labels
is added in the encoding step):

1. Calling \_global (initializing global variables)
2. Calling \_spark
3. IF a noreturn function returns: Calling \_unreachable.

The bytecode has a limit of 256 local variables.

There are 2 options to call a function in the runtime. Those are: invoke and
invoke_native.

Invoke is used to call a function implemented using bytecode and invoke_native
is used to call a function implemented in the runtime. Native functions need to
be marked with the "assembly" attribute.

When using load_indexed to index a non-array number, the runtime indexes the
bits of the number and stores the result as 1 or 0 on the stack.

# How hard is it to create a programming language?

Creating an interpreted programming language actually isn't as hard as one might
think. The hardest part is the parser, which might be challenging for some
people but is definitely possible. Actually compiling the programming language
to assembly is tricky. You need to know the assembly language you are targeting
pretty well, and you need to keep track of a lot of stuff. Compiling the
programming language to bytecode is easier but still challenging.
