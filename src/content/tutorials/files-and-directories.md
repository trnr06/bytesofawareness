---

title: "Linux Files and Directories: A Hands-On Guide"
category: "Linux"
description: "Learn how Linux organizes files and directories and practice navigating and managing them from the terminal."
---------------------------------------------------------------------------------------------------------------------------

## Understanding the Linux filesystem

Linux organizes information in a hierarchical filesystem. Directories can contain files as well as other directories.

The top of this hierarchy is called the root directory and is represented by `/`.

```bash
/
```

## Absolute and relative paths

An absolute path starts from the root directory.

```bash
/home/user/projects
```

A relative path starts from your current directory.

```bash
projects
```

## Find your current directory

Use `pwd` to see where you currently are.

```bash
pwd
```

## List files and directories

The `ls` command shows the contents of your current directory.

```bash
ls
```

For a more detailed listing, use:

```bash
ls -la
```

## Move between directories

Use `cd` to change your current directory.

```bash
cd projects
```

Move to the parent directory with:

```bash
cd ..
```

To return to your home directory:

```bash
cd ~
```

## Create directories

Use `mkdir` to create a new directory.

```bash
mkdir practice
```

You can also create nested directories with the `-p` option.

```bash
mkdir -p practice/linux/commands
```

## Create files

Use `touch` to create an empty file.

```bash
touch notes.txt
```

You can create several files at once:

```bash
touch one.txt two.txt three.txt
```

## Copy files

Use `cp` to create a copy of a file.

```bash
cp notes.txt notes-backup.txt
```

## Move and rename files

The `mv` command can move a file into another directory or rename it.

```bash
mv notes.txt practice/
```

To rename a file:

```bash
mv notes-backup.txt backup.txt
```

## Remove files

Use `rm` to remove a file.

```bash
rm backup.txt
```

Be careful when using `rm`. The command does not provide the same kind of recycle-bin experience you may be used to from a graphical desktop.

## Hands-on exercise

Let's combine the commands you've learned.

Create a directory called `linux-practice`, enter it, create a file, and then make a copy of that file.

```bash
mkdir linux-practice
cd linux-practice
touch notes.txt
cp notes.txt notes-backup.txt
ls -la
```

You should now see both `notes.txt` and `notes-backup.txt`.

## What's next?

Once you are comfortable navigating the filesystem, the next step is understanding Linux permissions, ownership, and how users and groups control access to files.

