---

title: "Install and Use Ollama on Linux: A Beginner's Guide"
category: "AI"
description: "Learn how to install Ollama on Linux, download a model, and chat with it from the terminal."
---------------------------------------------------------------------------------------------------------------------------

## What is Ollama?

Ollama is a tool for running large language models (LLMs) on your own computer. It downloads models, serves them, and lets you chat with them from the terminal.

Running a model locally means your prompts never leave your machine.

## Install Ollama on Linux

The easiest way to install Ollama is with the official install script. Open a terminal and run:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

The script downloads Ollama and sets it up as a background service.

Check that the installation worked:

```bash
ollama --version
```

You should see output like `ollama version 0.x.x`.

## Download a model

Ollama does not install models by default. You download one with `ollama pull`.

For a small, beginner-friendly model, use Llama 3.2:

```bash
ollama pull llama3.2
```

If your computer is low on memory, use the 1B version instead:

```bash
ollama pull llama3.2:1b
```

See which models you have downloaded:

```bash
ollama list
```

You should see `llama3.2` listed with its size.

## Load and interact with the model

The `ollama run` command loads a model and opens an interactive chat.

```bash
ollama run llama3.2
```

The model is now loaded. Type a prompt and press Enter:

```text
Why is the sky blue?
```

The model streams its answer in the terminal. You can keep asking more questions.

You can also ask a single question without starting a chat:

```bash
ollama run llama3.2 "Tell me a short joke"
```

The model answers once and the command finishes.

## Exit the interaction

To leave the interactive chat, type:

```text
/bye
```

You can also press Ctrl+D.

You are now back at the shell prompt. The model is still installed and ready to run again whenever you need it.

## What's next?

Now that you can run a model, try other models with `ollama pull`. Remove models you no longer need with `ollama rm`. You can also use Ollama as a local API server for other tools and scripts.
