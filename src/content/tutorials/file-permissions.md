---

title: "Linux File Permissions for Beginners"
category: "Linux"
description: "A beginner-friendly guide to understanding and changing Linux file permissions."
---------------------------------------------------------------------------------------------------------------------------

## What are file permissions?

Linux is a multi-user system. Many people can use the same computer.

File permissions decide who can read, write, or run each file. Without them, anyone could read your private files or change your work.

## Read, write, and execute

Every file has three basic permissions:

- **Read (`r`)** — the ability to open and view the contents of a file.
- **Write (`w`)** — the ability to change or delete the contents of a file.
- **Execute (`x`)** — the ability to run a file as a program or script.

For a directory, these permissions work a little differently. Read lets you list its contents. Write lets you create or delete files inside it. Execute lets you enter it with `cd`.

## User, group, and others

Each permission applies to three scopes of people:

- **User (`u`)** — the owner of the file.
- **Group (`g`)** — the group that owns the file.
- **Others (`o`)** — everyone else on the system.

The letter `a` stands for all three at once.

## Reading permissions from ls -l

Run `ls -l` to see a detailed listing of the current directory.

```bash
ls -l
```

You will see output similar to this:

```bash
-rw-r--r--  1 alice dev  120 Aug  4 10:32 notes.txt
drwxr-xr-x  2 alice dev 4096 Aug  4 10:30 project
```

The first column is the permission string. Let's read `-rw-r--r--` left to right.

- The first character (`-`) is the file type. A `d` means a directory. A `-` means a regular file.
- The next three characters (`rw-`) are the **user** permissions: read and write, but no execute.
- The next three (`r--`) are the **group** permissions: read only.
- The last three (`r--`) are the **others** permissions: read only.

The directory `project` starts with `d`. It shows `rwxr-xr-x`. The owner can do everything. Group and others can read and enter, but cannot modify it.

## chmod with symbolic notation

The `chmod` command changes permissions. Symbolic notation lets you say who (`u`, `g`, `o`, or `a`), what to add or remove (`+` or `-`), and which permission (`r`, `w`, or `x`). The letter `a` stands for all three: user, group, and others.

Make a file executable for its owner:

```bash
chmod u+x script.sh
```

Remove write permission for the group:

```bash
chmod g-w notes.txt
```

Give everyone read access:

```bash
chmod a+r notes.txt
```

Remove execute permission for everyone:

```bash
chmod a-x script.sh
```

## chmod with numeric notation

Numeric (octal) notation is a shortcut. It sets all permissions at once. Each permission has a value:

- Read = 4
- Write = 2
- Execute = 1

Add the values to build a three-digit number. For example, `rwxr-xr-x` is `755`. User is 7 (4+2+1). Group is 5 (4+1). Others is 5 (4+1).

```bash
chmod 755 script.sh
```

Common combinations:

- `chmod 600 file` — owner read and write, nothing for anyone else.
- `chmod 644 file` — owner read/write, group and others read only.
- `chmod 755 file` — owner full access, group and others read and execute.

## Hands-on exercise

Let's practice in a dedicated directory. This keeps you from accidentally modifying an important file.

Create a `permission-practice` directory, enter it, and make a script:

```bash
mkdir permission-practice
cd permission-practice
touch hello.sh
```

Give the script read and write permissions for yourself only, then check the result:

```bash
chmod 600 hello.sh
ls -l
```

You should see `-rw-------` for `hello.sh`. Now make it readable by everyone and executable by you. Check again:

```bash
chmod 644 hello.sh
chmod u+x hello.sh
ls -l
```

You should now see `-rwxr--r--`. When you are done, you can clean up:

```bash
cd ..
rm -rf permission-practice
```

## What's next?

Now that you can read and change permissions, learn about file ownership with `chown` and `chgrp`. Special permissions such as setuid, setgid, and the sticky bit are also useful. If you need a refresher, review the essential Linux commands and files and directories tutorials.
