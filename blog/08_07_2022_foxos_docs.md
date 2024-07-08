# Creating a documentation for FoxOS

## History

Before we did rewrite the kernel, we had a script to automatically create a
documentation for FoxOS, it has A LOT of issues though. The main issue was that
the documentation was inlined in the code, witch made it hard to edit.

## How it is now

The new documentation is in the `docs.txt` file witch can be found in the root
of the [horizon](https://github.com/TheUltimateFoxOS/horizon) repository. The
documentation is in the following format:

```
#<encoded_filename>:<function>: <description>
```

It also supports to exclude files from the documentation using this format:

```
#exclude:<encoded_filename>
```

Assembly files are a little bit special, they need a special header in the
assembly file so that the script knows a valid c signature for the assembly
function. The header format is:

```
;#<label_name>-signature: <c_signature>
```

if a assembly label isn't a function, you can use the following format to ignore
it:

```
;#<label_name>-discard
```

### How do we encode the filename?

It is really easy, just take the path and replace every `/` with `_`.

## What challenges did i face while creating this documentation?

There where quite a few challenges. Heres a list of some of them:

- Finding the c signature for a function
- Creating a HTML file with a folder like structure to find the files
- Generate HTML witch fits to the already existing website
- Setup CI to automatically update the documentation

## Conclusion

We should have created a documentation for FoxOS way earlier than we did. It is
a lot of work to document the now over 750 functions in the kernel. We still
have a lot of work to do, but the build process works much better now.

I am very happy with the result. Here is a screenshot of the documentation
index:

![new foxos documentation index](/blog/foxos_new_docs_index.png)

And here is a screenshot of the documentation itself:

![new foxos documentation](/blog/foxos_new_docs.png)

You can check it out [here](https://theultimatefoxos.dev/docs)
